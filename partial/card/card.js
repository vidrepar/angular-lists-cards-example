angular.module('listscards').controller('CardCtrl',function($scope, listsService){

    $scope.cards = listsService.model.list.cards;

});
