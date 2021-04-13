function myFunction() {
  // This fulfills requirement 2.4.6 e)
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
// This fulfills requirement 2.4.6 e)
var x = document.lastModified;
document.getElementById("lastModified").innerHTML = x;