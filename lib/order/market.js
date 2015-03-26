/*
 * lib/order/limit.js
 */

'use strict';

var assert = require('assert');

var _ = require('lodash');

function market(action, quantity, transmit, account) {
  assert(_.isString(action), 'Action must be a string.');
  assert(_.isNumber(quantity), 'Quantity must be a string.');

  return {
    action: action,
    //lmtPrice: price,
    orderType: 'MKT',
    totalQuantity: quantity,
    transmit: transmit || false,
    account: account || ''
  };
}

// Public API
module.exports = exports = market;
