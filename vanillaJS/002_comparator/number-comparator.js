const number1Input = document.getElementById('number1');
const number2Input = document.getElementById('number2');
const comBtn = document.getElementById('compare');
const result = document.getElementById('result');

function compare() {
  const number1 = parseInt(number1Input.value);
  const number2 = parseInt(number2Input.value);

  if (number1 === number2) {
    result.innerHTML = '<h1>Equal</h1>';
  }
  else if (number1 > number2) {
    result.innerHTML = '<h1>First Number is larger than the second number</h1>';
  }
  else {
    result.innerHTML = '<h1>Second number is larger than the first number</h1>';
  }

  // console.log(number1,number2);
  // alert('Clicked');
}

comBtn.addEventListener('click', compare)




















































// const number1Input = document.getElementById('number1');
// const number2Input = document.getElementById('number2');
// const compareButton = document.getElementById('compare');
// const result = document.getElementById('result');

// function setResultText(text) {
//   result.innerText = text;
// }

// function compare() {
//   const number1 = parseInt(number1Input.value);
//   const number2 = parseInt(number2Input.value);

//   if (number1 === number2) {
//     setResultText('Number are Equal');
//   } else if (number1 > number2) {
//     setResultText('First Number is larger than the second number');
//   } else {
//     setResultText('Second number is larger than the first number');
//   }
// }

// compareButton.addEventListener('click', compare);
