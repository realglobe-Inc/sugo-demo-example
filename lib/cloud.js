/**
 * Run cloud
 * @function cloud
 * @returns {Promise}
 */
'use strict'

const sugoCloud = require('sugo-cloud')
const co = require('co')
const defaults = require('defaults')

/** @lends cloud */
function cloud (configs = {}) {
  defaults(configs, require('./configs'))
  let { port, storage } = configs

  return co(function * () {
    let cloud = yield sugoCloud({
      port, storage
    })

    return cloud
  })
}

module.exports = cloud
