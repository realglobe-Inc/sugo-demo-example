/**
 * Demo of sugo example
 * @module sugo-demo-example
 */

'use strict'

let d = (module) => module.default || module

module.exports = {
  get cloud () { return d(require('./cloud')) },
  get configs () { return d(require('./configs')) },
  get spot () { return d(require('./spot')) },
  get terminal () { return d(require('./terminal')) }
}
