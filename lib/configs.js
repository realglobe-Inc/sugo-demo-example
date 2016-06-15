/**
 * Configurations
 */
'use strict'

const { PORT, HOST } = process.env

module.exports = Object.assign(exports, {
  /** Port number of cloud server */
  port: PORT || 3000,
  /** Host name of cloud server */
  hostname: HOST || 'localhost',
  /** Storage of cloud server */
  storage: 'tmp/storage'
})
