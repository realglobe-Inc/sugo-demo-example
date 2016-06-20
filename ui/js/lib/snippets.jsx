/**
 * Snippet variables.
 * @namespace Snippets
 */
'use strict'

/** @lends Snippets */
module.exports = Object.assign(exports, {
  /**
   * Default script
   * @type {string}
   */
  DEFAULT_SCRIPT: `
let { TERMINAL_URL } = window
console.log('TERMINAL_URL', TERMINAL_URL)
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
<body>
"hoge"
</body>
</body>
</html>
`
})
