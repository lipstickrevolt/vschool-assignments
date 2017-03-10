
var lyrics = ["This", "hit", "that", "ice", "cold",  
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];

function songLyrics(lyrics){
    var str = lyrics.join(' ');
    console.log(str);
    
}    
songLyrics(lyrics);        
       
function revLyrics(lyrics){
    lyrics.reverse();
    console.log(lyrics.join(" "));
}

console.log(revLyrics(lyrics));

function everyOther(lyrics) {
    for (i = 0; i < lyrics.length; i++){
        if (i % 2 === 0){
            console.log(lyrics[i])
        }
        
    }
}
console.log(everyOther(lyrics));