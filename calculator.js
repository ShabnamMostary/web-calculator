var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var sum = document.getElementById("sum");

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  var result = parseInt(num1.value) + parseInt(num2.value);
  sum.innerHTML = "Sum is: " + result;
}
