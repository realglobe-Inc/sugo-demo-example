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
import React, {PropTypes as types} from 'react'
import ReactDOM from 'react-dom'
import {ApButton} from 'apeman-react-button'
import co from 'co'
import sugoTerminal from 'sugo-terminal'
import sugoObserver from 'sugo-observer'

/**
 * Dynamic component create from the online-editor
 * @class DynamicComponent
 */
const DynamicComponent = React.createClass({
  render () {
     return (
      <div className='dynamic-component'>
        <ApButton>Ping!</ApButton>
      </div>
     )
  },
  
  componentDidMount () {
    const s = this
    let {protocol, host} = window.location
    s.terminal = sugoTerminal(${'`${protocol}//${host}/terminals`'})
    // co(function * () {
    //   let terminal = sugoTerminal(url)
    //   let spot01 = yield terminal.connect('spot01')
    //   // Take ping-pong with noop interface.
    //   {
    //     let noop = spot01.noop()
    //     console.log('Send ping to noop...')
    //     let pong = yield noop.ping()
    //     console.log(${'`...received ping from noop: "${pong}"`'})
    //   }
    // }).catch((err) => console.error(err))
  }
})

let container = document.getElementById('${CONTAINER_ID}')
let element = (<DynamicComponent/>)
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
