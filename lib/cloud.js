/**
 * Run cloud
 * @function cloud
 * @returns {Promise}
 */
'use strict'

const sugoCloud = require('sugo-cloud')
const co = require('co')
const { port } = require('./configs')

/** @lends cloud */
function cloud (options = {}) {
  return co(function * () {
    options = Object.assign({ port }, options)
    let cloud = yield sugoCloud(options)

    return cloud
  })
}

module.exports = cloud
