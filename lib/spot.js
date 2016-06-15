/**
 * Run spot
 * @function spot
 * @returns {Promise}
 */
'use strict'

const sugoSpot = require('sugo-spot')
const co = require('co')
const debug = require('debug')('sugo:demo:example:spot')
const noop = require('sugo-interface-noop')

let configs = require('./configs')

/** @lends spot */
function spot () {
  debug('Example spot invoked')
  let { port, hostname } = configs()
  let url = `http://${hostname}:${port}/spots`

  return co(function * () {
    let spot = sugoSpot(url, {
      key: 'spot01',
      interfaces: {
        noop: noop()
      },
      force: true
    })
    yield spot.connect()
    return spot
  })
}

module.exports = spot
