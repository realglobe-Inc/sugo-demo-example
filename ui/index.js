(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * @class ApReact
 */
'use strict'

const React = require('react')
const ReactDOM = require('react-dom')

/** @lends ApReact */
class ApReact {
  constructor (conf) {
    const s = this
    Object.assign(s, conf || {})
  }

  /**
   * Render a react component.
   * @param {string} id - Element id of the container element.
   * @param {Object} Component - Component to render.
   * @param {object} props - Properties to render.
   * @param {function} callback - Callback when done.
   */
  render (id, Component, props, callback) {
    if (typeof document === 'undefined') {
      throw new Error('[apReact] Cannot render on server-side.')
    }
    let container = document.getElementById(id)

    if (!container) {
      throw new Error(`Element not found with id: "${id}"`)
    }

    let factory = React.createFactory(Component.default || Component)

    ReactDOM.render(factory(props), container, callback)
  }
}

Object.assign(ApReact, {})

module.exports = ApReact

},{"react":"react","react-dom":"react-dom"}],2:[function(require,module,exports){
/**
 * @function create
 */

'use strict'

const ApReact = require('./ap_react')

/** @lends create */
function create (conf) {
  return new ApReact(conf)
}

module.exports = create

},{"./ap_react":1}],3:[function(require,module,exports){
/**
 * React.js utilify for browser.
 * @module apeman-brws-react
 */

'use strict'

const create = require('./create')
const pkg = require('../package.json')
const ApReact = require('./ap_react')

let lib = create({})

Object.assign(lib, {
  ApReact,
  create,
  version: pkg.version
})

module.exports = lib

},{"../package.json":4,"./ap_react":1,"./create":2}],4:[function(require,module,exports){
module.exports={
  "_args": [
    [
      {
        "name": "apeman-brws-react",
        "raw": "apeman-brws-react",
        "rawSpec": "",
        "scope": null,
        "spec": "latest",
        "type": "tag"
      },
      "/Users/okunishinishi/Projects/realglobe-projects/sugo-demo-example"
    ]
  ],
  "_from": "apeman-brws-react@latest",
  "_id": "apeman-brws-react@2.0.1",
  "_inCache": true,
  "_installable": true,
  "_location": "/apeman-brws-react",
  "_nodeVersion": "6.0.0",
  "_npmOperationalInternal": {
    "host": "packages-12-west.internal.npmjs.com",
    "tmp": "tmp/apeman-brws-react-2.0.1.tgz_1463930535388_0.9328843459952623"
  },
  "_npmUser": {
    "email": "okunishinishi@gmail.com",
    "name": "okunishinishi"
  },
  "_npmVersion": "3.8.8",
  "_phantomChildren": {},
  "_requested": {
    "name": "apeman-brws-react",
    "raw": "apeman-brws-react",
    "rawSpec": "",
    "scope": null,
    "spec": "latest",
    "type": "tag"
  },
  "_requiredBy": [
    "/"
  ],
  "_resolved": "https://realglobe.artifactoryonline.com/realglobe/api/npm/npm-virtual/apeman-brws-react/-/apeman-brws-react-2.0.1.tgz",
  "_shasum": "effb00172f35edf0e18df1009f187e9b568f3b4c",
  "_shrinkwrap": null,
  "_spec": "apeman-brws-react",
  "_where": "/Users/okunishinishi/Projects/realglobe-projects/sugo-demo-example",
  "author": {
    "email": "okunishitaka.com@gmail.com",
    "name": "Taka Okunishi",
    "url": "http://okunishitaka.com"
  },
  "bugs": {
    "url": "https://github.com/apeman-brws-labo/apeman-brws-react/issues"
  },
  "dependencies": {
    "co": "^4.6.0"
  },
  "description": "React.js utilify for browser.",
  "devDependencies": {
    "ape-covering": "^3.0.3",
    "ape-releasing": "^3.1.1",
    "ape-reporting": "^3.0.1",
    "ape-tasking": "^4.0.0",
    "ape-testing": "^4.0.0",
    "ape-tmpl": "^5.0.1",
    "ape-updating": "^3.0.2",
    "coz": "^6.0.2",
    "injectmock": "^2.0.0",
    "react": "^15.1.0",
    "react-dom": "^15.1.0",
    "sharegit": "^1.0.2"
  },
  "directories": {},
  "dist": {
    "shasum": "effb00172f35edf0e18df1009f187e9b568f3b4c",
    "tarball": "https://realglobe.artifactoryonline.com/realglobe/api/npm/npm-virtual/apeman-brws-react/-/apeman-brws-react-2.0.1.tgz"
  },
  "engines": {
    "node": ">=6",
    "npm": ">=3"
  },
  "gitHead": "46393eed5c15ab8bdfd29952040bf92a032e285c",
  "homepage": "https://github.com/apeman-brws-labo/apeman-brws-react#readme",
  "keywords": [
    "apeman",
    "brws",
    "react"
  ],
  "license": "MIT",
  "main": "lib",
  "maintainers": [
    {
      "email": "okunishinishi@gmail.com",
      "name": "okunishinishi"
    }
  ],
  "name": "apeman-brws-react",
  "optionalDependencies": {},
  "peerDependencies": {
    "react": ">=15.0.1",
    "react-dom": ">=15.0.1"
  },
  "readme": "ERROR: No README data found!",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/apeman-brws-labo/apeman-brws-react.git"
  },
  "scripts": {
    "test": "./ci/test.js"
  },
  "version": "2.0.1"
}

},{}],5:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _apemanBrwsReact = require('apeman-brws-react');

