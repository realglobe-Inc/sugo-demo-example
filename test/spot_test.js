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
const injectmock = require('injectmock')
const apemanport = require('apemanport')
const apemansleep = require('apemansleep')

describe('spot', () => {
  before(() => co(function * () {
    let port = yield apemanport.find()
    let storage = `${__dirname}/../tmp/testing-spot`
    injectmock(process.env, 'STORAGE', storage)
    injectmock(process.env, 'PORT', port)
  }))

  after(() => co(function * () {
    injectmock.restoreAll()
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
