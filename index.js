const Mashup = require('./src/model/Mashup').Mashup;

Mashup.fetch()
  .then(function(res) {
    console.log(JSON.stringify(res));
  })
  .catch(function(err) {
    console.log(err);
  });
