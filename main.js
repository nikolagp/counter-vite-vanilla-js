import './style.css'

//initial count
let count = 0;

//value and buttons
const btnDecrease = document.getElementById('btn-decrease');
const btnIncrease = document.getElementById('btn-increase');
const btnReset = document.getElementById('btn-reset');
let value = document.getElementById('value');
const valueBox = document.getElementsByClassName("value-box");

//update value function
let updateValue = function () {
  value.textContent = count;
};

//update color
let changeColor = () => {
  if (count < -1) {
    value.style.color = "rgb(255, 0, 0)";
  } else if (count > 1) {
    value.style.color = "rgb(60, 179, 113)";
  } else {
    value.style.color = "rgb(0, 0, 0)"
  }
};

//update background
let borderColor = () => {
  if (count < -1) {
    value.style.borderColor = "rgb(255, 0, 0)";
  } else if (count > 1) {
    value.style.borderColor = "rgb(60, 179, 113)";
  } else {
    value.style.borderColor = "rgb(0, 0, 0)"
  }
};

//counter btns
btnDecrease.addEventListener("click", function() {
  value.textContent = count --;
  changeColor(); 
  borderColor();
});

btnIncrease.addEventListener("click", function() {
  value.textContent = count ++;
  changeColor();
  borderColor();
});

btnReset.addEventListener("click", function() {
  count = 0;
  value.textContent = count;
  changeColor();
  borderColor();
});
