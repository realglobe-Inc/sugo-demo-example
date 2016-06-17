'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _apemanBrwsReact = require('apeman-brws-react');

var _apemanBrwsReact2 = _interopRequireDefault(_apemanBrwsReact);

var _agent = require('sugo-endpoint-compile/lib/agent');

var _agent2 = _interopRequireDefault(_agent);

var _apemanReactBasic = require('apeman-react-basic');

var _sugoReactExample = require('sugo-react-example');

var _co = require('co');

var _co2 = _interopRequireDefault(_co);

var _sugoTerminal = require('sugo-terminal');

var _sugoTerminal2 = _interopRequireDefault(_sugoTerminal);

var _package = require('../package.json');

var _package2 = _interopRequireDefault(_package);

var _configs2 = require('../lib/configs');

var _configs3 = _interopRequireDefault(_configs2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('babel-polyfill');

var _configs = (0, _configs3.default)();

var color = _configs.color;
var port = _configs.port;
var hostname = _configs.hostname;


var DEFAULT_SCRIPT = '\nlet url = \'http://' + hostname + ':' + port + '/terminals\'\nco(function * () {\n  let terminal = sugoTerminal(url)\n  let spot01 = yield terminal.connect(\'spot01\')\n\n  // Take ping-pong with noop interface.\n  {\n    let noop = spot01.noop()\n    console.log(\'Send ping to noop...\')\n    let pong = yield noop.ping()\n    console.log(' + '`...received ping from noop: "${pong}"`' + ')\n  }\n}).catch((err) => console.error(err))\n';
var globals = {
  co: _co2.default,
  sugoTerminal: _sugoTerminal2.default
};

var IndexComponent = _react2.default.createClass({
  displayName: 'IndexComponent',
  getInitialState: function getInitialState() {
    return {
      script: DEFAULT_SCRIPT,
      scriptBusy: false,
      scriptError: null,
      tab: 'SCRIPT'
    };
  },
  render: function render() {
    var s = this;
    var state = s.state;
    var script = state.script;
    var tab = state.tab;

    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_sugoReactExample.SgExampleStyle, { dominant: color }),
      _react2.default.createElement(
        _sugoReactExample.SgExample,
        null,
        _react2.default.createElement(_sugoReactExample.SgExampleHeader, { pkg: _package2.default }),
        _react2.default.createElement(
          _apemanReactBasic.ApMain,
          null,
          _react2.default.createElement(
            _apemanReactBasic.ApSection,
            null,
            _react2.default.createElement(
              _apemanReactBasic.ApSectionHeader,
              { lined: true },
              'Sandbox'
            ),
            _react2.default.createElement(
              _apemanReactBasic.ApSectionBody,
              null,
              _react2.default.createElement(
                _apemanReactBasic.ApTabGroup,
                null,
                _react2.default.createElement(
                  _apemanReactBasic.ApTab,
                  null,
                  _react2.default.createElement(
                    _apemanReactBasic.ApTabItem,
                    { selected: tab === 'SCRIPT' },
                    'Script'
                  ),
                  _react2.default.createElement(
                    _apemanReactBasic.ApTabItem,
                    { selected: tab === 'GUI' },
                    'GUI'
                  )
                ),
                _react2.default.createElement(
                  _apemanReactBasic.ApTabContent,
                  { selected: tab === 'SCRIPT' },
                  _react2.default.createElement(_sugoReactExample.SgExampleScript, { script: script,
                    spinning: state.scriptBusy,
                    onChange: function onChange(e) {
                      return s.setState({ script: e.value });
                    },
                    onRun: function onRun() {
                      return s.runScript();
                    },
                    error: state.scriptError
                  })
                )
              )
            )
          ),
          _react2.default.createElement(
            _apemanReactBasic.ApSection,
            null,
            _react2.default.createElement(
              _apemanReactBasic.ApSectionHeader,
              { lined: true },
              'Console'
            ),
            _react2.default.createElement(_apemanReactBasic.ApSectionBody, null)
          )
        ),
        _react2.default.createElement(_apemanReactBasic.ApFooter, null)
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
      var compiled;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              s.setState({ scriptBusy: true });
              _context.next = 3;
              return (0, _agent2.default)('/actions/compile').compile(state.script);

            case 3:
              compiled = _context.sent;

              console.log('compiled script:', compiled);
              s.setState({ scriptBusy: false });

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    })).catch(function (scriptError) {
      s.setState({ scriptError: scriptError, scriptBusy: false });
    });
  }
});

// Mount component
{
  (function () {
    var CONTAINER_ID = 'index-wrap';

    var onLoad = function onLoad() {
      window.removeEventListener('DOMContentLoaded', onLoad);
      _apemanBrwsReact2.default.render(CONTAINER_ID, IndexComponent, {}, function done() {
        // The component is ready.
      });
    };

    window.addEventListener('DOMContentLoaded', onLoad);
  })();
}