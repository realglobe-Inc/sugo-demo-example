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
  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Spot', () => co(function * () {
    yield filedel(`${__dirname}/../tmp/testing-spot/**/*.json`)
    let cloudInstance = yield cloud({
      storage: `${__dirname}/../tmp/testing-spot`
    })
    let spotInstance = yield spot()
    yield apemansleep.sleep(300)
    yield spotInstance.disconnect()
    yield cloudInstance.close()
  }))
})

/* global describe, before, after, it */
