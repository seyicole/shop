let mongoose = require('mongoose');

let itemsSchema = new mongoose.Schema({
	name: String,
	price: String,
	description: String,
	category: String,
	image: String,
	color: String,
	// approved: {type: Boolean, default: false},
	created: {type: Date, default: Date.now}
})

let Item = mongoose.model('Item', itemsSchema)

module.exports = Item;