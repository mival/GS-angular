'use strict';

/* Services */

angular.module('phonecatServices', ['ngResource']).
    factory('Post', function($resource){
    	return function(token) {
	    	return $resource('http://localhost:port/posts/:postId',
	            	{format:'json', port: '\:3000',  auth_token: token},{}
	            );
    	};
    }).factory('Comment', function($resource){
    	 return function(token) {
    	 	return $resource('http://localhost:port/posts/:postId/comments/:commentID',
            	{format:'json', port: '\:3000', auth_token: token},{}
            )
    	 };
	}).factory('User', function($resource){		
    	return {
    		login : function(user){
    			var res = $resource('http://localhost:port/tokens/:auth_token',
		        	{format:'json', port: '\:3000'},{
		        		_login : {method:'POST', params: {email : user.name, password : user.pass}, isArray:false}
		        	}
		        );
    			return res._login();
    		},
    		logout: function(user) {
    			var res = $resource('http://localhost:port/tokens/:auth_token',
		        	{format:'json', port: '\:3000'},{
		        		_logout : {method:'DELETE', params: {auth_token: user.token.token}}, 
		        	}
		        );
    			return res._logout();
    		}
    	}
	});
