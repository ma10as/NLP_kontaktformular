(function() {
    'use strict';

    angular
        .module('app')
        .factory('messageFactory', messageFactory);

    messageFactory.$inject = ['$q'];

    function messageFactory($q) {

        return {

            messages: [{"firstName":"Mathias","lastName":"Nørluns","mail":"mathias@yos.dk","phone":"25304654","subject":"Oversigt","message":"Hvor kan jeg finde min pensions oversigt"}],
            add: function(item) {
                var deferred = $q.defer();
                this.messages.push(item);
                deferred.resolve();
                return deferred.promise;
            }
        };

        /*var messages = [
            {"firstName":"Mathias","lastName":"Nørluns","mail":"mathias@yos.dk","phone":"25304654","subject":"Oversigt","message":"Hvor kan jeg finde min pensions oversigt"}
        ];
        alert('messageFactory');
        return messages*/

        /*return {
            messages: messages,
            addMessages: addMessages

        };

        function messages() {
            var messages = [
                {"firstName":"Mathias","lastName":"Nørluns","mail":"mathias@yos.dk","phone":"25304654","subject":"Oversigt","message":"Hvor kan jeg finde min pensions oversigt"}
            ];

            return messages
        }

        function addMessages() {
            alert('addMessages');
            var deferred = $q.defer();
            deferred.resolve();


            return deferred.promise;
        }*/
    }
}());