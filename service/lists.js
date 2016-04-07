angular.module('listscards').factory('listsService',function() {

	var service = {

        model:{

            list:[],
            item:null

        },

        addList: function(){

            service.model.list.push({
                id:service.model.list.length+1,
                name: 'List ' + (service.model.list.length+1)
            });

            console.log(service.model.list);

        }

    };

	return service;
});
