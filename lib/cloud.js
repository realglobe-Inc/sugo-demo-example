/**
 * Run cloud
 * @function cloud
 * @returns {Promise}
 */
'use strict'

const sugoCloud = require('sugo-cloud')
const co = require('co')
let { port, storage } = require('./configs')

/** @lends cloud */
function cloud (configs = {}) {
  return co(function * () {
    let cloud = yield sugoCloud({
      port, storage
    })

    return cloud
  })
}

module.exports = cloud
