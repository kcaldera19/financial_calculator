"use strict"
console.log("I work");

window.onload = init

function init(){

    // document grabs the html page by the id
    const futureValueForm = document.querySelector("#futureValueForm");

    futureValueForm.addEventListener("submit", calcFutureValue);

}
// What happens when the user clicks on something
function calcFutureValue(event){
    event.preventDefault();
    const deposit = Number(document.querySelector("#deposit").value);
    const interestRate = Number(document.querySelector("#interestRate").value);
    const years = Number(document.querySelector("#years").value);


    // futureValue = desposit * (1 + interestRate/100) ** years;
    const futureValue = deposit * (1 + interestRate/100) ** years;
    const interestEarned = futureValue - deposit;

    let resultDiv = document.querySelector("#results");

    resultDiv.innerHTML=` If you deposit $${deposit} in a cd that earns ${interestRate} %interest and increase in ${years} years, your CD's will have a balance of $${futureValue.toFixed(2)} and you would have earned $${interestEarned.toFixed(2)} in interest} `
}