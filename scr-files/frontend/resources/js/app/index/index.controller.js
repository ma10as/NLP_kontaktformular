(function () {
    'use strict';

    angular
        .module('app')
        .controller('IndexController', IndexController);

    IndexController.$inject = ['$scope', 'messageFactory', 'notifications'];

    function IndexController($scope, messageFactory, notifications) {

        $scope.messages = messageFactory;
        $scope.register = function (form) {
            messageFactory.add(form)
                .then(function () {
                    notifications.showSuccess({
                        message: 'Tak for din henvendelse! Vi vender tilbage hurtigst muligt.',
                        hideDelay: 3000, //ms
                        hide: true //bool
                    });
                    $scope.form = {};
                })
                .catch(function (data) {
                    console.log(data);
                });
        }
    }
} ());