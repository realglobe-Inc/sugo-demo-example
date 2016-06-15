'use strict'

import React, {PropTypes as types} from 'react'
import apReact from 'apeman-brws-react'
import {ApPage, ApContainer, ApButton} from 'apeman-react-basic'
import {ApThemeStyle} from 'apeman-react-theme'
import {ApEditor, ApEditorStyle} from 'apeman-react-editor'
import co from 'co'
import sugoTerminal from 'sugo-terminal'

import {color, port, hostname} from '../lib/configs'
const DEFAULT_SCRIPT = `
#!/usr/bin/env node
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
      script: DEFAULT_SCRIPT
    }
  },

  render () {
    const s = this
    let { state } = s
    return (
      <div>
        <ApThemeStyle dominant={ color }/>
        <ApEditorStyle highlightColor={ color }/>
        <ApPage>
          <ApContainer>
            <ApEditor value={ state.script }
                      onChange={ (e) => s.setState({script: e.value}) }
            />
          </ApContainer>
        </ApPage>
        <div>
          <ApButton>Run</ApButton>
        </div>
      </div>
    )
  },

  componentDidMount () {
    const s = this

    // Register global variables
    Object.assign(window, globals)
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
