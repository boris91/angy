import mainModule from 'app/modules/main';

mainModule.controller('MainCtrl', [
	'$scope',
	$scope => {
		$scope.posts = [
			{ title: 'Aa', rating: 54 },
			{ title: 'Bb', rating: 5 },
			{ title: 'Cc', rating: -39 },
			{ title: 'Dd', rating: 44 },
			{ title: 'Ee', rating: 0 },
		];

		$scope.addPost = () => {
			$scope.posts.push({
				title: $scope.newPostTitle,
				rating: 0
			});
			$scope.newPostTitle = '';
		};

		$scope.voteAgainst = post => {
			post.rating--;
		};

		$scope.voteFor = post => {
			post.rating++;
		};
	}
]);