var express    = require('express');        
var app        = express();                
var bodyParser = require('body-parser');
var config = require('./config/git-apis.js');
var unirest = require('unirest');
var restConfig = require('./utils/restConfig.js'); 
var port = process.env.PORT || 7000; 
var router = express.Router();              

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.route('/users/:owner')
.get(function(req, res) {
	
	var url = config.getUsersApiUrl (req.params.owner , req.query.sortBy);
	
	var headers = config.getHeader();
	
	restConfig.get( url, headers )
	.then(function (usersRepo) {
		res.json({ response: usersRepo});
	});

});


router.route('/contributers/:owner/:repo')

.get(function(req, res) {

	var url =  config.getUserRepoApiUrl (req.params.owner , req.params.repo);
	
	var headers = config.getHeader();
	
	restConfig.get( url, headers )
	.then(function (repo) {
		res.json({ response: repo});
	});

});

app.use('/git', router);

app.listen(port);
console.log('Server Started  at' + port);
