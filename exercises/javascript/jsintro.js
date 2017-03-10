var fruit = ["banana", "apple", "orange", "watermelon"];  
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];  


vegetables.pop();
//console.log(vegetables);

fruit.splice(0, 1);
//console.log(fruit);

fruit.push(fruit.indexOf("orange"));

console.log(vegetables.length);
vegetables.push(3);

console.log("fruit: ", fruit);  
console.log("vegetables: ", vegetables);

var food = fruit.concat(vegetables);

console.log(food.splice(4, 2));
console.log(food);
console.log(food.reverse());
console.log(food.toString());

