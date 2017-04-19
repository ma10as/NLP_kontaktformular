(function() {
	'use strict';

	angular
		.module('app')
		.config(config);

	config.$inject = ['$routeProvider'];

	function config($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: '/html/index/index.html',
				controller: 'IndexController'
			})
			.otherwise({redirectTo:'/error'});
	}
}());