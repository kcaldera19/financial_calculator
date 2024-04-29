"use strict"

window.onload = monthlyMorgagePayment;
function monthlyMorgagePayment() {
    const loanAmountField = parseFloat(document.querySelector("#loanAmount").value);
    const annualInterestRateValue = parseFloat(document.querySelector("#annualnterestRate").value);
    const loanLengthField = parseFloat(document.querySelector("#loanLength").value);

    // converting annual interest rate to monthly by 12 * 100
    const monthlyInterestRate = annualInterestRateValue / 1200;
    const numberfPayments = loanLengthField * 12;

    const monthlyPayment = (loanAmountField * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberfPayments));

    const total= `The monthly payment will be:$${monthlyPayment.toFixed(2)}`;
    document.querySelector("#payment").innerHTML = total;
}