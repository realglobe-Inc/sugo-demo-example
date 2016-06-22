/**
 * Root component to mount.
 * @class Component
 */
'use strict'

require('babel-polyfill')

import React, {PropTypes as types} from 'react'

import cloudAgent from 'sugo-cloud/lib/agent'
import compileAgent from 'sugo-endpoint-compile/lib/agent'

import {
  ApContainer, ApButton,
  ApSection, ApSectionHeader, ApSectionBody
} from 'apeman-react-basic'
import {
  SgExample,
  SgExampleHeader,
  SgExampleBody,
  SgExamplePlayground,
  SgExampleStatus,
  SgExampleLinks,
  SgExampleFooter
} from 'sugo-react-example'
import co from 'co'
import sugoTerminal from 'sugo-terminal'
import sugoObserver from 'sugo-observer'

import {DEFAULT_SCRIPT, DEFAULT_HTML} from './snippets'

/** @lends Component */
const Component = React.createClass({
  propTypes: {
    /** Port number of the cloud */
    port: types.number,
    /** Hostname of the cloud */
    hostname: types.string,
    /** Package data */
    pkg: types.object,
    /** Theme color */
    color: types.string
  },
  getInitialState () {
    const s = this
    let { props } = s
    const { port, hostname } = props
    return {
      script: DEFAULT_SCRIPT,
      html: DEFAULT_HTML,
      tab: 'DEMO',
      playground: false,
      terminals: [],
      spots: [],
      globals: {
        require (name) {
          let modules = {
            co,
            'sugo-terminal': sugoTerminal,
            'sugo-observer': sugoObserver
          }
          if (modules[ name ]) {
            return modules[ name ]
          }
          return window.require(name)
        }
      }
    }
  },

  render () {
    const s = this
    let { state, props } = s
    let { pkg } = props
    let { tab, script, html, globals, spots } = state
    return (
      <div>
        <SgExample>
          <SgExampleHeader { ...{ tab, pkg } }
            spots={ spots }
            onTabChange={ (e) => s.setTab(e.tab) }/>
          <SgExampleBody hidden={ tab !== 'DEMO' }>
            <SgExampleStatus spots={ spots }/>
            <SgExamplePlayground { ...{ html, script, globals } }
              compile={ s.compileScript }
              onChange={ s.handleChange }
              pipeConsole={ true }
              closed={ !state.playground }
              onToggle={ s.togglePlayground }
            />
          </SgExampleBody>
          <SgExampleBody hidden={ tab !== 'GUIDES' }>
            <SgExampleLinks links={ require('../../../doc/links.json') }/>
          </SgExampleBody>
          <SgExampleFooter>

          </SgExampleFooter>
        </SgExample>
      </div>
    )
  },

  componentDidMount () {
    const s = this
    let { protocol, host, hash } = window.location
    s.observer = sugoObserver(`${protocol}//${host}/observers`, (data) => {
      console.log('observed')
    })
    s.observer.start()
    s.updateInfo()
    s.setTab(String(hash).replace(/^#/, ''))
  },

  componentWillUnmount () {
    const s = this
    s.observer.stop()
  },

  // --------------------
  // custom
  // --------------------

  setTab (tab) {
    const s = this
    tab = tab || 'DEMO'
    s.setState({ tab })
    window.location.hash = tab
  },

  handleChange (e) {
    const s = this
    let { html, script, globals } = e.values
    s.setState({ html, script, globals })
  },

  compileScript (script) {
    const s = this
    let { state } = s
    return compileAgent('/actions/compile').compile(script)
  },

  updateInfo () {
    const s = this
    co(function * () {
      let spots = yield cloudAgent().spots()
      console.log('spots', spots)
    }).catch((err) => console.error(err))
  },

  togglePlayground () {
    const s = this
    let { state } = s
    s.setState({ playground: !state.playground })
  }
})

export default Component
