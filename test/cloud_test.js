/**
 * Test case for cloud.
 * Runs with mocha.
 */
'use strict'

const cloud = require('../lib/cloud.js')
const assert = require('assert')
const co = require('co')
const apemansleep = require('apemansleep')

describe('cloud', () => {
  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Cloud', () => co(function * () {
    let instance = yield cloud({
      storage: `${__dirname}/../tmp/testing-cloud`
    })
    yield apemansleep.sleep(300)
    instance.close()
  }))
})

/* global describe, before, after, it */
