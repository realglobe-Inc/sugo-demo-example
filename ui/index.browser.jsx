'use strict'

require('babel-polyfill')

import React, {PropTypes as types} from 'react'
import apReact from 'apeman-brws-react'

import compileAgent from 'sugo-endpoint-compile/lib/agent'

import {
  ApContainer, ApButton,
  ApMain,
  ApSection, ApSectionHeader, ApSectionBody,
  ApTabGroup, ApTab, ApTabItem, ApTabContent,
  ApFooter
} from 'apeman-react-basic'
import {
  SgExample,
  SgExampleHeader,
  SgExampleScript,
  SgExampleStyle
} from 'sugo-react-example'
import co from 'co'
import sugoTerminal from 'sugo-terminal'
import pkg from '../package.json'

import configs from '../lib/configs'

let { color, port, hostname } = configs()

const DEFAULT_SCRIPT = `
let url = 'http://${hostname}:${port}/terminals'
co(function * () {
  let terminal = sugoTerminal(url)
  let spot01 = yield terminal.connect('spot01')

  // Take ping-pong with noop interface.
  {
    let noop = spot01.noop()
    console.log('Send ping to noop...')
    let pong = yield noop.ping()
    console.log(${'`...received ping from noop: "${pong}"`'})
  }
}).catch((err) => console.error(err))
`
const globals = {
  co,
  sugoTerminal
}

const IndexComponent = React.createClass({
  getInitialState () {
    return {
      script: DEFAULT_SCRIPT,
      scriptBusy: false,
      scriptError: null,
      tab: 'SCRIPT'
    }
  },

  render () {
    const s = this
    let { state } = s
    let { script, tab } = state
    return (
      <div>
        <SgExampleStyle dominant={ color }/>
        <SgExample>
          <SgExampleHeader pkg={ pkg }/>
          <ApMain>
            <ApSection>
              <ApSectionHeader lined>Sandbox</ApSectionHeader>
              <ApSectionBody>
                <ApTabGroup>
                  <ApTab>
                    <ApTabItem selected={ tab === 'SCRIPT' }>Script</ApTabItem>
                    <ApTabItem selected={ tab === 'GUI' }>GUI</ApTabItem>
                  </ApTab>
                  <ApTabContent selected={ tab === 'SCRIPT' }>
                    <SgExampleScript script={ script }
                                     spinning={ state.scriptBusy }
                                     onChange={ (e) => s.setState({script: e.value}) }
                                     onRun={ () => s.runScript() }
                                     error={ state.scriptError }
                    />
                  </ApTabContent>
                </ApTabGroup>
              </ApSectionBody>
            </ApSection>
            <ApSection>
              <ApSectionHeader lined>Console</ApSectionHeader>
              <ApSectionBody>
              </ApSectionBody>
            </ApSection>
          </ApMain>
          <ApFooter>

          </ApFooter>
        </SgExample>
      </div>
    )
  },

  componentDidMount () {
    const s = this

    // Register global variables
    Object.assign(window, globals)
  },

  runScript () {
    const s = this
    let { state } = s

    co(function * () {
      s.setState({ scriptBusy: true })
      let compiled = yield compileAgent('/actions/compile').compile(state.script)
      console.log('compiled script:', compiled)
      s.setState({ scriptBusy: false })
    }).catch((scriptError) => {
      s.setState({ scriptError, scriptBusy: false })
    })
  }
})

// Mount component
{
  const CONTAINER_ID = 'index-wrap'

  const onLoad = () => {
    window.removeEventListener('DOMContentLoaded', onLoad)
    apReact.render(CONTAINER_ID, IndexComponent, {}, function done () {
      // The component is ready.
    })
  }

  window.addEventListener('DOMContentLoaded', onLoad)
}
