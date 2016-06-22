/**
 * Snippet variables.
 * @namespace Snippets
 */
'use strict'

const CONTAINER_ID = 'dynamic-mount-root'

/** @lends Snippets */
module.exports = Object.assign(exports, {
  /**
   * Default script
   * @type {string}
   */
  DEFAULT_SCRIPT: `

require('babel-polyfill')

import React, {PropTypes as types} from 'react'
import ReactDOM from 'react-dom'
import {ApBigButton, ApButton} from 'apeman-react-button'
import {ApSelect} from 'apeman-react-select'
import co from 'co'
import sugoTerminal from 'sugo-terminal'
import sugoObserver from 'sugo-observer'

/**
 * Dynamic component create from the online-editor
 * @class DynamicComponent
 */
const DynamicComponent = React.createClass({
  // --------------------
  // Specs
  // --------------------
  
  getInitialState () {
    const s = this
    let {spots} = s.props 
    return {
      spotKey: spots.length > 0 ? spots[0].key : null
    }
  },

  render () {
    const s = this
    let { state, props } = s
    let { spots } = props
    return (
      <div className='dynamic-component'>
        <div>
          <ApSelect options={ 
            (spots || []).reduce((opt, sp) => Object.assign(opt, {[sp.key]: sp.key}), {}) 
           } name='spotKey' value={ state.spotKey }
             onChange={ (e) => s.setState({ spotKey: e.target.value }) }
           />
        </div>
        <ApBigButton onTap={ () => s.withTerminal(function * sendPing(terminal){
            let {spotKey} = s.state
            console.log('terminal', terminal)
            let spot = yield terminal.connect(spotKey)
            let noop = spot.noop()
            console.log('Send ping to noop...')
            let pong = yield noop.ping()
            console.log(${'`...received ping from noop: "${pong}"`'})
            yield spot.disconnect()
        }) }>Ping!</ApBigButton>
      </div>
    )
  },
  
  // --------------------
  // LifeCycle
  // --------------------
  
  componentDidMount () {
    const s = this
    let {protocol, host} = window.location
    s.terminal = sugoTerminal(${'`${protocol}//${host}/terminals`'})
  },
  
  // --------------------
  // custom
  // --------------------
  
  withTerminal (handler) {
    const s = this
    let {terminal} = s
    if (!terminal) {
      return
    }
    co(handler, terminal).catch((err) => console.error(err)) 
  }
})

let { spots } = window
let container = document.getElementById('${CONTAINER_ID}')
let element = (<DynamicComponent spots={ spots || [] }/>)
ReactDOM.render(element, container)

`,
  /**
   * Default html
   * @type {string}
   */
  DEFAULT_HTML: `
<html>
<head>
<link rel="stylesheet" href="./css/theme.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.css"/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css"/>
<script src="js/external.cc.js"></script>
</head>
<body>
<div id="${CONTAINER_ID}">
This is root of dynamic content
</div>
</body>
</html>
`
})
