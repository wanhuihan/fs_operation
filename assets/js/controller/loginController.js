
// 

fs.controller("login", function($scope, $http, $location, $cookies) {

	if (g.cookieChk()) {

		$location.path("/dashboard");

	} else {

		var loginBtn = angular.element(document.querySelector(".login .btn"));

		loginBtn.click(function() {

			// console.log($location);
			jQuery.cookie(g.cookie,'test');

			// console.log($cookies);
			
			$location.path("/dashboard");

		})

	}



})