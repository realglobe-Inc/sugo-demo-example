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
    let compiler = sgCompiler()
    let cloud = yield sugoCloud.withKoa({
      port, storage,
      middlewares: [
        // Serve static files
        require('apeman-app-static')('ui', {}),
        require('apeman-app-body')({}),
        require('apeman-app-route')({
          '/actions/compile': {
            'POST': co.wrap(function * compile (ctx) {
              let { data } = ctx.request.body
              try {
                console.log('!!!String(data)', String(data))
                let compiled = yield compiler.compile(String(data))
                ctx.body = {
                  data: compiled
                }
              } catch (e) {
                ctx.status = 400
                ctx.body = {
                  data: {
                    message: 'Failed to compile script'
                  }
                }
              }
            })
          }
        })
      ]
    })
    return cloud
  })
}

module.exports = cloud
