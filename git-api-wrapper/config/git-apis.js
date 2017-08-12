var apis   =  { 
	'baseUrl' : 'https://api.github.com/',
	'users' : 'users/',
	'repos' : 'repos/',
	'auth' : 'authorizations/1',
	"scopes": [
      "public_repo"
    ],
	'header' : {
		'Authorization' : 'token YOUR TOKEN',
		'Accept': 'application/json', 
		'Content-Type': 'application/json',
		'user-agent': 'node.js'
	},
	getHeader : function () {
		return this.header;
	},
	getUsersApiUrl : function ( owner , queryParamField)  {
		var url = this.baseUrl  + this.users + owner + '/repos?sort='+queryParamField;
		return url;
	},
	getUserRepoApiUrl : function ( owner , repoName)  {
		var url = this.baseUrl  + this.repos + owner + '/' +repoName+'/contributors';
		return url;
	}

}

module.exports = apis;