var _apemanBrwsReact2 = _interopRequireDefault(_apemanBrwsReact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IndexComponent = _react2.default.createClass({
  displayName: 'IndexComponent',
  render: function render() {
    var s = this;
    return _react2.default.createElement(
      'div',
      null,
      'This is index!'
    );
  }
});

// Mount component
{
  (function () {
    var CONTAINER_ID = 'index-wrap';
    window.onload = function () {
      _apemanBrwsReact2.default.render(CONTAINER_ID, IndexComponent, {}, function done() {
        // The component is ready.
      });
    };
  })();
}
},{"apeman-brws-react":3,"react":"react"}]},{},[5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy5udm0vdmVyc2lvbnMvbm9kZS92Ni4yLjEvbGliL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYXBlbWFuLWJyd3MtcmVhY3QvbGliL2FwX3JlYWN0LmpzIiwibm9kZV9tb2R1bGVzL2FwZW1hbi1icndzLXJlYWN0L2xpYi9jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvYXBlbWFuLWJyd3MtcmVhY3QvbGliL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2FwZW1hbi1icndzLXJlYWN0L3BhY2thZ2UuanNvbiIsInVpL2luZGV4LmJyb3dzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoqXG4gKiBAY2xhc3MgQXBSZWFjdFxuICovXG4ndXNlIHN0cmljdCdcblxuY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpXG5jb25zdCBSZWFjdERPTSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpXG5cbi8qKiBAbGVuZHMgQXBSZWFjdCAqL1xuY2xhc3MgQXBSZWFjdCB7XG4gIGNvbnN0cnVjdG9yIChjb25mKSB7XG4gICAgY29uc3QgcyA9IHRoaXNcbiAgICBPYmplY3QuYXNzaWduKHMsIGNvbmYgfHwge30pXG4gIH1cblxuICAvKipcbiAgICogUmVuZGVyIGEgcmVhY3QgY29tcG9uZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgLSBFbGVtZW50IGlkIG9mIHRoZSBjb250YWluZXIgZWxlbWVudC5cbiAgICogQHBhcmFtIHtPYmplY3R9IENvbXBvbmVudCAtIENvbXBvbmVudCB0byByZW5kZXIuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wcyAtIFByb3BlcnRpZXMgdG8gcmVuZGVyLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIENhbGxiYWNrIHdoZW4gZG9uZS5cbiAgICovXG4gIHJlbmRlciAoaWQsIENvbXBvbmVudCwgcHJvcHMsIGNhbGxiYWNrKSB7XG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignW2FwUmVhY3RdIENhbm5vdCByZW5kZXIgb24gc2VydmVyLXNpZGUuJylcbiAgICB9XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKVxuXG4gICAgaWYgKCFjb250YWluZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRWxlbWVudCBub3QgZm91bmQgd2l0aCBpZDogXCIke2lkfVwiYClcbiAgICB9XG5cbiAgICBsZXQgZmFjdG9yeSA9IFJlYWN0LmNyZWF0ZUZhY3RvcnkoQ29tcG9uZW50LmRlZmF1bHQgfHwgQ29tcG9uZW50KVxuXG4gICAgUmVhY3RET00ucmVuZGVyKGZhY3RvcnkocHJvcHMpLCBjb250YWluZXIsIGNhbGxiYWNrKVxuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oQXBSZWFjdCwge30pXG5cbm1vZHVsZS5leHBvcnRzID0gQXBSZWFjdFxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gY3JlYXRlXG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IEFwUmVhY3QgPSByZXF1aXJlKCcuL2FwX3JlYWN0JylcblxuLyoqIEBsZW5kcyBjcmVhdGUgKi9cbmZ1bmN0aW9uIGNyZWF0ZSAoY29uZikge1xuICByZXR1cm4gbmV3IEFwUmVhY3QoY29uZilcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVcbiIsIi8qKlxuICogUmVhY3QuanMgdXRpbGlmeSBmb3IgYnJvd3Nlci5cbiAqIEBtb2R1bGUgYXBlbWFuLWJyd3MtcmVhY3RcbiAqL1xuXG4ndXNlIHN0cmljdCdcblxuY29uc3QgY3JlYXRlID0gcmVxdWlyZSgnLi9jcmVhdGUnKVxuY29uc3QgcGtnID0gcmVxdWlyZSgnLi4vcGFja2FnZS5qc29uJylcbmNvbnN0IEFwUmVhY3QgPSByZXF1aXJlKCcuL2FwX3JlYWN0JylcblxubGV0IGxpYiA9IGNyZWF0ZSh7fSlcblxuT2JqZWN0LmFzc2lnbihsaWIsIHtcbiAgQXBSZWFjdCxcbiAgY3JlYXRlLFxuICB2ZXJzaW9uOiBwa2cudmVyc2lvblxufSlcblxubW9kdWxlLmV4cG9ydHMgPSBsaWJcbiIsIm1vZHVsZS5leHBvcnRzPXtcbiAgXCJfYXJnc1wiOiBbXG4gICAgW1xuICAgICAge1xuICAgICAgICBcIm5hbWVcIjogXCJhcGVtYW4tYnJ3cy1yZWFjdFwiLFxuICAgICAgICBcInJhd1wiOiBcImFwZW1hbi1icndzLXJlYWN0XCIsXG4gICAgICAgIFwicmF3U3BlY1wiOiBcIlwiLFxuICAgICAgICBcInNjb3BlXCI6IG51bGwsXG4gICAgICAgIFwic3BlY1wiOiBcImxhdGVzdFwiLFxuICAgICAgICBcInR5cGVcIjogXCJ0YWdcIlxuICAgICAgfSxcbiAgICAgIFwiL1VzZXJzL29rdW5pc2hpbmlzaGkvUHJvamVjdHMvcmVhbGdsb2JlLXByb2plY3RzL3N1Z28tZGVtby1leGFtcGxlXCJcbiAgICBdXG4gIF0sXG4gIFwiX2Zyb21cIjogXCJhcGVtYW4tYnJ3cy1yZWFjdEBsYXRlc3RcIixcbiAgXCJfaWRcIjogXCJhcGVtYW4tYnJ3cy1yZWFjdEAyLjAuMVwiLFxuICBcIl9pbkNhY2hlXCI6IHRydWUsXG4gIFwiX2luc3RhbGxhYmxlXCI6IHRydWUsXG4gIFwiX2xvY2F0aW9uXCI6IFwiL2FwZW1hbi1icndzLXJlYWN0XCIsXG4gIFwiX25vZGVWZXJzaW9uXCI6IFwiNi4wLjBcIixcbiAgXCJfbnBtT3BlcmF0aW9uYWxJbnRlcm5hbFwiOiB7XG4gICAgXCJob3N0XCI6IFwicGFja2FnZXMtMTItd2VzdC5pbnRlcm5hbC5ucG1qcy5jb21cIixcbiAgICBcInRtcFwiOiBcInRtcC9hcGVtYW4tYnJ3cy1yZWFjdC0yLjAuMS50Z3pfMTQ2MzkzMDUzNTM4OF8wLjkzMjg4NDM0NTk5NTI2MjNcIlxuICB9LFxuICBcIl9ucG1Vc2VyXCI6IHtcbiAgICBcImVtYWlsXCI6IFwib2t1bmlzaGluaXNoaUBnbWFpbC5jb21cIixcbiAgICBcIm5hbWVcIjogXCJva3VuaXNoaW5pc2hpXCJcbiAgfSxcbiAgXCJfbnBtVmVyc2lvblwiOiBcIjMuOC44XCIsXG4gIFwiX3BoYW50b21DaGlsZHJlblwiOiB7fSxcbiAgXCJfcmVxdWVzdGVkXCI6IHtcbiAgICBcIm5hbWVcIjogXCJhcGVtYW4tYnJ3cy1yZWFjdFwiLFxuICAgIFwicmF3XCI6IFwiYXBlbWFuLWJyd3MtcmVhY3RcIixcbiAgICBcInJhd1NwZWNcIjogXCJcIixcbiAgICBcInNjb3BlXCI6IG51bGwsXG4gICAgXCJzcGVjXCI6IFwibGF0ZXN0XCIsXG4gICAgXCJ0eXBlXCI6IFwidGFnXCJcbiAgfSxcbiAgXCJfcmVxdWlyZWRCeVwiOiBbXG4gICAgXCIvXCJcbiAgXSxcbiAgXCJfcmVzb2x2ZWRcIjogXCJodHRwczovL3JlYWxnbG9iZS5hcnRpZmFjdG9yeW9ubGluZS5jb20vcmVhbGdsb2JlL2FwaS9ucG0vbnBtLXZpcnR1YWwvYXBlbWFuLWJyd3MtcmVhY3QvLS9hcGVtYW4tYnJ3cy1yZWFjdC0yLjAuMS50Z3pcIixcbiAgXCJfc2hhc3VtXCI6IFwiZWZmYjAwMTcyZjM1ZWRmMGUxOGRmMTAwOWYxODdlOWI1NjhmM2I0Y1wiLFxuICBcIl9zaHJpbmt3cmFwXCI6IG51bGwsXG4gIFwiX3NwZWNcIjogXCJhcGVtYW4tYnJ3cy1yZWFjdFwiLFxuICBcIl93aGVyZVwiOiBcIi9Vc2Vycy9va3VuaXNoaW5pc2hpL1Byb2plY3RzL3JlYWxnbG9iZS1wcm9qZWN0cy9zdWdvLWRlbW8tZXhhbXBsZVwiLFxuICBcImF1dGhvclwiOiB7XG4gICAgXCJlbWFpbFwiOiBcIm9rdW5pc2hpdGFrYS5jb21AZ21haWwuY29tXCIsXG4gICAgXCJuYW1lXCI6IFwiVGFrYSBPa3VuaXNoaVwiLFxuICAgIFwidXJsXCI6IFwiaHR0cDovL29rdW5pc2hpdGFrYS5jb21cIlxuICB9LFxuICBcImJ1Z3NcIjoge1xuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2FwZW1hbi1icndzLWxhYm8vYXBlbWFuLWJyd3MtcmVhY3QvaXNzdWVzXCJcbiAgfSxcbiAgXCJkZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiY29cIjogXCJeNC42LjBcIlxuICB9LFxuICBcImRlc2NyaXB0aW9uXCI6IFwiUmVhY3QuanMgdXRpbGlmeSBmb3IgYnJvd3Nlci5cIixcbiAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiYXBlLWNvdmVyaW5nXCI6IFwiXjMuMC4zXCIsXG4gICAgXCJhcGUtcmVsZWFzaW5nXCI6IFwiXjMuMS4xXCIsXG4gICAgXCJhcGUtcmVwb3J0aW5nXCI6IFwiXjMuMC4xXCIsXG4gICAgXCJhcGUtdGFza2luZ1wiOiBcIl40LjAuMFwiLFxuICAgIFwiYXBlLXRlc3RpbmdcIjogXCJeNC4wLjBcIixcbiAgICBcImFwZS10bXBsXCI6IFwiXjUuMC4xXCIsXG4gICAgXCJhcGUtdXBkYXRpbmdcIjogXCJeMy4wLjJcIixcbiAgICBcImNvelwiOiBcIl42LjAuMlwiLFxuICAgIFwiaW5qZWN0bW9ja1wiOiBcIl4yLjAuMFwiLFxuICAgIFwicmVhY3RcIjogXCJeMTUuMS4wXCIsXG4gICAgXCJyZWFjdC1kb21cIjogXCJeMTUuMS4wXCIsXG4gICAgXCJzaGFyZWdpdFwiOiBcIl4xLjAuMlwiXG4gIH0sXG4gIFwiZGlyZWN0b3JpZXNcIjoge30sXG4gIFwiZGlzdFwiOiB7XG4gICAgXCJzaGFzdW1cIjogXCJlZmZiMDAxNzJmMzVlZGYwZTE4ZGYxMDA5ZjE4N2U5YjU2OGYzYjRjXCIsXG4gICAgXCJ0YXJiYWxsXCI6IFwiaHR0cHM6Ly9yZWFsZ2xvYmUuYXJ0aWZhY3RvcnlvbmxpbmUuY29tL3JlYWxnbG9iZS9hcGkvbnBtL25wbS12aXJ0dWFsL2FwZW1hbi1icndzLXJlYWN0Ly0vYXBlbWFuLWJyd3MtcmVhY3QtMi4wLjEudGd6XCJcbiAgfSxcbiAgXCJlbmdpbmVzXCI6IHtcbiAgICBcIm5vZGVcIjogXCI+PTZcIixcbiAgICBcIm5wbVwiOiBcIj49M1wiXG4gIH0sXG4gIFwiZ2l0SGVhZFwiOiBcIjQ2MzkzZWVkNWMxNWFiOGJkZmQyOTk1MjA0MGJmOTJhMDMyZTI4NWNcIixcbiAgXCJob21lcGFnZVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9hcGVtYW4tYnJ3cy1sYWJvL2FwZW1hbi1icndzLXJlYWN0I3JlYWRtZVwiLFxuICBcImtleXdvcmRzXCI6IFtcbiAgICBcImFwZW1hblwiLFxuICAgIFwiYnJ3c1wiLFxuICAgIFwicmVhY3RcIlxuICBdLFxuICBcImxpY2Vuc2VcIjogXCJNSVRcIixcbiAgXCJtYWluXCI6IFwibGliXCIsXG4gIFwibWFpbnRhaW5lcnNcIjogW1xuICAgIHtcbiAgICAgIFwiZW1haWxcIjogXCJva3VuaXNoaW5pc2hpQGdtYWlsLmNvbVwiLFxuICAgICAgXCJuYW1lXCI6IFwib2t1bmlzaGluaXNoaVwiXG4gICAgfVxuICBdLFxuICBcIm5hbWVcIjogXCJhcGVtYW4tYnJ3cy1yZWFjdFwiLFxuICBcIm9wdGlvbmFsRGVwZW5kZW5jaWVzXCI6IHt9LFxuICBcInBlZXJEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwicmVhY3RcIjogXCI+PTE1LjAuMVwiLFxuICAgIFwicmVhY3QtZG9tXCI6IFwiPj0xNS4wLjFcIlxuICB9LFxuICBcInJlYWRtZVwiOiBcIkVSUk9SOiBObyBSRUFETUUgZGF0YSBmb3VuZCFcIixcbiAgXCJyZXBvc2l0b3J5XCI6IHtcbiAgICBcInR5cGVcIjogXCJnaXRcIixcbiAgICBcInVybFwiOiBcImdpdCtodHRwczovL2dpdGh1Yi5jb20vYXBlbWFuLWJyd3MtbGFiby9hcGVtYW4tYnJ3cy1yZWFjdC5naXRcIlxuICB9LFxuICBcInNjcmlwdHNcIjoge1xuICAgIFwidGVzdFwiOiBcIi4vY2kvdGVzdC5qc1wiXG4gIH0sXG4gIFwidmVyc2lvblwiOiBcIjIuMC4xXCJcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2FwZW1hbkJyd3NSZWFjdCA9IHJlcXVpcmUoJ2FwZW1hbi1icndzLXJlYWN0Jyk7XG5cbnZhciBfYXBlbWFuQnJ3c1JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FwZW1hbkJyd3NSZWFjdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBJbmRleENvbXBvbmVudCA9IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnSW5kZXhDb21wb25lbnQnLFxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgcyA9IHRoaXM7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBudWxsLFxuICAgICAgJ1RoaXMgaXMgaW5kZXghJ1xuICAgICk7XG4gIH1cbn0pO1xuXG4vLyBNb3VudCBjb21wb25lbnRcbntcbiAgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgQ09OVEFJTkVSX0lEID0gJ2luZGV4LXdyYXAnO1xuICAgIHdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfYXBlbWFuQnJ3c1JlYWN0Mi5kZWZhdWx0LnJlbmRlcihDT05UQUlORVJfSUQsIEluZGV4Q29tcG9uZW50LCB7fSwgZnVuY3Rpb24gZG9uZSgpIHtcbiAgICAgICAgLy8gVGhlIGNvbXBvbmVudCBpcyByZWFkeS5cbiAgICAgIH0pO1xuICAgIH07XG4gIH0pKCk7XG59Il19
