angular.module('listscards').controller('CardCtrl',function($scope, cardsService){

    $scope.cards = cardsService.model.list;

    $scope.addCard = function(){

        cardsService.addCards();

    };

});
