let db = require('../models/app');

//view items route
exports.getItems = (req, res) => {
	db.Item.find().sort({created: -1})
	.then((items) =>{
		res.json(items)
	})
	.catch((err) => {
		res.send(err)
	})
}
//post items route
exports.postItems = (req, res) =>{
	db.Item.create(req.body)
	.then((newItem) => {
		res.status(201).json(newItem)
	})
	.catch((err) =>{
		res.send(err)
	})
}

// item details route
exports.getItem = (req, res) => {
	db.Item.findById(req.params.itemId)
	.then((itemDetails) =>{
		res.json(itemDetails)
	})
	.catch((err)=>{
		res.send(err)
	})
}

module.exports = exports;