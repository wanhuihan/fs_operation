
// 

fs.controller("login", function($scope, $http, $location, $cookies, fs) {

	if (g.cookieChk()) {

		jQuery("#page-container").removeClass('no-login');

		$location.path("/dashboard");

	} else {

		jQuery("#page-container").addClass('no-login')

		var loginBtn = angular.element(document.querySelector(".login .btn"));

		loginBtn.click(function() {

			// console.log($location);
			jQuery.cookie(g.cookie,'test');
			
			$location.path("/dashboard");

		})

	}



})