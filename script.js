function calculateLoan() {
  let loanAmountValue = parseFloat(document.getElementById("loan-amount").value);
  let interestRateValue = parseFloat(document.getElementById("interest-rate").value);
  let monthsToPayValue = parseInt(document.getElementById("months-to-pay").value);

  console.log(loanAmountValue);
  console.log(interestRateValue);
  console.log(monthsToPayValue);

  if (isNaN(loanAmountValue) || isNaN(interestRateValue) || isNaN(monthsToPayValue) || monthsToPayValue <= 0) {
    document.getElementById("payment").innerHTML = "Please enter valid values";
    return;
  }

  let interest = (loanAmountValue * interestRateValue * 0.01) / monthsToPayValue;
  let monthlyPayment = (loanAmountValue / monthsToPayValue + interest).toFixed(2);

  document.getElementById("payment").innerHTML = `Monthly Payment: ${monthlyPayment} €`;
}
