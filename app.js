 angular.module('toDo', [])
        .controller('toDoCtrl', ['$scope', function($scope) {
          $scope.tasks = [];
          $scope.completed = [];
          $scope.newTaskName = '';
          $scope.newTask = function() {
            var taskName = $scope.newTaskName;
            if (taskName && $scope.tasks.indexOf(taskName) == -1
                     && $scope.completed.indexOf(taskName)) {
              $scope.tasks.push(taskName);
              $scope.newTaskName = '';
            }
          };
          $scope.completedTask = function(index, start, end) {
            end.push(start[index]);
            start.splice(index, 1);
          }
        }]);