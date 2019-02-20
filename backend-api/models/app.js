let mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('process.env.DB');
//console.log(process.env.DB)
mongoose.Promise = Promise;

module.exports.Item = require('./items');

