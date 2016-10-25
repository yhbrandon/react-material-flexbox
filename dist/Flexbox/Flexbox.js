'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _Flexbox = require('./Flexbox.scss');

var _Flexbox2 = _interopRequireDefault(_Flexbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var configureClasses = function configureClasses(props) {
  var classes = {};

  (0, _lodash.forEach)(props, function (value, key) {
    if (key === 'children' || key === 'key') return;

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
  var other = _objectWithoutProperties(props, []);

  return _react2.default.createElement(
    'div',
    _extends({ className: configureClasses(props) }, other),
    _react2.default.Children.map(props.children, function (child) {
      return _react2.default.cloneElement(child);
    })
  );
};

Flexbox.propTypes = {
  align: _react.PropTypes.string,
  children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.element), _react.PropTypes.element]),
  flex: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.bool]),
  layout: _react.PropTypes.string
};

exports.default = Flexbox;