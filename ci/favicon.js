#!/usr/bin/env node

/**
 * Generate favicon.
 */

'use strict'

process.chdir(`${__dirname}/..`)

const apeTasking = require('ape-tasking')
const sugosAssets = require('sugos-assets')
const filelink = require('filelink')
const { name } = require('../package.json')
const { color } = require('../lib/configs')()

let faviconFile = 'doc/images/favicon.svg'
let faviconLink = 'ui/favicon.svg'

apeTasking.runTasks('favicon', [
  () => sugosAssets.favicon('example', faviconFile, {
    name, color
  }).catch((err) => {
    // Ignore error
    console.log('Failed to generate favicon:', err)
  }),
  () => filelink(faviconFile, faviconLink, {
    force: true
  })
], true)
