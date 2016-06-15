/**
 * Run spot
 * @function spot
 * @returns {Promise}
 */
'use strict'

const sugoSpot = require('sugo-spot')
const co = require('co')
const defaults = require('defaults')

/** @lends spot */
function spot (configs = {}) {
  defaults(configs, require('./configs'))
  let { port, hostname } = configs
  let url = `http://${hostname}:${port}/spots`

  return co(function * () {
    let spot = sugoSpot(url, {
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
