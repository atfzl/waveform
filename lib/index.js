/* @flow */

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  require('pretty-error').start();
}

// eslint-disable-next-line import/first
import data from './data';

export default function add(a: number, b: number): number {
  return a + b;
}

console.log(`${add(data, 3)}`);
