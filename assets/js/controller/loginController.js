
// 

fs.controller("login", function($scope, $http, $location, $cookies, fs) {

	if (g.cookieChk()) {

		$location.path("/dashboard");

	} else {


		var loginBtn = angular.element(document.querySelector(".login .btn"));

		loginBtn.click(function() {

			// console.log($location);
			jQuery.cookie(g.cookie,'test');

			// return false;
			
			$location.path("/dashboard");

		})

	}



})