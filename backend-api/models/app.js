let mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://seyi:s3y1c0l3@ds253889.mlab.com:53889/items', { useNewUrlParser: true });
//mongodb://seyi:s3y1c0l3@ds253889.mlab.com:53889/items
mongoose.Promise = Promise;

module.exports.Item = require('./items');

//mongoose.connect('mongodb://localhost/items-api', { useNewUrlParser: true });