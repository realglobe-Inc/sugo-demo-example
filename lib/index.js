/**
 * Demo of sugo example
 * @module sugo-demo-example
 */

'use strict'

let d = (module) => module.default || module

module.exports = {
  get actor () { return d(require('./actor')) },
  get caller () { return d(require('./caller')) },
  get configs () { return d(require('./configs')) },
  get hub () { return d(require('./hub')) },
  get ui () { return d(require('./ui')) }
}
