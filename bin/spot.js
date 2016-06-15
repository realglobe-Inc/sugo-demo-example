#!/usr/bin/env node

/** Run spot */
'use strict'

const spot = require('../lib/spot')

spot()
  .then(() => console.log('Spot started'))
  .catch((err) => console.error('Spot error', err))
