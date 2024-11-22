const counterDisplay = document.getElementById('counter');
const increaseButton = document.getElementById('increase');
const decreaseButton = document.getElementById('decrease');

let counter = 0;
increaseButton.addEventListener('click', () => {
  counter++;
  counterDisplay.textContent = counter;
});

decreaseButton.addEventListener('click', () => {
  counter--;
  counterDisplay.textContent = counter;
});
