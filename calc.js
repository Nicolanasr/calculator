var numbers = document.querySelectorAll(".num");
var buttons = document.querySelectorAll(".btn");
var input = document.querySelector("input[type=text]");
var operators = document.querySelectorAll(".op");
var startNum = document.querySelector(".numfirst");
var delAll = document.querySelector(".ac");
var equal = document.querySelector("#equal");
var point = document.querySelector("#point");

var ptCounter = 0;
var results = ["", "", ""];

for (var i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function() {
    if (this.value == ".") {
      ptCounter++;
    }
    if (results[1] == "" && ptCounter <= 1) {
      input.value = input.value + this.value;
      startNum.style.color = "transparent";
      results[0] = input.value;
    } else if (results[1] != "" && ptCounter <= 1) {
      input.value = input.value + this.value;
      startNum.style.color = "transparent";
      results[2] = results[2] + this.value;
    }
  })
}

for (var i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", function() {
    if (results[1] == "") {
      ptCounter = 0;
      input.value = input.value + this.value;
      startNum.style.color = "transparent";
      results[1] = this.value;
    }
  })
}

delAll.addEventListener("click", function() {
  input.value = "";
  startNum.style.color = "#333131";
  results = ["", "", ""];
  ptCounter = 0;
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].disabled = false;
  }
})

equal.addEventListener("click", function() {
  input.value = (eval(results[0] + results[1] + results[2]));
  results = ["", "", ""];
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
  }
  delAll.disabled = false;
})
