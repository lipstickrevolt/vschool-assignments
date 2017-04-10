angular.module("myApp")

.service("getLyrics", function ($http) {
    var self= this;
    
    var config = {
        method: "GET",
        headers: {
            "X-Mashape-Key": "B5ajMQxItEmshUf7x5cmqnwFFoJIp1rmNUzjsnptoaajlAz0Yl",
            'Accept': 'application/json'
        }
    };

    this.track = "";
    this.getID = function () {
        config.url = 'https://musixmatchcom-musixmatch.p.mashape.com/wsr/1.1/matcher.track.get?f_has_lyrics=1&q_artist=' + this.artist + '&q_track=' + this.track;
        return $http(config).then(function (response) {
            return response.data;
        })
    }
    this.getWords = function () {
        config.url = "https://musixmatchcom-musixmatch.p.mashape.com/wsr/1.1/matcher.lyrics.get?q_artist=" + this.artist + "&q_track=" + this.track;
        return $http(config).then(function (response) {
            return response.data;
        })
    }

    self.id = "";
    this.getSocial = function (id) {
        config.url = 'https://musixmatchcom-musixmatch.p.mashape.com/wsr/1.1/artist.get?artist_id=' + self.id;
        return $http(config).then(function (response) {
            self.number
            return response.data;
        })
    }
})