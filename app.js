var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider

		.when('/', {
		templateUrl: 'views/about.html'

	})

	.when('/resume', {
		templateUrl: 'views/resume.html'
	})

	.when('/project', {
		templateUrl: 'views/projects.html'
	})


	.when('/contact', {
		templateUrl: 'views/contacts.html'
	});




});

app.controller('myController', function ($scope) {

	$scope.navigation = [
		{
			id: 1,
			value: 'About me',
			route: '#/'
		},
		{
			id: 2,
			value: 'Resume/CV',
			route: '#resume'
		},
		{
			id: 3,
			value: 'Side Projects',
			route: '#project'
		},
		{
			id: 4,
			value: 'Contact',
			route: '#contact'
		},
	];


	//Change currently selected nav bar item. 
	$scope.changeNav = function (obj) {

		for (let i = 0; i < $scope.navigation.length; i++) {
			var currentObj = $scope.navigation[i];
			if (currentObj.id !== obj.id) {

				var item = angular.element(document.getElementById(currentObj.id));
				item.removeClass('selected');
			}
		}

		var docElement = angular.element(document.getElementById(obj.id));
		docElement.addClass('selected');
	}
});