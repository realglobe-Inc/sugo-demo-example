/**
 * Run terminal
 * @function terminal
 * @returns {Promise}
 */
'use strict'

const sugoTerminal = require('sugo-terminal')
const co = require('co')
let { port, hostname } = require('./configs')

/** @lends terminal */
function terminal (configs = {}) {
  let url = `http://${hostname}:${port}/terminals`

  return co(function * () {
    let terminal = sugoTerminal(url, {})
    let spot01 = yield terminal.connect('spot01')

    return terminal
  })
}

module.exports = terminal
