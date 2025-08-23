document.getElementById("addMoney").addEventListener("click", function(e){
e.preventDefault();
const bank = document.getElementById('Select-bank').value;
const accountNumber = document.getElementById('account-number').value;
const amountToAdd = parseInt(document.getElementById('amount-to-add').value)
const pinNo = document.getElementById('pin-number').value
const availableBalance = parseInt(document.getElementById('total-amount').innerText)

const totalNewAvailableBalance = amountToAdd + availableBalance;

document.getElementById("total-amount").innerText = totalNewAvailableBalance;



})