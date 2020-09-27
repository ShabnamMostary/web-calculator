var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var result = document.getElementById("result");
var operator = document.getElementById("operator");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  var n1 = parseInt(num1.value);
  var n2 = parseInt(num2.value);

  switch (operator.value) {
    case "add":
      var calc = n1 + n2;
      break;
    case "sub":
      var calc = n1 - n2;
      break;
    case "mult":
      var calc = n1 * n2;
      break;
    case "div":
      var calc = n1 / n2;
      break;
  }
  result.innerHTML = "Answer is: " + calc;
}
