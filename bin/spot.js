#!/usr/bin/env node

/** Run spot */
'use strict'

const spot = require('../lib/spot')

spot()
  .then(() => process.exit(0))
  .catch(() => process.exit(1))
