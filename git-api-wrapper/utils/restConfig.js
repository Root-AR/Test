var unirest = require('unirest');
var promise = require('promise');

var restConfig = {

	get : function (url , headers) {
		
		var promise = new Promise(function (resolve, reject) {
			unirest.get(url)
			.headers(headers)
			.end(function (response) {
				resolve(response.body);
			});
		});
		return promise;

	},
	post : function () {
		
	},
	put : function () {
		
	},
	delete : function () {
		
	}

};

module.exports = restConfig;