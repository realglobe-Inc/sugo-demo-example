/**
 * Test case for spot.
 * Runs with mocha.
 */
'use strict'

const spot = require('../lib/spot.js')
const cloud = require('../lib/cloud.js')
const assert = require('assert')
const filedel = require('filedel')
const co = require('co')
const apemansleep = require('apemansleep')

describe('spot', () => {
  let { STORAGE } = process.env
  before(() => co(function * () {
    let storage = `${__dirname}/../tmp/testing-spot/**/*.json`
    yield filedel(storage)
    process.env.STORAGE = storage
  }))

  after(() => co(function * () {
    process.env.STORAGE = STORAGE
  }))

  it('Spot', () => co(function * () {
    let cloudInstance = yield cloud()
    let spotInstance = yield spot()
    yield apemansleep.sleep(300)
    yield spotInstance.disconnect()
    yield cloudInstance.close()
  }))
})

/* global describe, before, after, it */
