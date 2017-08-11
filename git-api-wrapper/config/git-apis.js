var apis   =  { 
	'baseUrl' : 'https://api.github.com/',
	'users' : 'users/',
	'repos' : 'repos/',
	'header' : {
		'Authorization' : 'token YOurToken',
		'Accept': 'application/json', 
		'Content-Type': 'application/json',
		'user-agent': 'node.js'
	}
}

module.exports = apis;
