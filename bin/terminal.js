#!/usr/bin/env node

/** Run terminal */
'use strict'

const terminal = require('../lib/terminal')

terminal()
  .then(() => console.debug('Terminal started'))
  .catch((err) => console.error('Terminal error', err))
