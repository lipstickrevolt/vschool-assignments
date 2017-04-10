angular.module("myApp", [])

.controller("mainCtrl", ["$scope", "pullWeather", function ($scope, pullWeather) {
    
    $scope.temps = ["10", 15, 20, 25, 30];
    

    $scope.submit = function(lat, long) {
        pullWeather.getWeatherNow(lat, long).then(function(response){
            console.log(response);
             $scope.weather = response;
            
        $scope.temparray = ["°C", "°F", "°K"];
            
        $scope.currentTemp = response.currently.temperature;
    
   
                         
//                $scope.lat = "";
//                $scope.long = "";
            
        })

    }
    
}])

.filter('convertTemp', function () {

  
    return function (currentTemp, selectTemp) {

        // Ensure that we are working with a number

        if (currentTemp === undefined) {
            return currentTemp;
        } 
        var selectTemp = selectTemp || 'F';
        if(selectTemp === "°F"){
            return Math.round(currentTemp) + " " + "°" + "F";
            
        }else if(selectTemp === "°C") {
            return Math.round((currentTemp - 32) * 5 / 9) + " " + "°" + "C";
        } else if(selectTemp === "°K"){
            return Math.round((currentTemp-32) * (5/9) + 273.15) + " " + "°" + "K";
        }
            }
    }

);