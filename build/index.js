'use strict';

var _tcomb = require('tcomb');

var _tcomb2 = _interopRequireDefault(_tcomb);

var _data = require('./data');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYi9pbmRleC5qcyJdLCJuYW1lcyI6WyJhZGQiLCJhIiwiYiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBOzs7Ozs7QUFFQSxTQUFTQSxHQUFULENBQWFDLENBQWIsRUFBd0JDLENBQXhCO0FBQUEsVUFBYUQsQ0FBYjs7QUFBQSxVQUF3QkMsQ0FBeEI7O0FBQUEsNEJBQTJDO0FBQ3pDLFdBQU9ELElBQUlDLENBQVg7QUFDRCxHQUZEOztBQUFBOztBQUFBO0FBQUE7OztBQUlBQyxRQUFRQyxHQUFSLE1BQWVKLG9CQUFVLENBQVYsQ0FBZiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEBmbG93ICovXG5pbXBvcnQgZGF0YSBmcm9tICcuL2RhdGEnO1xuXG5mdW5jdGlvbiBhZGQoYTogbnVtYmVyLCBiOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gYSArIGI7XG59XG5cbmNvbnNvbGUubG9nKGAke2FkZChkYXRhLCAyKX1gKTtcbiJdfQ==