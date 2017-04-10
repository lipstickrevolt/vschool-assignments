angular.module("myApp", [])

.controller('mainCtrl', ["$scope", "pullData", function ($scope, pullData) {

    $scope.submit = function () {
      $scope.yoda = "your response is on the way!";  pullData.getYodaSpeak($scope.speak).then(function (yodaResponse) {
            $scope.yoda = yodaResponse;
        });

        $scope.speak = "";

    }




}]);