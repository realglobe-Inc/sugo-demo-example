'use strict'

import React, {PropTypes as types} from 'react'
import apReact from 'apeman-brws-react'
import {ApPage, ApContainer, ApButton} from 'apeman-react-basic'
import {ApThemeStyle} from 'apeman-react-theme'
import {ApEditor, ApEditorStyle} from 'apeman-react-editor'
import co from 'co'
import classnames from 'classnames'
import sugoTerminal from 'sugo-terminal'
import apRequest from 'apeman-brws-request'
require("babel-polyfill")

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
      busy: false
    }
  },

  render () {
    const s = this
    let { state } = s
    let { script } = state
    return (
      <div>
        <ApThemeStyle dominant={ color }/>
        <ApEditorStyle highlightColor={ color }/>
        <ApPage>
          <ApContainer>
            <div>
              <ApEditor className={ classnames('editor', {
                'editor-busy': state.busy
              }) }
                        value={ script }
                        onChange={ (e) => s.setState({script: e.value}) }
              />
            </div>
            <div>
              <ApButton primary
                        disabled={ state.busy }
                        onTap={ s.runScript }>Run Script</ApButton>
            </div>
          </ApContainer>
        </ApPage>

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
      s.setState({ busy: true })
      let { script } = state
      let { body } = yield apRequest.post('/actions/compile', {
        data: {
          type: 'javascript',
          attributes: {
            script
          }
        }
      })
      let { attributes } = body.data
      console.log('compiled script:', attributes.script)
      s.setState({ busy: false })
    }).catch((err) => {
      console.error('error', err)
      s.setState({ busy: false })
    })
  }
})

// Mount component
{
  const CONTAINER_ID = 'index-wrap'
  window.onload = function () {
    apReact.render(CONTAINER_ID, IndexComponent, {}, function done () {
      // The component is ready.
    })
  }
}
