#!/usr/bin/env node

/** Run cloud */
'use strict'

const cloud = require('../lib/cloud')

cloud()
  .then(() => process.exit(0))
  .catch(() => process.exit(1))