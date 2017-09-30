(function() {
  "use strict";

  var data = [{"id":"bitcoin","name":"Bitcoin","rank":"1","price_btc":"1.0","price_eur":"3625.259181","market_cap_eur":"60164620105.0","24h_volume_eur":"964876479.0","percent_change_7d":"14.27","popularity":85},{"id":"ethereum","name":"Ethereum","rank":"2","price_btc":"0.0700617","price_eur":"254.0275704","market_cap_eur":"24103636277.0","24h_volume_eur":"319718226.6","percent_change_7d":"9.48","popularity":31},{"id":"ripple","name":"Ripple","rank":"3","price_btc":"0.00004626","price_eur":"0.1677426692","market_cap_eur":"6431898384.0","24h_volume_eur":"43121459.394","percent_change_7d":"12.75","popularity":19},{"id":"bitcoin-cash","name":"Bitcoin Cash","rank":"4","price_btc":"0.102603","price_eur":"372.01513272","market_cap_eur":"6185114296.0","24h_volume_eur":"108263042.94","percent_change_7d":"3.93","popularity":4},{"id":"litecoin","name":"Litecoin","rank":"5","price_btc":"0.0126969","price_eur":"46.036191306","market_cap_eur":"2447441943.0","24h_volume_eur":"115918065.42","percent_change_7d":"12.11","popularity":11},{"id":"dash","name":"Dash","rank":"6","price_btc":"0.0766581","price_eur":"277.94486034","market_cap_eur":"2109120685.0","24h_volume_eur":"26922927.36","percent_change_7d":"-6.68","popularity":27},{"id":"nem","name":"NEM","rank":"7","price_btc":"0.00005552","price_eur":"0.2012846009","market_cap_eur":"1811561408.0","24h_volume_eur":"3243515.2968","percent_change_7d":"9.23","popularity":15},{"id":"iota","name":"IOTA","rank":"8","price_btc":"0.00014687","price_eur":"0.5325132931","market_cap_eur":"1480136824.0","24h_volume_eur":"15232936.098","percent_change_7d":"17.43","popularity":17},{"id":"neo","name":"NEO","rank":"9","price_btc":"0.0072919","price_eur":"26.43877512","market_cap_eur":"1321938756.0","24h_volume_eur":"52544907.18","percent_change_7d":"58.07","popularity":60},{"id":"monero","name":"Monero","rank":"10","price_btc":"0.02224","price_eur":"80.637248412","market_cap_eur":"1221946444.0","24h_volume_eur":"25905615.162","percent_change_7d":"5.73","popularity":21},{"id":"ethereum-classic","name":"Ethereum Classic","rank":"11","price_btc":"0.00303245","price_eur":"10.9949958","market_cap_eur":"1055592274.0","24h_volume_eur":"75010417.536","percent_change_7d":"23.82","popularity":10},{"id":"omisego","name":"OmiseGO","rank":"12","price_btc":"0.0023661","price_eur":"8.57888991","market_cap_eur":"843408031.0","24h_volume_eur":"24839718.456","percent_change_7d":"12.22","popularity":26},{"id":"bitconnect","name":"BitConnect","rank":"13","price_btc":"0.0312482","price_eur":"113.29839552","market_cap_eur":"774799467.0","24h_volume_eur":"8044561.8924","percent_change_7d":"19.4","popularity":24},{"id":"lisk","name":"Lisk","rank":"14","price_btc":"0.00143445","price_eur":"5.2009715814","market_cap_eur":"587261335.0","24h_volume_eur":"7710005.9232","percent_change_7d":"3.02","popularity":26},{"id":"zcash","name":"Zcash","rank":"15","price_btc":"0.0659605","price_eur":"239.15766384","market_cap_eur":"548910186.0","24h_volume_eur":"37826171.232","percent_change_7d":"34.24","popularity":44},{"id":"qtum","name":"Qtum","rank":"16","price_btc":"0.00236284","price_eur":"8.567124672","market_cap_eur":"505460356.0","24h_volume_eur":"54539495.91","percent_change_7d":"27.51","popularity":47},{"id":"waves","name":"Waves","rank":"17","price_btc":"0.00119105","price_eur":"4.3184602326","market_cap_eur":"431846023.0","24h_volume_eur":"6984767.8746","percent_change_7d":"30.81","popularity":48},{"id":"stratis","name":"Stratis","rank":"18","price_btc":"0.0010685","price_eur":"3.8741320536","market_cap_eur":"381846954.0","24h_volume_eur":"5397357.9498","percent_change_7d":"10.5","popularity":52},{"id":"tether","name":"Tether","rank":"19","price_btc":"0.00023265","price_eur":"0.8435362471","market_cap_eur":"368677363.0","24h_volume_eur":"106078432.92","percent_change_7d":"-0.65","popularity":10},{"id":"steem","name":"Steem","rank":"20","price_btc":"0.00035845","price_eur":"1.2996609816","market_cap_eur":"314789606.0","24h_volume_eur":"7467608.1636","percent_change_7d":"47.92","popularity":52},{"id":"ark","name":"Ark","rank":"21","price_btc":"0.00068607","price_eur":"2.4875183454","market_cap_eur":"243496504.0","24h_volume_eur":"1750176.4908","percent_change_7d":"-4.36","popularity":55},{"id":"eos","name":"EOS","rank":"22","price_btc":"0.00017281","price_eur":"0.6265657907","market_cap_eur":"235287299.0","24h_volume_eur":"9493869.93","percent_change_7d":"27.42","popularity":39},{"id":"tenx","name":"TenX","rank":"23","price_btc":"0.00061789","price_eur":"2.2403129202","market_cap_eur":"234474085.0","24h_volume_eur":"2547114.7776","percent_change_7d":"25.68","popularity":29},{"id":"bytecoin-bcn","name":"Bytecoin","rank":"24","price_btc":"0.00000032","price_eur":"0.0011697524","market_cap_eur":"214361269.0","24h_volume_eur":"1639024.6164","percent_change_7d":"17.87","popularity":19},{"id":"basic-attention-token","name":"Basic Attention Token","rank":"25","price_btc":"0.00005801","price_eur":"0.2103142095","market_cap_eur":"210314210.0","24h_volume_eur":"2099265.4914","percent_change_7d":"20.61","popularity":0},{"id":"kyber-network","name":"Kyber Network","rank":"26","price_btc":"0.00041005","price_eur":"1.48673673","market_cap_eur":"205163127.0","24h_volume_eur":"3768244.9116","percent_change_7d":null,"popularity":0},{"id":"hshare","name":"Hshare","rank":"27","price_btc":"0.00163307","price_eur":"5.9211480384","market_cap_eur":"198950574.0","24h_volume_eur":"10157632.494","percent_change_7d":"36.29","popularity":0},{"id":"augur","name":"Augur","rank":"28","price_btc":"0.00489581","price_eur":"17.751035598","market_cap_eur":"195261392.0","24h_volume_eur":"626878.11966","percent_change_7d":"18.75","popularity":15},{"id":"gas","name":"Gas","rank":"29","price_btc":"0.0062985","price_eur":"22.836919452","market_cap_eur":"193980599.0","24h_volume_eur":"890069.8794","percent_change_7d":"69.58","popularity":63},{"id":"stellar","name":"Stellar Lumens","rank":"30","price_btc":"0.00000322","price_eur":"0.0116705236","market_cap_eur":"193583413.0","24h_volume_eur":"1364801.4648","percent_change_7d":"22.09","popularity":10},{"id":"maidsafecoin","name":"MaidSafeCoin","rank":"31","price_btc":"0.0001145","price_eur":"0.415152928","market_cap_eur":"187878459.0","24h_volume_eur":"1175338.812","percent_change_7d":"1.7","popularity":0},{"id":"golem-network-tokens","name":"Golem","rank":"32","price_btc":"0.00006197","price_eur":"0.2246914996","market_cap_eur":"187175209.0","24h_volume_eur":"1151647.5162","percent_change_7d":"5.26","popularity":15},{"id":"bitshares","name":"BitShares","rank":"33","price_btc":"0.00001967","price_eur":"0.0713240892","market_cap_eur":"185436213.0","24h_volume_eur":"3405867.117","percent_change_7d":"19.97","popularity":21},{"id":"komodo","name":"Komodo","rank":"34","price_btc":"0.00048989","price_eur":"1.7762377626","market_cap_eur":"179303227.0","24h_volume_eur":"1272050.7612","percent_change_7d":"19.25","popularity":34},{"id":"decred","name":"Decred","rank":"35","price_btc":"0.00797338","price_eur":"28.909644384","market_cap_eur":"169370700.0","24h_volume_eur":"532629.25266","percent_change_7d":"-0.15","popularity":22},{"id":"ardor","name":"Ardor","rank":"36","price_btc":"0.00004159","price_eur":"0.1508024193","market_cap_eur":"150651541.0","24h_volume_eur":"1700965.632","percent_change_7d":"51.93","popularity":11},{"id":"metal","name":"Metal","rank":"37","price_btc":"0.00212131","price_eur":"7.6913677548","market_cap_eur":"148451043.0","24h_volume_eur":"1327601.3058","percent_change_7d":"10.48","popularity":32},{"id":"pivx","name":"PIVX","rank":"38","price_btc":"0.00073875","price_eur":"2.6785299468","market_cap_eur":"145686764.0","24h_volume_eur":"305072.62134","percent_change_7d":"6.5","popularity":30},{"id":"factom","name":"Factom","rank":"39","price_btc":"0.00441896","price_eur":"16.022138106","market_cap_eur":"140115232.0","24h_volume_eur":"1742203.2144","percent_change_7d":"15.5","popularity":25},{"id":"digixdao","name":"DigixDAO","rank":"40","price_btc":"0.0185669","price_eur":"67.319252922","market_cap_eur":"134638506.0","24h_volume_eur":"149459.99718","percent_change_7d":"20.05","popularity":0},{"id":"veritaseum","name":"Veritaseum","rank":"41","price_btc":"0.0182379","price_eur":"66.126393216","market_cap_eur":"132989067.0","24h_volume_eur":"182450.90952","percent_change_7d":"-4.1","popularity":17},{"id":"gamecredits","name":"GameCredits","rank":"42","price_btc":"0.00055822","price_eur":"2.0239679682","market_cap_eur":"130214869.0","24h_volume_eur":"1212953.7168","percent_change_7d":"45.85","popularity":37},{"id":"iconomi","name":"Iconomi","rank":"43","price_btc":"0.00034682","price_eur":"1.2575008014","market_cap_eur":"125624770.0","24h_volume_eur":"379381.52598","percent_change_7d":"3.58","popularity":20},{"id":"gnosis-gno","name":"Gnosis","rank":"44","price_btc":"0.0311537","price_eur":"112.95644184","market_cap_eur":"124770556.0","24h_volume_eur":"380459.01864","percent_change_7d":"40.97","popularity":17},{"id":"byteball","name":"Byteball Bytes","rank":"45","price_btc":"0.0580247","price_eur":"210.38446236","market_cap_eur":"122842750.0","24h_volume_eur":"78861.459252","percent_change_7d":"13.41","popularity":0},{"id":"siacoin","name":"Siacoin","rank":"46","price_btc":"0.00000113","price_eur":"0.0041085311","market_cap_eur":"122160511.0","24h_volume_eur":"1200206.6316","percent_change_7d":"10.9","popularity":60},{"id":"civic","name":"Civic","rank":"47","price_btc":"0.00009465","price_eur":"0.3431852211","market_cap_eur":"116751612.0","24h_volume_eur":"1405581.9804","percent_change_7d":"16.34","popularity":50},{"id":"digibyte","name":"DigiByte","rank":"48","price_btc":"0.00000362","price_eur":"0.0131364384","market_cap_eur":"114842077.0","24h_volume_eur":"1739173.0308","percent_change_7d":"17.21","popularity":69},{"id":"chainlink","name":"ChainLink","rank":"49","price_btc":"0.00008854","price_eur":"0.3210276383","market_cap_eur":"112359673.0","24h_volume_eur":"16000046.544","percent_change_7d":"166.65","popularity":27},{"id":"funfair","name":"FunFair","rank":"50","price_btc":"0.00000798","price_eur":"0.028940708","market_cap_eur":"111116785.0","24h_volume_eur":"7018082.9658","percent_change_7d":"70.41","popularity":0}];

fetchCssFiles();

$(document).ready(function() {
  setupControls();
});


function fetchCssFiles() {
  var files = ['https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', 'http://blockchain-investment.at/static_content/crypto_overview/css/crypto_overview.css'];

  files.forEach(function(file) {
    $('head').append($('<link>').attr('href', file).attr('rel', 'stylesheet'));
  });
}

  function setupControls() {
    var $controls = $('<table>')
      .append($('<tr>').append($('<td>')).append($('<th>').html('W&auml;hrung 1')).append($('<th>').html('W&auml;hrung 2')))
      .append($('<tr>').append($('<td>')).append($('<td>').append(select(data[0].id)))
        .append($('<td>').append(select(data[1].id))));

      $('#overview-table-target').empty().append($controls);

      refreshDataTable(data[0], data[1]);
  }

  function refreshDataTable(currency1, currency2) {
    $('#overview-table-target').find('#currency-overview-table').remove();
    $('#overview-table-target').append(table(currency1, currency2));
  }

  function findCurrency(id) {
    for(var i = 0; i < data.length; i++) {
      if(data[i].id === id) {
        return data[i];
      }
    }
  }

  function select(selectedId) {
    var $select = $('<select>').addClass('currency-overview-select');

    data.forEach(function(currency) {
      var id = currency.id;
      $select.append($('<option ' + (id === selectedId ? 'selected' : '') + ' value="' + id + '">').text(currency.name));
    });

    $select.on('change', function() {
      var $opts = $('.currency-overview-select option:selected');
      var currencies = [];

      $opts.each(function() {
        var id = $(this).attr('value');
        var currency = findCurrency(id);

        currencies.push(currency);
      });

      refreshDataTable(currencies[0], currencies[1]);
    });

    return $select;
  }

  function table(currency1, currency2) {
    var $table = $('<table>').attr('id', 'currency-overview-table');
    var rowIds = ['rank', 'price_eur', '24h_volume_eur', 'percent_change_7d', 'popularity'];
    var rowNames = ['Coinmarketcap Rang', 'Preis in &euro;', 'Handelsvolumen der letzten 24h', 'Wertschwankung der letzten Woche', 'Interesse'];
    var comparers = [higherRank, greater, greater, greater, greater];
    var formatter = [plain, formatEuro, formatEuro, percent, percent];

    $table.append(headerRow(currency1.name, currency2.name));

    for(var i = 0; i < rowIds.length; i++) {
      var id = rowIds[i];
      var comparer = comparers[i];
      var format = formatter[i];
      $table.append(row(rowNames[i], currency1[id], currency2[id], comparer, format));
    }

    return $table;

    function row(name, val1, val2, comparer, format) {
        var val1Addon = comparer(val1, val2) ? '<i class="fa fa-thumbs-o-up" aria-hidden="true"></i> ' : '';
        var val2Addon = comparer(val2, val1) ? '<i class="fa fa-thumbs-o-up" aria-hidden="true"></i> ' : '';

        return $('<tr>')
          .append($('<td>').html(name))
          .append($('<td>').html(val1Addon + format(val1)))
          .append($('<td>').html(val2Addon + format(val2)))
    }

    function plain(val) {
      return val;
    }

    function percent(val) {
      return numeral(val).format('0.00') + '%';
    }

    function formatEuro(val) {
      return '&euro; ' + numeral(val).format('0,0.00');
    }

    function higherRank(val1, val2) {
      return parseFloat(val1) < parseFloat(val2);
    }

    function greater(val1, val2) {
      return parseFloat(val1) > parseFloat(val2);
    }

    function lesser(val1, val2) {
      return parseFloat(val1) < parseFloat(val2);
    }

    function headerRow(name1, name2) {
      return $('<tr>').append($('<td>'))
        .append($('<th>').text(name1))
        .append($('<th>').text(name2));
    }
  }
})();
