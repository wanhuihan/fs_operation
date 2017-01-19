

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
    
     $stateProvider.state('provider', {

        url: '/provider',

        resolve: {

        },

        views: {

            'sideBar@': {

                templateUrl: '../../templates/sideBar.html',
                 controller: "header"
            },

            'header@': {

                templateUrl: '../../templates/header.html',

                controller: "header"
            },

            'main@': {
                templateUrl: '../../templates/provider.html',
                // controller: 'navigation'
                // controller: 'provider'
            },
        },
    })

     $stateProvider.state('provider.details', {

        url: '/details',

        resolve: {

        },

        views: {

            // 'sideBar': {

            //     templateUrl: '../../templates/sideBar.html',


            // },

            // 'header@': {

            //     templateUrl: '../../templates/header.html',

            //     controller: "header"
            // },

            'main@': {
                templateUrl: '../../templates/provider_details.html',
                // controller: 'navigation'
                controller: function() {
                    g.domReady();                  
                }
            },
        },
    })

    // $stateProvider.state('providerDetails', {

    //     url: '/providerDetails',

    //     resolve: {

    //     },

    //     views: {

    //         'sideBar@': {

    //             templateUrl: '../../templates/sideBar.html'
    //         },

    //         'header@': {

    //             templateUrl: '../../templates/header.html',

    //             controller: "header"
    //         },

    //         'main@': {
    //             templateUrl: '../../templates/provider_details.html',
    //             // controller: 'navigation'
    //             // controller: 'provider'
    //         },
    //     },
    // })


})