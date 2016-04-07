angular.module('listscards').controller('ListCtrl',function($scope, listsService, cardsService){

    $scope.lists = listsService.model.list;
    $scope.cards = cardsService.model.list;

    $scope.addList = function(){

        listsService.addList();

    };

    $scope.addCard = function(){

        cardsService.addCard();

    };

});
