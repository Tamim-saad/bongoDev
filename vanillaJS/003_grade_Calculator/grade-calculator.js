const markInput = document.getElementById('score');
const actBtn = document.getElementById('calculate');
const display = document.getElementById('result');

function toGrade() {
  // function toGrade() {
  // alert('clicked' );
  const number = parseInt(markInput.value);


  let grade = '';

  if (number >= 80) {
    grade = 'A+';
  } else if (number >= 70) {
    grade = 'A';
  } else if (number >= 60) {
    grade = 'B';
  } else if (number >= 50) {
    grade = 'C';
  } else if (number >= 40) {
    grade = 'D';
  } else if (number < 40) {
    grade = 'F';
  }
  else {
    grade = 'Invalid Input';
  }

  display.innerText = grade;

}


actBtn.addEventListener('click', toGrade);