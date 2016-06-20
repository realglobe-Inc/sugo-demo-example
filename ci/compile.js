#!/usr/bin/env node

/**
 * Compile files
 */

'use strict'

process.chdir(`${__dirname}/..`)

const apeTasking = require('ape-tasking')
const apeCompiling = require('ape-compiling')
const filecopy = require('filecopy')
const co = require('co')
const { readFileAsync, writeFileAsync } = require('apemanfs')

apeTasking.runTasks('compile', [
  () => apeCompiling.compileReactJsx('*.jsx', {
    cwd: 'ui/js/lib',
    out: 'ui/js/lib'
  }),
  () => co(function * () {
    let src = 'ui/js/lib/entrypoint.js'
    let dest = 'ui/js/index.js'
    yield apeCompiling.browserifyJs(src, dest, {
      debug: true,
      external: require('apeman-asset-javascripts/src/demo.external.json')
    })
    let compiled = yield readFileAsync(dest)
    // This is a hack to exports `require` to the window.
    compiled = `window.require = ${String(compiled)}`
    yield writeFileAsync(dest, compiled)
  }),
  () => filecopy(
    require.resolve('apeman-asset-javascripts/dist/demo.external.cc.js'),
    'ui/js/external.cc.js'
  )
])
