angular.module('listscards').controller('ListCtrl',function($scope, listsService){

    $scope.lists = listsService.model.list;

    $scope.addList = function(){

        listsService.addList();

    };

    $scope.addCards = function(targetedList){

        angular.forEach(listsService.model.list, function(list, index){

            var i = list.cards.length;

            //testing for pressed list in list array
            if(targetedList.id === index){

                listsService.model.list[index].cards.push({
                    id  :i,
                    name:'Card ' + i
                });

            }

            console.log(listsService.model.list[index].cards);

        });

    };

});
