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
function cloud () {
  return co(function * () {
    let cloud = yield sugoCloud({
      port
    })

    return cloud
  })
}

module.exports = cloud
