let mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/items-api', { useNewUrlParser: true });

mongoose.Promise = Promise;

module.exports.Item = require('./items');