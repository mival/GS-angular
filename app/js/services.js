'use strict';

/* Services */

angular.module('appServices', ['ngResource']).
    factory('Post', function($resource){
        return $resource('http://localhost:port/posts/:postId',
                    {format:'json', port: '\:3000'},{}
                );
    }).factory('Comment', function($resource){
	 	return $resource('http://localhost:port/posts/:postId/comments/:commentID',
        	{format:'json', port: '\:3000'},{}
        )
	}).factory('TokenFactory', function($resource){		
        // res = $resource('http://localhost:port/tokens/:auth_token',
        //             {format:'json', port: '\:3000'},{
        //                 _login : {method:'POST', params: {email : user.name, password : user.pass}, isArray:false}
        //             }
        //         );
        return $resource('http://localhost:port/tokens/:auth_token',
                    {format:'json', port: '\:3000'},{
                        create : {method:'POST', isArray:false}
                    });
    	// return {
    	// 	login : function(user){
    	// 		var res = $resource('http://localhost:port/tokens/:auth_token',
		   //      	{format:'json', port: '\:3000'},{
		   //      		_login : {method:'POST', params: {email : user.name, password : user.pass}, isArray:false}
		   //      	}
		   //      );
    	// 		return res._login();
    	// 	},
    	// 	logout: function(user) {
    	// 		var res = $resource('http://localhost:port/tokens/:auth_token',
		   //      	{format:'json', port: '\:3000'},{
		   //      		_logout : {method:'DELETE', params: {auth_token: user.token.token}}, 
		   //      	}
		   //      );
    	// 		return res._logout();
    	// 	}
    	// }
	});
