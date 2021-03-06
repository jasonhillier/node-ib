/*
 * lib/order/limit.js
 */

'use strict';

var assert = require('assert');

var _ = require('lodash');

function limit(action, quantity, price, transmit, account, outsideRth) {
  assert(_.isString(action), 'Action must be a string.');
  assert(_.isNumber(quantity), 'Quantity must be a string.');
  assert(_.isNumber(price), 'Price must be a number.');

  return {
    action: action,
    lmtPrice: price,
    orderType: 'LMT',
    totalQuantity: quantity,
    transmit: transmit || false,
    account: account || '',
    outsideRth: outsideRth || false
  };
}

// Public API
module.exports = exports = limit;
