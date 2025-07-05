```js
let balance = 1000;

function playGame() {
  const betInput = document.getElementById('bet-amount');
  const betAmount = parseInt(betInput.value);
  const resultText = document.getElementById('result-text');
  const balanceText = document.getElementById('balance');

  if (isNaN(betAmount) || betAmount <= 0) {
    resultText.textContent = 'Please enter a valid bet amount!';
    return;
  }
  if (betAmount > balance) {
    resultText.textContent = 'You do not have enough balance!';
    return;
  }

  const chosenNumber = 4;
  const randomNumber = Math.floor(Math.random() * 6) + 1;

  if (randomNumber === chosenNumber) {
    balance += betAmount * 5;
    resultText.textContent = `🎉 You won! Number was randomNumber. Your new balance is{balance}.`;
  } else {
    balance -= betAmount;
    resultText.textContent = `😞 You lost! Number was randomNumber. Your new balance is{balance}.`;
  }

  balanceText.textContent = `Balance: ${balance} coins`;
  betInput.value = '';
}
```