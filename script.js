 function roll() {
  const diceNum = document.getElementById('diceNum');
  const diceResult = document.getElementById('diceResult');
  const diceImage = document.getElementById('diceImage');
  
  let values = [];
  let images = [];

  for(let i = 0; i < diceNum.value; i++){
    const value = Math.floor(Math.random() * 6 + 1);
    values.push(value);
    images.push(`<img src='images/${value}.png'>`);
  }
  diceResult.textContent = 'dice: ' + values.join(', ');
  diceImage.innerHTML = images.join(' ');
}

sum(displayConsole, 2,4);

function sum(callback, x, y) {
  result = x + y;
  callback(result);
}

function displayConsole(result){
  console.log(result);
}

function handleOnkeydown(event) {
  if(event.key === 'Enter'){
    roll();
  }
}