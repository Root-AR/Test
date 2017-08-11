var express    = require('express');        
var app        = express();                
var bodyParser = require('body-parser');
var config = require('./config/git-apis.js');
var unirest = require('unirest');
var restConfig = require('./utils/restConfig.js');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 7000;        


var router = express.Router();              


router.route('/users/:owner')
.get(function(req, res) {
	
	var url = config.baseUrl  + config.users +req.params.owner + '/repos?sort='+req.query.sortBy;

	var args = config.header;
	
	unirest.get(url)
	.headers(args)
	.end(function (response) {

	  res.json({ response: response.body});
	});

});


router.route('/contributers/:owner/:repo')

.get(function(req, res) {

	var url = config.baseUrl  + config.repos +req.params.owner + '/' +req.params.repo+'/contributors';
	
	var args = config.header;
	
	unirest.get(url)
	.headers(args)
	.end(function (response) {

	  res.json({ response: response.body});
	});

});

app.use('/git', router);

app.listen(port);
console.log('Server Started  at' + port);
