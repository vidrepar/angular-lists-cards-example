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

        addCard: function(){

            console.log('card added');

        }

    };

	return service;
});
