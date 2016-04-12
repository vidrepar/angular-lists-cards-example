angular.module('listscards').factory('listsService',function() {

	var service = {

        model:{

            list:[],
            item:null

        },

        addList: function(){

            var i = service.model.list.length;

            service.model.list.push({
                id:i,
                name:'List ' + i,
                cards:[]
            });

            console.log(service.model.list);

        },

        addCards: function (){

            console.log('test');

        }

    };

	return service;
});
