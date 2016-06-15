/**
 * Run terminal
 * @function terminal
 * @returns {Promise}
 */
'use strict'

const sugoTerminal = require('sugo-terminal')
const co = require('co')

const { port, host } = require('./configs')

const CLOUD_URL = `http://${host}:${port}/terminals`

/** @lends terminal */
function terminal () {
  return co(function * () {
    let terminal = sugoTerminal(CLOUD_URL, {})
    let spot01 = yield terminal.connect('spot01')

    return terminal
  })
}

module.exports = terminal
