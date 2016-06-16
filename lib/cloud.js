/**
 * Run cloud
 * @function cloud
 * @returns {Promise}
 */
'use strict'

const sugoCloud = require('sugo-cloud')
const sgCompiler = require('sg-compiler')
const co = require('co')
const debug = require('debug')('sugo:demo:example:cloud')

let configs = require('./configs')

/** @lends cloud */
function cloud () {
  debug('Example cloud invoked')
  let { port, storage } = configs()
  return co(function * () {
    let cloud = yield sugoCloud({
      port, storage,
      public: [ 'ui' ],
      middlewares: [],
      endpoints: {
        '/actions/compile': require('sugo-endpoint-compile')()
      }
    })
    return cloud
  })
}

module.exports = cloud
