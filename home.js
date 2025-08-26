const validPin =1234;
const transactionData = [];
//function to get inputValues
function getInputValueNumber(id){
  const inputField= document.getElementById(id);  
  const inputFieldValue = inputField.value;
  const inputFieldValueNumber = parseInt(inputFieldValue);
  return inputFieldValueNumber;
}
function getInputValue (id){
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    return inputFieldValue
}
//functions to get inner text
function getInnerText(id){
    const element = document.getElementById(id);
    const elementValue = element.innerText;
    const elementValueNumber = parseInt(elementValue);
    return elementValueNumber;
}
//function to set the innerText
function setInnerText(value){
    const availableBalanceElement = document.getElementById('total-amount')
    availableBalanceElement.innerText = value;
}
//function for toggle
function handleToggle(id){
    const forms = document.getElementsByClassName("forms")
    for(const form of forms){
        form.style.display = "none";
    }
    document.getElementById(id).style.display = "block"
}

//function to toggle button
function handleToggleButton(id){
    const formBtns = document.getElementsByClassName("forms-btn")
    for(const btn of formBtns){
        btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]")
        btn.classList.add("border-gray-300");
    }
    document.getElementById(id).classList.remove("border-gray-300")
    document.getElementById(id).classList.add("border-[#0874f2]", "bg-[#0874f20d]")

}
  //add-Money-btn

document.getElementById("addMoney").addEventListener("click", function(e){
e.preventDefault();
const bank = document.getElementById('Select-bank').value;
const accountNumber = document.getElementById('account-number').value;
const amountToAdd = getInputValueNumber("amount-to-add");
const pinNo = getInputValueNumber('pin-number')
const availableBalance = getInnerText("total-amount")

if(accountNumber.length <11 ){
    alert("please provide a valid account number");
    return;
}
if(pinNo !== validPin){
    alert("please provide a valid pin number");
    return;
}

const totalNewAvailableBalance = amountToAdd + availableBalance;

setInnerText(totalNewAvailableBalance);



})

//cash-out money feature

 const accountNumber = document.getElementById('agent-number').value;
const pinNo = getInputValueNumber('pin-number')
document.getElementById('withdraw-btn').addEventListener("click", function(e){
e.preventDefault;
const amount = parseInt(document.getElementById('withdraw-amount').value)
const availableBalance = getInnerText("total-amount");

const newAvailableMoney = availableBalance - amount;
 setInnerText(newAvailableMoney);

})

//transfer money feature
 
document.getElementById('send-now-button').addEventListener("click", function(e){
e.preventDefault;
const accountNumber = document.getElementById('user-account').value;
const pinNo = getInputValueNumber('pin-number-cash-out')
const amount = parseInt(document.getElementById('send-now-button').value)
const availableBalance = getInnerText("total-amount");
const newAvailableMoney = availableBalance - amount;
 setInnerText(newAvailableMoney)

})

//toggling feature
document.getElementById("add-button").addEventListener("click", function(){
    handleToggle("add-money-parent");
    handleToggleButton("add-button")

})
document.getElementById("cash-out-button").addEventListener("click", function(){
    handleToggle("cash-out-parent");
    handleToggleButton("cash-out-button")
})
document.getElementById("transfer-money-button").addEventListener("click", function(){
    handleToggle("transfer-money-parent");
    handleToggleButton("transfer-money-button");
})
document.getElementById("get-bonus-button").addEventListener("click", function(){
    handleToggle("get-bonus-parent");
     handleToggleButton("get-bonus-button");
})
document.getElementById("pay-bill-button").addEventListener("click", function(){
    handleToggle("pay-bill-parent");
     handleToggleButton("pay-bill-button");
})
document.getElementById("transaction-button").addEventListener("click", function(){
    handleToggle("transaction-parent");
     handleToggleButton("transaction-button");
})