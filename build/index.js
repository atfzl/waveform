'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = add;

var _tcomb = require('tcomb');

var _tcomb2 = _interopRequireDefault(_tcomb);

var _data = require('./data');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable global-require */

if (process.env.NODE_ENV !== 'production') {
  require('pretty-error').start();
}

// eslint-disable-next-line import/first
function add(a, b) {
  _assert(a, _tcomb2.default.Number, 'a');

  _assert(b, _tcomb2.default.Number, 'b');

  var ret = function (a, b) {
    return a + b;
  }.call(this, a, b);

  _assert(ret, _tcomb2.default.Number, 'return value');

  return ret;
}

console.log('' + add(_data2.default, 2));

function _assert(x, type, name) {
  if (false) {
    _tcomb2.default.fail = function (message) {
      console.warn(message);
    };
  }

  if (_tcomb2.default.isType(type) && type.meta.kind !== 'struct') {
    if (!type.is(x)) {
      type(x, [name + ': ' + _tcomb2.default.getTypeName(type)]);
    }
  } else if (!(x instanceof type)) {
    _tcomb2.default.fail('Invalid value ' + _tcomb2.default.stringify(x) + ' supplied to ' + name + ' (expected a ' + _tcomb2.default.getTypeName(type) + ')');
  }

  return x;
}
//# sourceMappingURL=index.js.map