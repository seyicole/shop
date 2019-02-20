let	express = require ('express'),
		port = process.env.PORT || 3000,
		app =express(),
		path = require('path'),
		cors = require('cors'),
		request = require('request'),
		bodyParser = require('body-parser'),
		expressSanitizer = require('express-sanitizer'),
		itemRoutes = require('../backend-api/routes/items')	

app.use(cors()); 
//allows to access req body from a post/put require
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
app.use(express.static(path.join(__dirname + '/public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');	

app.use('/api/items', itemRoutes)

// app.get('/', (req, res) => {
// 	res.render('index')
// })


app.get('/', function(req, res){
		var jobApi = 'http://localhost:3000/api/items'
		console.log(jobApi)
		request(jobApi, function(err, response, body){
			
	        if(!err && response.statusCode == 200) {
				var items = JSON.parse(body)
				res.render('index', {items: items})
			}
		});
});


app.get('/:itemId', function(req, res){
		let url = req.params.itemId;
		var jobApiId = 'http://localhost:3000/api/items/' + url;
		console.log(jobApiId)

		request(jobApiId, function(err, response, bodyDetails){
			
	        if(!err && response.statusCode == 200) {
			var items = JSON.parse(bodyDetails)
			console.log(items)

			res.render('details', {items: items})
		}
		})

});

//post troute
app.get('/items/new', (req, res) => {
		res.render('post')
	})
	
	app.post('/', (req, res)=>{
		  req.body.title = req.sanitize(req.body.name);
		  req.body.category = req.sanitize(req.body.category);
		  req.body.description = req.sanitize(req.body.description);
		  req.body.price = req.sanitize(req.body.price);
		  req.body.image = req.sanitize(req.body.image);
		  req.body.color = req.sanitize(req.body.color);

		console.log('Your value was sanitized to: ' + req.body.description)

		var formBody = {
	              	name: req.body.name.trim(),
					category: req.body.category.trim(),
					description: req.body.description.trim(),
					price: req.body.price.trim(),
					image: req.body.image.trim(),
					color: req.body.color.trim(),
	              	created: Date.now()
	            };
	    // var formData = {
					// 	body: JSON.stringify(formBody),
					// 	my_file: fs.createReadStream(__dirname + '/public/uploads/247nursing_blu.png'),
					// 	};

		request.post(console.log('ur data',formBody),
			{
            url:'http://localhost:3000/api/items/', 
            // body: formBody,
           	body: formBody,
    		json: true

		 }, function optionalCallback(err, httpResponse, body) {
		  // console.log('form:', key)
		  if (err) {
		    return console.error('upload failed:', err);
		  }else{
		  	console.log('Upload successful!  Server responded with:', body);
			}
			return res.redirect('/')
		});
	})



app.listen(port, ()=> {
	console.log('APP IS RUNNING ON ' + port)
})