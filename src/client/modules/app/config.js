import homeView from 'modules/app/views/home.html';

export default [
	'$stateProvider',
	'$urlRouterProvider',

	($stateProvider, $urlRouterProvider) => {
		$stateProvider.state('home', {
			url: 'home',
			controller: 'AppController',
			template: homeView //TODO: find out why it doesn't work
		});

		$urlRouterProvider.otherwise('home');
	}
];