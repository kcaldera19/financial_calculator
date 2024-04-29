"use strict"

window.onload = monthlyMorgagePayment;
function monthlyMorgagePayment() {
    let loanAmountField = parseFloat(document.querySelector("#loanAmount").value);
    let annualInterestRateValue = parseFloat(document.querySelector("#annualnterestRate").value);
    let loanLengthField = parseFloat(document.querySelector("#loanLength").value);

    // converting annual interest rate to monthly by 12 * 100
    let monthlyInterestRate = annualInterestRateValue / 12/100;
    let numberfPayments = loanLengthField * 12;

    let monthlyPayment = (loanAmountField * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberfPayments));

    let total= `The monthly payment will be:$${monthlyPayment.toFixed(2)}`;
    document.querySelector("#payment").innerHTML = total;
}
 
