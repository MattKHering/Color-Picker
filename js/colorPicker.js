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
    alert("Nice job!")
  }
    
  console.log("Colors are " + red +"" + green +"" + blue)
  document.getElementById("output").style.background = string;
  }


