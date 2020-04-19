const request = require ('request');
const cheerio = require('cheerio');
const fs = require('fs');
const writeStream = fs.createWriteStream('post.csv');

request('https://www.keeneland.com/', (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);
    var year = $('.field');
    var textFromSite = $('.rtecenter');
    //console.log($);
    //console.log($.html);
    console.log(textFromSite.text());
    //console.log(year.text());
  }
});

