let express = require('express'),
	router = express.Router(),
	db = require('../models/app'),
	helpers = require('../helpers/items');

router.route('/')
.get(helpers.getItems)//view items route
.post(helpers.postItems)//post items route

router.route('/:itemId')// item details route
.get(helpers.getItem)

module.exports = router;