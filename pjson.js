var prettyjson = require('prettyjson');

var data = {
  username: 'rafeca',
  url: 'https://github.com/rafeca',
  twitter_account: 'https://twitter.com/rafeca',
  projects: ['prettyprint', 'connfu']
};

var options = {
    keysColor: 'rainbow',
  dashColor: 'magenta',
  stringColor: 'white'
};

console.log(prettyjson.render(data, options));