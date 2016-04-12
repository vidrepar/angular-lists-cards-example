angular.module('listscards', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('listscards').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('list', {
        url: '/lists',
        templateUrl: 'partial/list/list.html',
        controller: 'ListCtrl'
    });
    /* Add New States Above */
    $urlRouterProvider.otherwise('/lists');

});

angular.module('listscards').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
