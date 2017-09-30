const request = require('request');

function Currency(data) {
  let props = ['id', 'name', 'rank', 'price_btc', 'price_eur', 'market_cap_eur', '24h_volume_eur', 'percent_change_7d', 'popularity'];
  let self = this;

  props.forEach(function(dataPoint) {
    self[dataPoint] = !!data && data[dataPoint];
  });
}

function Currencies() {
}

Currencies.prototype.fetch = function() {
  return new Promise(fetchCurrencies);

  function fetchCurrencies(resolve, reject) {
    request("https://api.coinmarketcap.com/v1/ticker?limit=100&convert=EUR", function(err, resp, body) {
      if(!!err) {
        reject(err);
        return;
      }

      let result = JSON.parse(body);
      resolve(result.map(plainObj => new Currency(plainObj)));
    });
  }
};

exports.Currency = Currency;
exports.Currencies = new Currencies();
