
fs.controller("dashboard", function($scope, $location, $http, fs) {

	// console.log(fs.cookieCheck());
	if (fs.cookieCheck()) {

	} else {

		$location.path("login");

	}
	// console.log(123)

})

fs.controller("provider", function($scope, $location, $http, fs) {

	// console.log(fs.cookieCheck());
	if (fs.cookieCheck()) {

	} else {

		$location.path("login");

	}

	// console.log(123)

})