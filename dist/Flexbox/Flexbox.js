'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _Flexbox = require('./Flexbox.scss');

var _Flexbox2 = _interopRequireDefault(_Flexbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configureClasses = function configureClasses(props) {
  var classes = {};

  (0, _lodash.forEach)(props, function (value, key) {
    if (key === 'children') return;

    var className = void 0;

    if (typeof value === 'boolean') {
      className = _Flexbox2.default[key];
      classes[className] = true;
    } else if (typeof value === 'string' || typeof value === 'number') {
      className = typeof value === 'string' && value.indexOf(' ') >= 0 ? _Flexbox2.default[key + '__' + value.replace(/ /g, '__')] : _Flexbox2.default[key + '__' + value];

      classes[className] = true;
    }
  });

  return (0, _classnames2.default)(props.className, classes);
};

var Flexbox = function Flexbox(props) {
  return _react2.default.createElement(
    'div',
    { className: configureClasses(props) },
    props.children
  );
};

Flexbox.propTypes = {
  align: _react.PropTypes.string,
  children: _react.PropTypes.node,
  flex: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.bool]),
  layout: _react.PropTypes.string
};

exports.default = Flexbox;