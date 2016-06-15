/**
 * Run spot
 * @function spot
 * @returns {Promise}
 */
'use strict'

const sugoSpot = require('sugo-spot')
const co = require('co')
const { port, host } = require('./configs')

const CLOUD_URL = `http://${host}:${port}/spots`

/** @lends spot */
function spot () {
  return co(function * (options = {}) {
    let spot = sugoSpot(CLOUD_URL, {
      key: 'spot01',
      interfaces: {
        // Plugin interface
      }
    })
    yield spot.connect()
    return spot
  })
}

module.exports = spot
