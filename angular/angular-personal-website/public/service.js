angular.module("myApp")

.service("getLyrics", function ($http) {
    var self = this;

    var config = {
        method: "GET",
        headers: {
            "X-Mashape-Key": "B5ajMQxItEmshUf7x5cmqnwFFoJIp1rmNUzjsnptoaajlAz0Yl",
            'Accept': 'application/json'
        }
    };

    this.id = "";

    this.getWords = function (artist, track) {
        config.url = "https://musixmatchcom-musixmatch.p.mashape.com/wsr/1.1/matcher.lyrics.get?q_artist=" + artist + "&q_track=" + track;
        return $http(config).then(function (response) {
            self.lyrics = response.data.lyrics_body;
            return response.data;
        })
    };

    this.getSocial = function (id) {
        config.url = 'https://musixmatchcom-musixmatch.p.mashape.com/wsr/1.1/artist.get?artist_id=' + id;
        return $http(config).then(function (response) {
            self.twitterUrl = response.data;
            return response.data;
        })
        
    };

    this.getID = function (artist, track) {
        config.url = 'https://musixmatchcom-musixmatch.p.mashape.com/wsr/1.1/matcher.track.get?f_has_lyrics=1&q_artist=' + artist + '&q_track=' + track;
        return $http(config).then(function (response) {
            return response.data.artist_id;
        })
    }

});