var people = [
    {
        name: "Jim",
        email: "jim@gmail.com",
        numFriends: 10
    },
    {
        name: "Jane",
        email: "jane@gmail.com",
        numFriends: 30
    },
    {
        name: "Jim",
        email: "jim@gmail.com",
        numFriends: 200
    }
];

function noDuplicates(arrayofObjects) {
    arrayofObjects = arrayofObjects.sort(function(a, b){
        if(a.name < b.name) return -1;
        if(a.name > b.name) return 1;
        return 0;
    })

    for (var i = 0; i < arrayofObjects.length-1; i++) {
        if (arrayofObjects[i].name === arrayofObjects[i + 1].name && arrayofObjects[i].email === arrayofObjects[i + 1].email) {
        
            arrayofObjects[i].numFriends = arrayofObjects[i].numFriends + arrayofObjects[i +1].numFriends;
            arrayofObjects.splice(i +1, 1);
            
        }
        
    }
    return arrayofObjects
}

console.log(noDuplicates(people));





