#!/usr/bin/env node

/**
 * Compile files
 */

'use strict'

process.chdir(`${__dirname}/..`)

const apeTasking = require('ape-tasking')
const apeCompiling = require('ape-compiling')
const filecopy = require('filecopy')

apeTasking.runTasks('compile', [
  () => apeCompiling.compileReactJsx('**/*.jsx', {
    cwd: 'ui',
    out: 'ui'
  }),
  () => apeCompiling.browserifyJs(
    'ui/index.browser.js',
    'ui/index.js',
    {
      debug: true,
      external: require('apeman-asset-javascripts/src/demo.external.json')
    }),
  () => filecopy(
    require.resolve('apeman-asset-javascripts/dist/demo.external.cc.js'),
    'ui/external.cc.js'
  )
])
