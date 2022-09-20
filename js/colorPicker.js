function convertColor() {
  console.log("Button Press")
  //Create variables from the input tags
  let red = parseFloat(document.getElementById("red").value);
  let green = parseFloat(document.getElementById("green").value);
  let blue = parseFloat(document.getElementById("blue").value);

  //Make sure the number fits the criteria
  if (red > 1 | red < 0) {
    alert("Make sure your number is between 0.0 and 1.0")
    console.log("Invalid number")

  } else if (green > 1 | green < 0) {
    alert("Make sure your number is between 0.0 and 1.0")
    console.log("Invalid number")

  } else if (blue > 1 | blue < 0) {
    alert("Make sure your number is between 0.0 and 1.0")
    console.log("Invalid number")

  } else {
    //If the number is between 0.0 and 1.0 than continue
  }
  //Create Pho, Gamma, Beta, and luminance variables

  var pho
  var gamma
  var beta
  var total = green + red + blue;

  var luminance = Math.max(red, green, blue);

//Multiply by 255
  var rgbRed = red * 255;
  var rgbGreen = green * 255;
  var rgbBlue = blue * 255;


  pho = red / total;
  pho = red.toFixed(1);

  gamma = green / total;
  gamma = green.toFixed(1);

  beta = blue / total;
  beta = blue.toFixed(1);





  document.getElementById("output").innerHTML = "(" + pho + ", " + gamma + ", " + beta + ", " + luminance + ")";

  var outputColor = "rgb(" + rgbRed + "," + rgbGreen + "," + rgbBlue + ")";

  document.getElementById("colorSquare").style.background = outputColor
  }


