$(document).ready(function () {
    var getCount = localStorage.getItem("clicks");
    var count = getCount;
    
    $("body").click(function () {
        count++;
        console.log(count);

        localStorage.setItem("clicks", count);
        document.getElementById("counter").innerHTML = localStorage.getItem("clicks");
        
    });

});


