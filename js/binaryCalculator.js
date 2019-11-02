let expression = '';

let buttons = document.querySelectorAll('#btns [id^=btn]');
let resultContainer = document.getElementById('res');

for (let button of buttons) {
  button.addEventListener('click', function() {
    if (['0', '1', '+', '-', '*', '/'].includes(this.innerHTML)) {
      expression += this.innerHTML;
    } else if ('C' === this.innerHTML) {
      expression = '';
    } else if ('=' === this.innerHTML) {
      expression = calculate(expression)
    }
    resultContainer.innerHTML = expression;
  });
}

function calculate(expression) {
  if (expression) {
    let operator = expression.match(/[+-/*//]/)[0];
    let numbers = expression.split(/[+-/*//]/);

    let left = parseInt(numbers[0], 2);
    let right = parseInt(numbers[1], 2);

    return eval(left + operator + right).toString(2);
  }

  return '';
}
