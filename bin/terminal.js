#!/usr/bin/env node

/** Run terminal */
'use strict'

const terminal = require('../lib/terminal')

terminal()
  .then(() => process.exit(0))
  .catch(() => process.exit(1))
