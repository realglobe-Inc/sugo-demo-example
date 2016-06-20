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
  () => apeCompiling.compileReactJsx('*.jsx', {
    cwd: 'ui/js/lib',
    out: 'ui/js/lib'
  }),
  () => apeCompiling.browserifyJs(
    'ui/js/lib/entrypoint.js',
    'ui/js/index.js',
    {
      debug: true,
      external: require('apeman-asset-javascripts/src/demo.external.json')
    }),
  () => filecopy(
    require.resolve('apeman-asset-javascripts/dist/demo.external.cc.js'),
    'ui/js/external.cc.js'
  )
])
