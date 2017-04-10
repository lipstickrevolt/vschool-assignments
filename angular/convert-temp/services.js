angular.module("myApp")

.service('pullWeather', function($http){
    this.getWeatherNow = function(lat, long){
        return $http.jsonp('https://api.darksky.net/forecast/6d6f169ffbbbd63a1c5ec905b9873d7b/' + lat + "," + long + "?callback=JSON_CALLBACK").then(function(response){
             return response.data;  console.log(response.data.currently.temperature);
        })
        
        
    }
    
      
})