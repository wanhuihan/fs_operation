

fs.config(function($stateProvider, $urlRouterProvider) {


    $urlRouterProvider.when("", "login");

    // login page
    $stateProvider.state('/', {

        url: '/login',

        resolve: {

        },

        views: {

            'main': {
                templateUrl: '../../templates/users/login.html',
                // controller: 'navigation'
                controller: 'login'
            },
        },
    })

    // dashboard page
    $stateProvider.state('/dashboard', {

        url: '/dashboard',

        resolve: {

        },

        views: {

            'sideBar@': {

                templateUrl: '../../templates/sideBar.html'
            },

            'header@': {

                templateUrl: '../../templates/header.html',

                controller: "header"
            },

            'main@': {
                templateUrl: '../../templates/dashboard.html',
                // controller: 'navigation'
                controller: 'dashboard'
            },
        },
    })

})