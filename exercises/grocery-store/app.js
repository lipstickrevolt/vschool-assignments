var shopper = {
    firstName : "Mana",
    age : 30,
    isHungry : true,
    groceryCart : ["rice", "yogurt", "mint leaves"], 
    printCart : function(){
        this.groceryCart.push(item);
        return this.groceryCart;
    }
};

shopper.age;
console.log(shopper.printCart("bacon"));

var employee = {
  name: "Seymoure Butts",
  pets: [
    {
      type: "reptile",
      species: "iguana",
      habitat: "desert"
    },
    {
      type: "reptile",
      species: "Water Dragon",
      habitat: "desert"
    },
    {
      type: "reptile",
      species: "Gecko",
      habitat: "desert"
    },
  ]
};

employee.pets[0].species;