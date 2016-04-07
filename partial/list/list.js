angular.module('listscards').controller('ListCtrl',function($scope, listsService){

    $scope.lists = listsService.model.list;

    $scope.addList = function(){

        listsService.addList();

    };

});
