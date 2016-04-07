angular.module('listscards').factory('cardsService',function() {

	var service = {

        model:{
            list:[
                {
                    id:1,
                    name:'Card 1'
                },
                {
                    id:2,
                    name:'Card 2'
                },
                {
                    id:3,
                    name:'Card 3'
                }
            ],
            item:null
        },

        addCards: function(){

            service.model.list.push({
                id : service.model.list.length+1,
                name: 'Card ' + service.model.list.length+1
            })

        }

    };

	return service;
});
