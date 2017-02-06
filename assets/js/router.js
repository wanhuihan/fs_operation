
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
                controller: 'login'
            },
        },
    })

    // dashboard page
    $stateProvider.state('dashboard', {

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
    
    // provider page
    $stateProvider.state('dashboard.provider', {

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
                controller: 'provider'
            },
        },
    })


    // provider details page
    $stateProvider.state('dashboard.provider.details', {

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
                controller: 'provider'
            },
        },
    })


    // appeal page
    $stateProvider.state('dashboard.appeal', {

        url: '/appeal',

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
                templateUrl: '../../templates/appeal.html',
                controller: function() {
                    g.domReady();                  
                }
            },
        },
    })

    // purchase page
    $stateProvider.state('dashboard.purchase',{

        url: '/purchase',

        resolve: {},

        views: {

            'sideBar@': {

                templateUrl: '../../templates/sideBar.html',
                controller: 'header'
            },

            'header@': {

                templateUrl: '../../templates/header.html',

                controller: "header"
            },

            'main@': {
                templateUrl: '../../templates/purchase.html',
                controller: function() {
                    g.domReady();                  
                }
            },
        },
    })



     $stateProvider.state('dashboard.purchase.details',{

        url: '/details',

        resolve: {},

        views: {

            'sideBar@': {

                templateUrl: '../../templates/sideBar.html',
                controller: 'header'
            },

            'header@': {

                templateUrl: '../../templates/header.html',

                controller: "header"
            },

            'main@': {

                templateUrl: '../../templates/purchase_details.html',
                controller: function() {

                    g.domReady();                  
                }
            },
        },
    })

    // returngoods page
    $stateProvider.state('dashboard.returngoods',{

        url: '/returngoods',

        resolve: {},

        views: {

            'sideBar@': {

                templateUrl: '../../templates/sideBar.html',
                controller: 'header'
            },

            'header@': {

                templateUrl: '../../templates/header.html',

                controller: "header"
            },

            'main@': {

                templateUrl: '../../templates/returngoods.html',
                controller: function() {
                    g.domReady();  
                                    
                }
            },
        },
    })

})