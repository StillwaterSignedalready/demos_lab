const request = require('superagent');
const cheerio = require('cheerio');
const fs = require('fs-extra');

let url = 'http://cosplay.la/photo/index/0-0-';

console.log(request);

request
  .get(url + '1')
  .then(res => console.log(res.text));
