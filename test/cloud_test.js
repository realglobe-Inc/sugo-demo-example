/**
 * Test case for cloud.
 * Runs with mocha.
 */
'use strict'

const cloud = require('../lib/cloud.js')
const assert = require('assert')
const co = require('co')
const apemansleep = require('apemansleep')
const filedel = require('filedel')

describe('cloud', () => {
  let { STORAGE } = process.env
  before(() => co(function * () {
    let storage = `${__dirname}/../tmp/testing-cloud/**/*.json`
    yield filedel(storage)
    process.env.STORAGE = storage
  }))

  after(() => co(function * () {
    process.env.STORAGE = STORAGE
  }))

  it('Cloud', () => co(function * () {
    let instance = yield cloud()
    yield apemansleep.sleep(300)
    instance.close()
  }))
})

/* global describe, before, after, it */
