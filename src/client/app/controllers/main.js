import mainModule from 'app/modules/main';

mainModule.controller('MainCtrl', [
	'$scope',
	$scope => {
		$scope.textToShow = 'Hey, buddy!';
	}
]);