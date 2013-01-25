'use strict';

/* App Module */

angular.module('app', ['phonecatFilters', 'appServices']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/posts', {templateUrl: 'partials/posts-list.html',   controller: PostsController}).
      when('/posts/:postId', {templateUrl: 'partials/post-detail.html', controller: PostController}).
      otherwise({redirectTo: '/posts'});
	}]);