/**
 * Run terminal
 * @function terminal
 * @returns {Promise}
 */
'use strict'

const sugoTerminal = require('sugo-terminal')
const co = require('co')
const defaults = require('defaults')

/** @lends terminal */
function terminal (configs = {}) {
  defaults(configs, require('./configs'))
  let { port, hostname } = configs
  let url = `http://${hostname}:${port}/terminals`

  return co(function * () {
    let terminal = sugoTerminal(url, {})
    let spot01 = yield terminal.connect('spot01')

    return terminal
  })
}

module.exports = terminal
