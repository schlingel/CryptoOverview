const Currencies = require('./Currencies').Currencies;
const Popularities = require('./Popularity').Popularities;

function Mashup() {
};

Mashup.prototype.fetch = function() {
  return new Promise(function(resolve, reject) {
    Currencies.fetch()
      .then(printCurrencies)
      .catch(onError);

    function printCurrencies(currencies) {
      Popularities.fetch(currencies.map(currency => currency.name + ' cryptocurrency'))
        .then(function(popValues) {
          for(var i = 0; i < currencies.length; i++) {
            if(!!currencies[i]) {
              currencies[i].popularity = popValues[i];
            }
          }

          resolve(currencies);
        })
        .catch(onError);
    }

    function onError(err) {
      reject(err);
    }
  });
};

exports.Mashup = new Mashup();
