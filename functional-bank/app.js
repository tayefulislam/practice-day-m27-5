
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

    if (valueId > 0) {

        getBalance.innerText = getBalanceAmount + valueId;
    }


}


function updateBalance(newAmount, isPlus) {
    let getMainBalance = document.getElementById('balance');

    let getMainBalanceAmount = parseFloat(getMainBalance.innerText);

    if (newAmount > 0 && isPlus == true) {

        getMainBalance.innerText = getMainBalanceAmount + newAmount;
    }

    else if (newAmount > 0 && isPlus == false) {
        getMainBalance.innerText = getMainBalanceAmount - newAmount;

    }

    else {

        alert('please enter a number')

    }



    console.log(getMainBalanceAmount);
}

// get Current Balance
function getCurrentBalance() {
    let currentBalance = parseFloat(document.getElementById('balance').innerText)
    return currentBalance;
}


document.getElementById('deposit-btn').addEventListener('click', function () {

    // call the take input  function

    let depositValue = input('deposit-input');

    setAmount('deposit-balance', depositValue);
    updateBalance(depositValue, true);



})

document.getElementById('withdraw-btn').addEventListener('click', function () {

    let withdrawValue = input('withdraw-input')
    let currentBalance = getCurrentBalance();


    if (withdrawValue <= currentBalance) {

        setAmount('withdraw-balance', withdrawValue)

        updateBalance(withdrawValue, false);

    }



})