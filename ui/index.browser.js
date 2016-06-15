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