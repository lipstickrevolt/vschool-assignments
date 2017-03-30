// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.


function chunkArrayInGroups(things, num){
    var splitArray = [], i;
    for (i = 0; i < things.length; i += num){
        splitArray.push(things.slice(i, i + num));
        
    }
    console.log(splitArray);
}

chunkArrayInGroups(["a", "b", "c", "d"], 2); 
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3); 
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2); 
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4); 
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3); 
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4); 
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2); 


//
//should return [["a", "b"], ["c", "d"]].
//should return [[0, 1, 2], [3, 4, 5]].
//should return [[0, 1], [2, 3], [4, 5]].
//should return [[0, 1, 2, 3], [4, 5]].
//should return [[0, 1, 2], [3, 4, 5], [6]].
//should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
//should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]]