(function() {
    'use strict';

    angular
        .module('controllers')
        .controller('StudentsController', StudentsController);

    function StudentsController($http) {

        var vm = this;
        vm.map = { center: { latitude: 52.1326, longitude: 5.2913 }, zoom: 7 };

        vm.newStudent = {};

        vm.setStudent = function(currentStudent){
            if(vm.currentStudent != currentStudent)
                vm.currentStudent = currentStudent ,
                vm.map = { center: { latitude: vm.currentStudent.geoLat, longitude: vm.currentStudent.geoLong }, zoom: 15 };
            else
                vm.currentStudent = undefined;
        };

        vm.createStudent = function(){
            var newStudent = {
                name: vm.newStudent.name,
                age: vm.newStudent.age
            }

            vm.allStudents.splice(0, 0, newStudent);
            //vm.allStudents.push(newStudent);

            vm.newStudent = {};
        }

        $http.get('data/trainstations.json').then(function(stations){
            vm.allStudents = stations.data;
        });

    }


})();
