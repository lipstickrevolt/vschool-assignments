function getInfo(){ document.getElementById("button").addEventListener("click", function(){
    var myForm = document.getElementById("myForm");
    var name = myForm.name.value;
    var age = myForm.age.value;
    var gender = myForm.gender.value;
    var lastName = myForm.lastName.value;
    var travelingTo = myForm.travelingTo.value;
    var diet = myForm.diet;
    var txt = "";
    var counter = 0;
    for (var i = 0; i < diet.length; i++){
        if (diet[i].checked && counter === 0){
            txt = diet[i].value;
            console.log("hi");
        counter++;
        } else if(diet[i].checked){
            txt = txt + " and " + diet[i].value;
        counter++;
        } 
    }

    var formOutPut = `First name: ${name}
Last name: ${lastName}
Age: ${age}
Gender: ${gender}
Location: ${travelingTo}
Diet restriction: ${txt}`
    alert (formOutPut);
});
                  }

getInfo();