'use strict';

/* App Module */

angular.module('phonecat', ['phonecatFilters', 'phonecatServices']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  	  when('/logout', {templateUrl: 'partials/posts-list.html',   controller: UserController}).
      when('/posts', {templateUrl: 'partials/posts-list.html',   controller: PostsController}).
      when('/posts/:postId', {templateUrl: 'partials/post-detail.html', controller: PostController}).
      otherwise({redirectTo: '/posts'});
	}]).config(function($httpProvider) {
  function exampleInterceptor($q,$log) {
    function success(response) {
      console.log('Successful response: ', response);
      return response;
    }
    function error(response) {
      console.log('Response status: ', response);
      return $q.reject(response); //similar to throw response;
    }
    return function(promise) {
      return promise.then(success, error);
    }
  }
  $httpProvider.responseInterceptors.push(exampleInterceptor);
});