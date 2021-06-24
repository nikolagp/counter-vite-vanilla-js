import './style.css'

//initial count
let count = 0;

//value and buttons
const btnDecrease = document.getElementById('btn-decrease');
const btnIncrease = document.getElementById('btn-increase');
const btnReset = document.getElementById('btn-reset');
let value = document.getElementById('value');

let updateValue = function () {
  value.textContent = count;
};

btnDecrease.addEventListener("click", function() {
  value.textContent = count --;
});

btnIncrease.addEventListener("click", function() {
  value.textContent = count ++;
});

btnReset.addEventListener("click", function() {
  count = 0;
  value.textContent = count;
});


/*if (value < 0) {
  document.value.style.color = "red";
} else {
  document.value.style.color = "blue";
}*/
