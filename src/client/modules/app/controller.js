export default [
	'$scope',
	'postsFactory',

	($scope, postsFactory) => {
		$scope.posts = postsFactory.posts;

		$scope.addPost = () => {
			const ok = postsFactory.add($scope.title, $scope.link);
			if (ok) {
				$scope.title = '';
				$scope.link = '';
			}
		};

		$scope.voteAgainst = post => {
			post.rating--;
		};

		$scope.voteFor = post => {
			post.rating++;
		};
	}
];