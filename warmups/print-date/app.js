

function myFunction() {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var n = weekday[d.getDay()];
    document.getElementById("date").innerHTML = "Today is: " + n;
}
myFunction();

//function myTime() {
//    var d = new Date();
//    var n = d.
//    document.getElementById("time").innerHTML = "Current time is: " + n;
//    
//}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function myTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var ampm = (h >= 12) ? "PM" : "AM";     
  // add a zero in front of numbers<10
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').innerHTML = "Current time is: " + h + ":" + m + ":" + s + " " + ampm;
  t = setTimeout(function() {
    myTime()
  }, 500);
}
myTime();