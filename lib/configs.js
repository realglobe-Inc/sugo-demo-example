/**
 * Configurations
 */
'use strict'

const { PORT, HOST } = process.env

module.exports = Object.assign(exports, {
  port: PORT || 3000,
  host: HOST || 'localhost'
})
