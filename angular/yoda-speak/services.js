angular.module("myApp")

.service('pullData', function($http){
    var req = {
        method: "GET",
        headers: {
            "X-Mashape-Key": "ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm"}
    }
    this.getYodaSpeak = function(addition){
        req.url = "https://yoda.p.mashape.com/yoda?sentence=" + addition;
        return $http(req).then(function(response){
            return response.data;
        })
    }
    
    
    
})

