

document.getElementById("Add-money-btn")
.addEventListener("click", function(event){
event.preventDefault();
const addAccount = document.getElementById("add-account-number").value;
const addAmount = getInputValueByID("add-amount");
const addPin = getInputValueByID("add-pin");
const mainBalance = getInnerTextByID("main-balance");
const selectedBank = document.getElementById("all-bank").value;

if(addAmount < 0){
  alert("Something wrong");
  return;
}


if(addAccount.length ===11){
  if(addPin === 1234){
    const sum = mainBalance + addAmount;
    setInnerTextByIDandValue("main-balance",sum);



    const container = document
    .getElementById("transaction-history");
    const div = document.createElement("div");
    div.classList.add("bg-red-400" , "p-10", "rounded", "gap-10")
    div.innerHTML = `
    <h1>Added Money from ${selectedBank}</h1>
    <h3>${addAmount}</h3>
    <p>account number: ${addAccount}</p>
    `
    container.appendChild(div);
    

   






  }
  else{
    alert("need correct pin");
  }
}
else{
  alert("need valid number");
}


})


// const pin = document.getElementById("pin").value;
// const convertedPin = parseFloat(pin);
// const amount = document.getElementById("amount").value;
// const convertedAmount = parseFloat(amount);
// const mainBalance = document.getElementById("main-balance").innerText;
// const convertedMainBalance = parseFloat(mainBalance);
// console.log(convertedMainBalance)
// // here if use for check for getting amount and pin otherwise it will show alert
// if(amount && pin){
//     // here if use for check that the pin is correct or not otherwise it will show alert
//   if(convertedPin === 1234){
//     const sum = convertedMainBalance + convertedAmount;
//     // here again calling main balance for putting the changes amount by sum 
//     document.getElementById("main-balance").innerText = sum;
//   }
//   else{
//     alert("need to correct pin")
//   }
// }
// else{
//     alert("enter amount")
// }
// })