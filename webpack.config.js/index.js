require('babel-register')({ presets: ['env'] });

module.exports = require('./config.babel').default;
