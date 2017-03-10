
var input = 'bookkeeper larry';
//input

var duplicates = [];
var noDuplicates = [];    


for(i = 0; i < input.length; i++){
    if(noDuplicates.indexOf(input[i]) === -1){
        noDuplicates.push(input[i]);
    } else {
        duplicates.push(input[i]);
    }
}    

noDupStr = noDuplicates.join();
dupStr = duplicates.join();

console.log(noDupStr);
console.log(dupStr);
// output
// No duplicates: 'bokepr lay'
// The Misfits: 'okeerr'