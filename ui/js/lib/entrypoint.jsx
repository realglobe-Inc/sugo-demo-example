/**
 * Entrypoint of lib scripts.
 * Mount react component in to DOM when loaded.
 */
'use strict'

require('babel-polyfill')

import React, {PropTypes as types} from 'react'
import apReact from 'apeman-brws-react'
import Component from './component'
import configs from '../../../lib/configs'
import pkg from '../../../package.json'

let { color, port, hostname } = configs()

const CONTAINER_ID = 'mount-root'

function onLoad () {
  window.removeEventListener('DOMContentLoaded', onLoad)
  apReact.render(CONTAINER_ID, Component, {
    pkg, color, port, hostname
  }, () => {
    console.debug('')
  })
}

window.addEventListener('DOMContentLoaded', onLoad)
