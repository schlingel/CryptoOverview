const googleTrends = require('google-trends-api');
const moment = require('moment');
const async = require('async');

function Popularities() {
};

Popularities.prototype.fetch = function(keywords, startTime, endTime) {
  return new Promise(handleRequest);


  function handleRequest(resolve, reject) {
    let paramStartTime = startTime || moment().subtract(7, 'days').toDate();
    let paramEndTime = endTime || new Date();
    let jobs = [];

    // ugly workaround because google trens api throws errors in case
    // of more than 5 keywords
    for(var i = 0; i < keywords.length; i += 5) {
      var jobKeywords = [];

      for(var c = i; c < (i + 5) && c < keywords.length; c++) {
        jobKeywords.push(keywords[c]);
      }

      jobs.push(createPopularityJob(jobKeywords));
    }

    async.waterfall(jobs, function(err, result) {
      if(!!err) {
        reject(err);
        return;
      }

      resolve(result);
    });

    function createPopularityJob(keywords) {
      return function(arg1, arg2) {
        var callback = null;
        var previousValues = [];

        if(typeof arg2 !== 'undefined') {
            previousValues = previousValues.concat(arg1);
            callback = arg2;
        } else {
          callback = arg1;
        }

        googleTrends.interestOverTime({
          keyword: keywords,
          startTime: paramStartTime
        }).then(function(result) {
          result = JSON.parse(result);
          var popularityValues = !!result && !!result.default && result.default.averages;

          if(!!popularityValues && popularityValues.length === keywords.length) {
            callback(null, previousValues.concat(popularityValues));
            return;
          }

          callback(result);
        }).catch(function(err) {
          callback(err);
        });
      };
    }
  }
};

exports.Popularities = new Popularities;
