'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = add;

var _data = require('./data');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable global-require */

if (process.env.NODE_ENV !== 'production') {
  require('pretty-error').start();
}

// eslint-disable-next-line import/first
function add(a, b) {
  return a + b;
}

console.log('' + add(_data2.default, 3));
//# sourceMappingURL=index.js.map