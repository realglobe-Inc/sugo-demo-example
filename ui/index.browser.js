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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _sugoTerminal = require('sugo-terminal');

var _sugoTerminal2 = _interopRequireDefault(_sugoTerminal);

var _apemanBrwsRequest = require('apeman-brws-request');

var _apemanBrwsRequest2 = _interopRequireDefault(_apemanBrwsRequest);

var _configs2 = require('../lib/configs');

var _configs3 = _interopRequireDefault(_configs2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require("babel-polyfill");

var _configs = (0, _configs3.default)();

var color = _configs.color;
var port = _configs.port;
var hostname = _configs.hostname;


var DEFAULT_SCRIPT = '\nlet url = \'http://' + hostname + ':' + port + '/terminals\'\nco(function * () {\n  let terminal = sugoTerminal(url)\n  let spot01 = yield terminal.connect(\'spot01\')\n  \n  // Take ping-pong with noop interface.\n  {\n    let noop = spot01.noop()\n    console.log(\'Send ping to noop...\')\n    let pong = yield noop.ping()\n    console.log(' + '`...received ping from noop: "${pong}"`' + ')\n  }\n}).catch((err) => console.error(err))\n';
var globals = {
  co: _co2.default,
  sugoTerminal: _sugoTerminal2.default
};

var IndexComponent = _react2.default.createClass({
  displayName: 'IndexComponent',
  getInitialState: function getInitialState() {
    return {
      script: DEFAULT_SCRIPT,
      busy: false
    };
  },
  render: function render() {
    var s = this;
    var state = s.state;
    var script = state.script;

    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_apemanReactTheme.ApThemeStyle, { dominant: color }),
      _react2.default.createElement(_apemanReactEditor.ApEditorStyle, { highlightColor: color }),
      _react2.default.createElement(
        _apemanReactBasic.ApPage,
        null,
        _react2.default.createElement(
          _apemanReactBasic.ApContainer,
          null,
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_apemanReactEditor.ApEditor, { className: (0, _classnames2.default)('editor', {
                'editor-busy': state.busy
              }),
              value: script,
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
              { primary: true,
                disabled: state.busy,
                onTap: s.runScript },
              'Run Script'
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
  },
  runScript: function runScript() {
    var s = this;
    var state = s.state;


    (0, _co2.default)(regeneratorRuntime.mark(function _callee() {
      var _ref, body;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              s.setState({ busy: true });
              _context.next = 3;
              return _apemanBrwsRequest2.default.post('/actions/compile', {
                data: state.script
              });

            case 3:
              _ref = _context.sent;
              body = _ref.body;

              console.log('compiled script:', body.data);
              s.setState({ busy: false });

            case 7:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    })).catch(function (err) {
      console.error('error', err);
      s.setState({ busy: false });
    });
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