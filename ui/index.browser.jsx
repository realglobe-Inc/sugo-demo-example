'use strict'

import React, {PropTypes as types} from 'react'
import apReact from 'apeman-brws-react'

const IndexComponent = React.createClass({
  render () {
    const s = this
    return (
      <div>This is index!</div>
    )
  }
})

// Mount component
{
  const CONTAINER_ID = 'index-wrap'
  window.onload = function () {
    apReact.render(CONTAINER_ID, IndexComponent, {}, function done () {
      // The component is ready.
    })
  }
}
