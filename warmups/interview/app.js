//function makeArrayOfObjects(array1, array2){
//    var finalArray = [];
//    for (var i = 0; i < array1.length ; i++){
//        finalArray.push({
//            first: array1[i],
//        second: array2[i]});
//    }
//    console.log(finalArray);
//}
//
//makeArrayOfObjects([4, 2, 5, 8], ["Sean", "Jared", "Marcy", "Mary"]); 
//=> [
//    {first: 4, second: "Sean"},
//    {first: 2, second: "Jared"},
//    {first: 5, second: "Marcy"},
//    {first: 8, second: "Mary"}
//]

//function makeArrayOfObjects2(array1, array2, property1, property2){
//    var finalArray = [];
//    for (var i = 0; i < array1.length ; i++){
//        var objectToPush = {};
//        objectToPush[property1] = array1[i];
//        objectToPush[property2] = array2[i];
//        finalArray.push(objectToPush);
//    }
//    console.log(finalArray);
//}
//
//
//makeArrayOfObjects2([4, 2, 5, 8], ["Sean", "Jared", "Marcy", "Mary"], "age", "name");
//=> [
//    {age: 4, name: "Sean"},
//    {age: 2, name: "Jared"},
//    {age: 5, name: "Marcy"},
//    {age: 8, name: "Mary"}
//]

//function makeArrayFromObject(object){
//    var finalArray = [];
//    for (var key in object){
//        finalArray.push(object[key]); 
//    }
//    console.log(finalArray);
//}
//makeArrayFromObject({name: "Jessica", 
//                     age: 32,
//                     hobbies: ["dance", "MMA"],
//                     homeTown: "Beaver"} );


//=> ["Jessica", 32, ["dance", "MMA"], "Beaver"]

function makeArrayFromObject2(object, propertyType){
    var finalArray = [];
    for (var key in object){
        if ( typeof object[key] === propertyType){
            finalArray.push(object[key]);
        }
    }
    console.log(finalArray);
}

makeArrayFromObject2({name: "Jessica", age: 32, hobbies: ["dance", "MMA"], homeTown: "Beaver"}, "string");
//=> ["Jessica", "Beaver"]
























