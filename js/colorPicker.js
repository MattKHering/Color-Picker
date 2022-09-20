function convertColor() {
    var red = parseFloat(document.getElementById("red").value);
    var green = parseFloat(document.getElementById("green").value);
    var blue = parseFloat(document.getElementById("blue").value);


    if (0 > Math.min(colorRed)) {
        document.write("Enter a value between 0.0 and 1.0");
    }



}

function myFunction() {
    document.getElementById("output").innerHTML = "Red = " + parseFloat(document.getElementById("red").value) ;
  }


  function lab10firstLoopStopIf() {
    var i = 1;
    var total = 0;
    if (i > 0) {
      for (i = 1; i > 0;) {
        i = Number(prompt("Please enter a number greater than zero to add, otherwise enter zero to quit: "))
        document.write("You entered: " + i + "<br>")
        total = (total + i)
      }
    }
    document.write("Total of all numbers entered:  " + total);
  }
  convertColor();


