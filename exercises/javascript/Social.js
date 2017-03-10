var femaleRapper = {  
    name: "Mana",
    age: 30,
    bestSongs : ["walls", "Ob", "Here to stay"],
    farsiSong: function () {
        console.log("Azadi");
    },
    artistsWorkedWith: [
        {
            name: "Talib Kweli",
            age: 31,
            isRapper: true,
            bestSongs : [
                {
                    songName: "Get by",
                    yearReleased: "2005",
                    copiesSold: 8000 
                },
                {
                    songName: "Never Been in Love",
                    yearReleased: "1998",
                    copiesSold: 5000
                }
            ]
        },
        {
            name: "KRS One",
            age: 40,
            isRapper: true,
            bestSongs : [
                {
                    songName: "the bridge is over",
                    yearReleased: "1982",
                    copiesSold: 10000 
                },
                {
                    songName: "Sound of da Police",
                    yearReleased: "1989",
                    copiesSold: 70000
                }
            ]
        }
    ]
};
console.log(femaleRapper.farsiSong);
femaleRapper.tour = "West Coast";
femaleRapper.artistsWorkedWith.genre = "Hip hop";
femaleRapper.bestSongs.push("Your back", "Needed Me");