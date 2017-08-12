var apis   =  { 
	'baseUrl' : 'https://api.github.com/',
	'users' : 'users/',
	'repos' : 'repos/',
	'auth' : 'authorizations/1',
	"scopes": [
      "public_repo"
    ],
	'header' : {
		'Authorization' : 'token 6e2c0f2858b5762edcde0f9ae1702fdbc112552f',
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
