
var employees = [];
function Employee(fName, jTitle, salary, status){
    this.firstName = fName;
    this.jobTitle = jTitle;
    this.salaryMade = salary;
    this.workingStatus = status || "Contract";
    this.printEmployeeForm = function(){
        return (this.firstName + " " + this.jobTitle + " " + this.salaryMade + " " + this.workingStatus);
    }
}




var firstEmployee = new Employee("Mana", "Developer", "$5,000,000", "Full Time");
var secondEmployee = new Employee("Eric", "CEO", "$500,000");
var thirdEmployee = new Employee("Simone", "Boss", "$500,000/hr", "Full Time");

employees.push(firstEmployee, secondEmployee, thirdEmployee);

console.log(firstEmployee.printEmployeeForm());
console.log(secondEmployee.printEmployeeForm());
console.log(thirdEmployee.printEmployeeForm());

console.log(employees);

document.getElementById("employee1").innerHTML = firstEmployee.printEmployeeForm();

document.getElementById("employee2").innerHTML = secondEmployee.printEmployeeForm();

document.getElementById("employee3").innerHTML = thirdEmployee.printEmployeeForm();



 




///////////////////////////////////////

//var charachterArray = [];
//
//function Character(characterClass, gender, strength){
//    this.characterClass = characterClass;
//    this.gender = gender;
//    this.strength = strength;
//    this.fight = function(){
//        console.log("You are fighting with" + this.strength);
//    }
//}
//
//for (var i = 0; i < 5; i++){
//    charachterArray.push(new Character("Cleric", "Eunich", 9000));
//console.log(charachterArray[i]);
//}
//
