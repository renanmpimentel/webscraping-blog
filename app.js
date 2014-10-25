const URL = 'http://renanmpimentel.github.io';

var request = require('request');
var cheerio = require('cheerio');

request(URL, function (err, resp, body) {
  if (!err) {
      var $ = cheerio.load(body);
      var info = [];

      $('article h2 a').map(function (i, links) {
          var text = $(links).text(),
              link = $(links).attr('href');

          info.push({
              link: URL + link,
              desc: text
          });
      });

      console.log(info);
  }
});
