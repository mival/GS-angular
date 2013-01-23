'use strict';

/* Controllers */

function PostsController($scope, Post) {
	console.log("user",$scope.user)
   $scope.posts = Post($scope.user.token.token).query();
}

function PostController($scope, $routeParams, Post, Comment) {
	$scope.load = function() {
		$scope.post = Post($scope.user.token.token).get({postId: $routeParams.postId});
		$scope.comments = Comment($scope.user.token.token).query({postId: $routeParams.postId});
	}
	$scope.load();
}

function UserController($scope, User) {
	$scope.logout = function() {
		User.logout($scope.user);
	}
	$scope.login = function() {
		$scope.user = {"name":"user@iquest.cz",'pass':"password"};
		$scope.user["token"] = User.login($scope.user);
	};
}


//PhoneListCtrl.$inject = ['$scope', '$resource'];

//PhoneDetailCtrl.$inject = ['$scope', '$routeParams', 'Phone'];
