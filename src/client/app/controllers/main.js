import mainModule from 'app/modules/main';

mainModule.controller('MainCtrl', [
	'$scope',
	$scope => {
		$scope.posts = [
			{ title: 'Ee', rating: -2 },
			{ title: 'Dd', rating: -1 },
			{ title: 'Cc', rating: 0 },
			{ title: 'Bb', rating: 1 },
			{ title: 'Aa', rating: 2 },
		];

		$scope.addPost = () => {
			if ($scope.title) {
				$scope.posts.push({
					title: $scope.title,
					link: $scope.link,
					rating: 0
				});
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
]);