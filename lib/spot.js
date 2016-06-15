/**
 * Run spot
 * @function spot
 * @returns {Promise}
 */
'use strict'

const sugoSpot = require('sugo-spot')
const co = require('co')
let { port, hostname } = require('./configs')

/** @lends spot */
function spot (configs = {}) {
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
