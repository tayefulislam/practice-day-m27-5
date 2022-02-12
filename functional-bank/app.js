
// take input

function input(inputField) {
    let getInput = document.getElementById(inputField);
    inputValue = parseFloat(getInput.value);
    getInput.value = '';
    return inputValue;

}

function setAmount(balanceId, valueId) {
    let getBalance = document.getElementById(balanceId);
    let getBalanceAmount = parseFloat(getBalance.innerText);
    getBalance.innerText = getBalanceAmount + valueId;

}


function updateBalance(newAmount) {
    let getMainBalance = document.getElementById('balance');

    let getMainBalanceAmount = parseFloat(getMainBalance.innerText);
    getMainBalance.innerText = getMainBalanceAmount + newAmount;

    console.log(getMainBalanceAmount);
}



document.getElementById('deposit-btn').addEventListener('click', function () {

    // call the take input  function

    let depositValue = input('deposit-input');

    setAmount('deposit-balance', depositValue);
    updateBalance(depositValue);



})

document.getElementById('withdraw-btn').addEventListener('click', function () {

    let withdrawValue = input('withdraw-input')

    setAmount('withdraw-balance', withdrawValue)

    updateBalance(-withdrawValue);

})