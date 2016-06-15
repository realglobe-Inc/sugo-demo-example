/**
 * Run cloud
 * @function cloud
 * @returns {Promise}
 */
'use strict'

const sugoCloud = require('sugo-cloud')
const co = require('co')
const debug = require('debug')('sugo:demo:example:cloud')

let { port, storage } = require('./configs')

/** @lends cloud */
function cloud () {
  debug('Example cloud invoked')

  return co(function * () {
    let cloud = yield sugoCloud.withKoa({
      port, storage,
      middlewares: [
        // Serve static files
        ...require('apeman-app-static')('ui', {
          // Options
          dotfiles: 'ignore',
          extensions: [ '.html' ]
        })
      ]
    })

    return cloud
  })
}

module.exports = cloud
