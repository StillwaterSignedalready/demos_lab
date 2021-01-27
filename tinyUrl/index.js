
const FACTOR = 255;

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function (longUrl) {
  // console.log(longUrl.split(''))
  // console.log(longUrl.split('').map(char => char.charCodeAt(0)))
  console.log(longUrl.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 1)))
  return longUrl.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('');
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function (shortUrl) {
  return shortUrl.split('').map(char => String.fromCharCode(char.charCodeAt(0) - 1)).join('');
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */

const txt = 'hello';

const en = encode(txt);
console.log('en', en)
const de = decode(en);
console.log('de', de)