/*
 * examples/reqRealTimeBars.js
 */

'use strict';

require('colors');

var _ = require('lodash');

var ib = new (require('..'))({
  // clientId: 0,
  // host: '127.0.0.1',
  // port: 7496
}).on('error', function (err) {
  console.error(err.message.red);
}).on('result', function (event, args) {
  //if (!_.contains(['realtimeBar'], event)) {
  //  console.log('%s %s', (event + ':').yellow, JSON.stringify(args));
  //}
}).on('historicalData', function (reqId, time, open, high, low, close, volume, count, wap, hasGaps) {
  console.log(
    '%s %s%d %s%d %s%d %s%d %s%d %s%d %s%d %s%d %s%d',
    '[historical]'.cyan,
    'reqId='.bold, reqId,
    'time='.bold, time,
    'open='.bold, open,
    'high='.bold, high,
    'low='.bold, low,
    'close='.bold, close,
    'volume='.bold, volume,
    'wap='.bold, wap,
    'count='.bold, count
  );
});

ib.connect();

// Forex
// ib.reqRealTimeBars(1, ib.contract.forex('EUR'), 5, 'TRADES', false);
// ib.reqRealTimeBars(2, ib.contract.forex('GBP'), 5, 'BID', false);
// ib.reqRealTimeBars(3, ib.contract.forex('CAD'), 5, 'ASK', false);
// ib.reqRealTimeBars(4, ib.contract.forex('HKD'), 5, 'MIDPOINT', false);
// ib.reqRealTimeBars(5, ib.contract.forex('JPY'), 5, 'TRADES', false);
// ib.reqRealTimeBars(6, ib.contract.forex('KRW'), 5, 'BID', false);

// Stock
//ib.reqHistoricalData(11, ib.contract.stock('AAPL'), '7200 S', '5 secs', 'TRADES', 0, 2);
var tickerId = 1;
ib.reqHistoricalData(tickerId, ib.contract.stock('SPY'), '20150324 11:00:00 MST', '7200 S', '5 secs', 'TRADES', 0,  2);

setInterval(function(){
  tickerId++;
  ib.reqHistoricalData(tickerId, ib.contract.stock('SPY'), '20150323 11:00:00 MST', '7200 S', '5 secs', 'TRADES', 0,  2);
}, 15000);

//ib.reqRealTimeBars(12, ib.contract.stock('AMZN'), 5, 'BID', false);
//ib.reqRealTimeBars(13, ib.contract.stock('GOOG'), 5, 'ASK', false);
//ib.reqRealTimeBars(14, ib.contract.stock('FB'), 5, 'MIDPOINT', false);
// Option
//ib.reqRealTimeBars(21, ib.contract.option('AAPL', '201407', 500, 'C'), 5, 'TRADES', false);
//ib.reqRealTimeBars(22, ib.contract.option('AMZN', '201404', 350, 'P'), 5, 'BID', false);
//ib.reqRealTimeBars(23, ib.contract.option('GOOG', '201406', 1000, 'C'), 5, 'ASK', false);
//ib.reqRealTimeBars(24, ib.contract.option('FB', '201406', 50, 'P'), 5, 'MIDPOINT', false);

