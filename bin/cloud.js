#!/usr/bin/env node

/** Run cloud */
'use strict'

const cloud = require('../lib/cloud')

cloud()
  .then(() => console.debug('Cloud started'))
  .catch((err) => console.error('Cloud error', err))
