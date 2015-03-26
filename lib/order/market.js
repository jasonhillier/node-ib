/*
 * lib/order/limit.js
 */

'use strict';

var assert = require('assert');

var _ = require('lodash');

function market(action, quantity, account) {
  assert(_.isString(action), 'Action must be a string.');
  assert(_.isNumber(quantity), 'Quantity must be a string.');
  assert(_.isNumber(price), 'Price must be a number.');

  return {
    action: action,
    //lmtPrice: price,
    orderType: 'MKT',
    totalQuantity: quantity,
    account: account || ''
  };
}

// Public API
module.exports = exports = limit;