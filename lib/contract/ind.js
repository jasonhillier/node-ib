/*
 * lib/contract/ind.js
 */

'use strict';

var assert = require('assert');

var _ = require('lodash');

function ind(symbol, exchange, currency) {
  assert(_.isString(symbol), 'Symbol must be a string.');

  return {
    currency: currency || 'USD',
    exchange: exchange || 'SMART',
    secType: 'IND',
    symbol: symbol
  };
}

// Public API
module.exports = exports = ind;
