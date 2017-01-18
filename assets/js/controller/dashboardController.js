
fs.controller("dashboard", function($scope, $location, $http, fs) {

	// console.log(fs.cookieCheck());
	if (fs.cookieCheck()) {

	} else {

		$location.path("login");

	}

	// console.log(123)

})
fs.controller("provider", function($scope, $http, $location, $cookies, $window) {

	// alert($cookies.fs_designer_token)
	$scope.leftSideBar = false;


	// console.log($cookies.fs_designer_token);
	if (!g.chkCookie()) {
		$location.path("/login");
	} else {
		$window.location.href = '#/dashboard/provider';
		$window.location.reload();
	}

})