'use strict';

/* Controllers */

function PostsController($scope, Post) {

}

function PostController($scope, $routeParams, Post, Comment) {
	$scope.post = Post.get({auth_token:$scope.user["token"], postId: $routeParams.postId});
	$scope.comments = Comment.query({auth_token:$scope.user["token"], postId: $routeParams.postId});
}

function UserController($scope, TokenFactory, Post) {
	var Token = new TokenFactory()
	$scope.logout = function() {
		Token.$delete({auth_token: $scope.user["token"]});
		$scope.user = {"email":"not loget in"};
		$scope.posts = "";
	}
	$scope.login = function(user, pass) {
		$scope.user = {"email": user, "password": pass};
		Token.$create({"email": user, "password": pass}, function(response) {
			$scope.user["token"] = response.token
			Post.query({auth_token:$scope.user["token"]},function(posts){
   				$scope.posts = posts;
   			});
		});		
		
	};
}


//PhoneListCtrl.$inject = ['$scope', '$resource'];

//PhoneDetailCtrl.$inject = ['$scope', '$routeParams', 'Phone'];
