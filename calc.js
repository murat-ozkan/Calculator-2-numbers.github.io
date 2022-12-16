//? ******* 4 FUNCTION CALCULATOR (2 NUMBERS) *************//

const number1 = +prompt("Please enter the first number:");
const func = prompt("Please enter the function (+, -, *, /)");
const number2 = +prompt("Please enter the second number:");

if (isNaN(number1) || isNaN(number2)) {
  alert("Please enter a valid number.");
} else {
  if (func == "+" || func == "-" || func == "*" || func == "/") {
    if (func == "*") {
      console.log(number1 * number2);
      alert(`${number1} ${func} ${number2} = ${number1 * number2}`);
    } else if (func == "/") {
      console.log(number1 / number2);
      alert(`${number1} ${func} ${number2} = ${number1 / number2}`);
    } else if (func == "+") {
      console.log(number1 + number2);
      alert(`${number1} ${func} ${number2} = ${number1 + number2}`);
    } else if (func == "-") {
      console.log(number1 - number2);
      alert(`${number1} ${func} ${number2} = ${number1 - number2}`);
    }
  } else {
    alert("Please refresh the page enter a valid function. (+, -, *, or /)");
  }
}

//? ******** by muratozkan ***********//
