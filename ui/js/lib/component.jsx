/**
 * Root component to mount.
 * @class Component
 */
'use strict'

require('babel-polyfill')

import React, {PropTypes as types} from 'react'

import compileAgent from 'sugo-endpoint-compile/lib/agent'

import {
  ApContainer, ApButton,
  ApSection, ApSectionHeader, ApSectionBody,
} from 'apeman-react-basic'
import {
  SgExample,
  SgExampleHeader,
  SgExampleBody,
  SgExampleWorkspace,
  SgExampleFooter,
  SgExampleStyle
} from 'sugo-react-example'
import co from 'co'
import sugoTerminal from 'sugo-terminal'

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
      scriptError: null,
      tab: 'WORKSPACE',
      globals: {
        co,
        sugoTerminal,
        require: window.require,
        TERMINAL_URL: `http://${hostname}:${port}/terminals`
      }
    }
  },

  render () {
    const s = this
    let { state, props } = s
    let { pkg, color } = props
    let { tab, script, html, globals } = state
    return (
      <div>
        <SgExampleStyle dominant={ color }/>
        <SgExample>
          <SgExampleHeader { ...{ tab, pkg } } onTabChange={ (e) => s.setState({tab: e.tab}) }/>
          <SgExampleBody hidden={ tab !== 'WORKSPACE' }>
            <ApSection>
              <ApSectionHeader lined>
                Playground
              </ApSectionHeader>
              <ApSectionBody>
                <SgExampleWorkspace { ...{ html, script, globals } }
                  compile={ s.compileScript }
                  onChange={ s.handleChange }
                />
              </ApSectionBody>
            </ApSection>
          </SgExampleBody>
          <SgExampleBody hidden={ tab !== 'GUIDE' }>
          </SgExampleBody>
          <SgExampleFooter>

          </SgExampleFooter>
        </SgExample>
      </div>
    )
  },

  componentDidMount () {
    const s = this
  },

  // --------------------
  // custom
  // --------------------

  handleChange (e) {
    const s = this
    let { html, script, globals } = e
    s.setState({ html, script, globals })
  },

  compileScript (script) {
    const s = this
    let { state } = s
    return compileAgent('/actions/compile').compile(script)
  }
})

export default Component
