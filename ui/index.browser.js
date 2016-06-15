'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _apemanBrwsReact = require('apeman-brws-react');

var _apemanBrwsReact2 = _interopRequireDefault(_apemanBrwsReact);

var _apemanReactBasic = require('apeman-react-basic');

var _apemanReactTheme = require('apeman-react-theme');

var _apemanReactEditor = require('apeman-react-editor');

var _co = require('co');

var _co2 = _interopRequireDefault(_co);

var _sugoTerminal = require('sugo-terminal');

var _sugoTerminal2 = _interopRequireDefault(_sugoTerminal);

var _configs = require('../lib/configs');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_SCRIPT = '\n#!/usr/bin/env node\nlet url = \'http://' + _configs.hostname + ':' + _configs.port + '/terminals\'\nco(function * () {\n  let terminal = sugoTerminal(url)\n  let spot01 = yield terminal.connect(\'spot01\')\n  \n  // Take ping-pong with noop interface.\n  {\n    let noop = spot01.noop()\n    console.log(\'Send ping to noop...\')\n    let pong = yield noop.ping()\n    console.log(' + '`...received ping from noop: "${pong}"`' + ')\n  }\n}).catch((err) => console.error(err))\n';
var globals = {
  co: _co2.default,
  sugoTerminal: _sugoTerminal2.default
};

var IndexComponent = _react2.default.createClass({
  displayName: 'IndexComponent',
  getInitialState: function getInitialState() {
    return {
      script: DEFAULT_SCRIPT
    };
  },
  render: function render() {
    var s = this;
    var state = s.state;

    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_apemanReactTheme.ApThemeStyle, { dominant: _configs.color }),
      _react2.default.createElement(_apemanReactEditor.ApEditorStyle, { highlightColor: _configs.color }),
      _react2.default.createElement(
        _apemanReactBasic.ApPage,
        null,
        _react2.default.createElement(
          _apemanReactBasic.ApContainer,
          null,
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_apemanReactEditor.ApEditor, { value: state.script,
              onChange: function onChange(e) {
                return s.setState({ script: e.value });
              }
            })
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              _apemanReactBasic.ApButton,
              null,
              'Run'
            )
          )
        )
      )
    );
  },
  componentDidMount: function componentDidMount() {
    var s = this;

    // Register global variables
    Object.assign(window, globals);
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