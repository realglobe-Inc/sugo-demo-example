#!/usr/bin/env node

/**
 * Send reports.
 */

'use strict'

process.chdir(`${__dirname}/..`)

const { exampleReport } = require('sugo-ci-example')

exampleReport({})
