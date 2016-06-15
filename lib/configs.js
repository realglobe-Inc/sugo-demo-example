/**
 * Get configurations
 * @function configs
 * @returns {Object}
 */
'use strict'

module.exports = function configs () {
  const { PORT, HOST, STORAGE } = process.env
  return {
    /** Port number of cloud server */
    port: PORT || 3000,
    /** Host name of cloud server */
    hostname: HOST || 'localhost',
    /** Storage of cloud server */
    storage: STORAGE || 'tmp/storage',
    /** Dominant ui color */
    color: '#38A'
  }
}
