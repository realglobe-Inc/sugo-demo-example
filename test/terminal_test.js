/**
 * Test case for terminal.
 * Runs with mocha.
 */
'use strict'

const terminal = require('../lib/terminal.js')
const spot = require('../lib/spot.js')
const cloud = require('../lib/cloud.js')
const assert = require('assert')
const filedel = require('filedel')
const co = require('co')
const apemansleep = require('apemansleep')

describe('terminal', () => {
  let { STORAGE } = process.env
  before(() => co(function * () {
    let storage = `${__dirname}/../tmp/testing-terminal/**/*.json`
    yield filedel(storage)
    process.env.STORAGE = storage
  }))

  after(() => co(function * () {
    process.env.STORAGE = STORAGE
  }))

  it('Terminal', () => co(function * () {
    let cloudInstance = yield cloud()
    let spotInstance = yield spot()
    let terminalInstance = yield terminal()
    yield apemansleep.sleep(300)
    yield terminalInstance.disconnect()
    yield spotInstance.disconnect()
    yield cloudInstance.close()
  }))
})

/* global describe, before, after, it */
