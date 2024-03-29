/**
 * Run caller
 * @function caller
 * @returns {Promise}
 */
'use strict'

const pkg = require('../package.json')
const sugoCaller = require('sugo-caller')
const co = require('co')
const debug = require('debug')('sugo:demo:example:caller')
const colorprint = require('colorprint')

let configs = require('./configs')

/** @lends caller */
function caller () {
  debug('Example caller invoked')

  let { port, hostname } = configs()
  let url = `http://${hostname}:${port}/callers`

  let { INTERVAL, ACTOR_KEY } = process.env

  let actorKey = ACTOR_KEY
  if (!actorKey) {
    throw new Error('ACTOR_KEY is required.')
  }
  let interval = INTERVAL || 1200

  colorprint.notice(`[${pkg.name}] Running caller script...`)
  colorprint.trace('Settings: %s', { port, hostname, actorKey, interval })
  return co(function * () {
    let caller = sugoCaller(url)
    let actor = yield caller.connect(actorKey)

    let noop = actor.get('noop')
    yield noop.assert()

    let loopCount = 0
    let loop = setInterval(co.wrap(function * main () {
      loopCount += 1
      colorprint.info(`Loop ${loopCount} started ...`)

      // Take ping-pong with noop interface.
      {
        let noop = actor.get('noop')
        console.log('Send ping to noop...')
        let pong = yield noop.ping()
        console.log(`...received ping from noop: "${pong}"`)
      }
      colorprint.info(`...loop ${loopCount} finished!`)
    }), interval)
    caller.kill = () => Promise.resolve(clearInterval(loop))
    return caller
  }).catch((err) => {
    colorprint.error(err)
    return Promise.reject(err)
  })
}

module.exports = caller
