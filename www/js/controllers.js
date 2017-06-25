angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

})

.controller('ToDoCtrl', function($scope,$state,$rootScope,$ionicPlatform,$cordovaDatePicker) {

  $rootScope.toDoListItems = [];

  $scope.AddItem = function (data) {
    $rootScope.toDoListItems.push({
      task:data.taskName,
      name:$rootScope.employee,
      date:$rootScope.date
    });
    data.taskName = '';
    $rootScope.date= '';
    console.log(JSON.stringify($rootScope.toDoListItems));
  //  taskService.addTaskToLocalStorage($rootScope.toDoListItems);
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
        //  $rootScope.date=date.toISOString().slice(0, 10);
         });

     };
   });



})

.controller('ViewTasksCtrl', function($scope,$state) {

  $scope.create=function(){
    $state.go('app.createTask');
  }
})

.controller('AssignTasksCtrl', function($scope,$rootScope) {
  $scope.employees = [
    { name: 'Reggae', id: 1 },
    { name: 'Chill', id: 2 },
    { name: 'Dubstep', id: 3 },
    { name: 'Indie', id: 4 },
    { name: 'Rap', id: 5 },
    { name: 'Cowbell', id: 6 }
  ];
  $scope.listlength = 5;

  $scope.getEmployee=function(name){
    $rootScope.employee=name;
    //console.log($rootScope.employee);
  }

   //console.log(JSON.stringify($rootScope.toDoListItems));
});
