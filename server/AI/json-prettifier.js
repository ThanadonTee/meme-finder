var fs = require('fs');
var meme = require('./memes.json');

fs.writeFileSync('memes-prettified.json', JSON.stringify(meme, null, 4));
