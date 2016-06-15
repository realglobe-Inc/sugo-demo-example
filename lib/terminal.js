/**
 * Run terminal
 * @function terminal
 * @returns {Promise}
 */
'use strict'

const sugoTerminal = require('sugo-terminal')
const co = require('co')
const debug = require('debug')('sugo:demo:example:terminal')

let { port, hostname } = require('./configs')

/** @lends terminal */
function terminal () {
  debug('Example terminal invoked')

  let url = `http://${hostname}:${port}/terminals`

  return co(function * () {
    let terminal = sugoTerminal(url)
    let spot01 = yield terminal.connect('spot01')

    // Take ping-pong with noop interface.
    {
      let noop = spot01.noop()
      console.log('Send ping to noop...')
      let pong = yield noop.ping()
      console.log(`...received ping from noop: "${pong}"`)
    }

    return terminal
  })
}

module.exports = terminal
