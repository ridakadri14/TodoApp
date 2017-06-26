angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

})

.controller('ToDoCtrl', function($scope,$state,$rootScope,$ionicPlatform,$cordovaDatePicker) {

  if (localStorage.getItem("mytodos") == null)
  {
     $rootScope.toDoListItems = [];
     localStorage.setItem("mytodos", angular.toJson($rootScope.toDoListItems));
  }else
  {
      //set the todolist from local storage
     $rootScope.toDoListItems = angular.fromJson(localStorage.getItem("mytodos"));
  }

  $scope.AddItem = function (data) {
    $rootScope.toDoListItems.push({
      task:data.taskName,
      name:$rootScope.employee,
      date:$rootScope.date
    });
    data.taskName = '';
    $rootScope.date= '';
    localStorage.setItem("mytodos", angular.toJson($rootScope.toDoListItems));
    console.log(JSON.stringify($rootScope.toDoListItems));
  };


  $scope.addTask=function(){
    $state.go('app.assignTask');
  }


  $ionicPlatform.ready(function(){
      $scope.showDatePicker = function(){
         var options = {
            date: new Date(),
            mode: 'date', // or 'time'
            minDate: new Date(1997, 1, 1),
            allowOldDates: true,
            allowFutureDates: false,
            doneButtonLabel: 'DONE',
            doneButtonColor: '#F2F3F4',
            cancelButtonLabel: 'CANCEL',
            cancelButtonColor: '#000000'
         };

         $cordovaDatePicker.show(options).then(function(date){
           function pad(n) {return n < 10 ? "0"+n : n;}
          $rootScope.date = pad(date.getDate())+"/"+pad(date.getMonth()+1)+"/"+date.getFullYear();

         });

     };
   });



})

.controller('ViewTasksCtrl', function($scope,$state,$rootScope) {

    $scope.create=function(){
    $state.go('app.createTask');
  }
})

.controller('AssignTasksCtrl', function($scope,$rootScope) {
  $scope.employees = [
    { name: 'Miles Jay', id: 1 },
    { name: 'Maryalice Zoller', id: 2 },
    { name: 'Tyisha Buckland', id: 3 },
    { name: 'Shyla Horsley ', id: 4 },
    { name: 'Angella Cooks ', id: 5 },
    { name: 'Reena Sharma', id: 6 }
  ];

  $scope.getEmployee=function(name){
    $rootScope.employee=name;
  }

});
