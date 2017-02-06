
fs.controller("dashboard", function($scope, $location, $http, fs) {

	 g.domReady();
	// console.log(fs.cookieCheck());
	if (fs.cookieCheck()) {

	} else {

		$location.path("login");

	}
	// console.log(123)

})

fs.controller("provider", function($scope, $location, $http, fs,ngDialog) {

	g.domReady();
	// console.log(fs.cookieCheck());
	if (fs.cookieCheck()) {

	} else {

		$location.path("login");

	}

	// console.log(123)

	$scope.clickToOpen = function() {

        ngDialog.open({ 

        	template: '../../../templates/orders_details.html' ,
        	className :'ngdialog-theme-default orderinfo-un-view',
        	scope: $scope,
        	
   		});

        
    };

})
