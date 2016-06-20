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

let { TERMINAL_URL } = window

/**
 * Dynamic component create from the online-editor
 * @class DynamicComponent
 */
const DynamicComponent = React.createClass({
  render () {
     return (
      <div className='dynamic-component'>
        This is the mounted content!
      </div>
     )
  }
})

function onLoad () {
  window.removeEventListener('DOMContentLoaded', onLoad)
  
  let container = document.getElementById('${CONTAINER_ID}')
  let element = React.createElement(DynamicComponent, null)
  ReactDOM.render(element, container, () => {
    console.debug('Dynamic component mounted')
  })
}

window.addEventListener('DOMContentLoaded', onLoad)
//
// co(function * () {
//   let terminal = sugoTerminal(url)
//   let spot01 = yield terminal.connect('spot01')
//
//   // Take ping-pong with noop interface.
//   {
//     let noop = spot01.noop()
//     console.log('Send ping to noop...')
//     let pong = yield noop.ping()
//     console.log(${'`...received ping from noop: "${pong}"`'})
//   }
// }).catch((err) => console.error(err))
`,
  /**
   * Default html
   * @type {string}
   */
  DEFAULT_HTML: `
<html>
<head>
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
