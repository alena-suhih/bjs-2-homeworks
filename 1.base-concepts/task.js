"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discreminant = Math.pow(b, 2) - 4 * a * c;
  if (discreminant === 0) {
    arr = [-b / (2 * a)]
  } else if (discreminant > 0) {
    arr = [(-b + Math.sqrt(discreminant)) / (2 * a), (-b - Math.sqrt(discreminant)) / (2 * a)]
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = Number(percent)
  contribution = Number(contribution)
  amount = Number(amount)
  countMonths = Number(countMonths)
  if ((isNaN(percent)) || (isNaN(contribution) === true) || (isNaN(amount) === true) || (isNaN(countMonths) === true)) {
    return false
  }

  let percentMonth = (percent / 100) / 12
  let loanBody = amount - contribution
  let monthlyPayment = loanBody * (percentMonth + (percentMonth / (((1 + percentMonth) ** countMonths) - 1)))
  let totalSum = Number((monthlyPayment * countMonths).toFixed(2))
  return totalSum
}