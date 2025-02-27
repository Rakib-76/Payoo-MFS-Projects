// ****
    // -->Here i do call a function from here and it works shared function and return here as a result we use shared the same functilon so many times .
document
.getElementById("cashout-btn")
.addEventListener("click",function(event){
    event.preventDefault();
    const amount =  getInputValueByID("cashout-amount");
    const pin =  getInputValueByID("cashout-pin");
    const account = document.getElementById("cashout-account").value;
    const mainBalance =getInnerTextByID ("main-balance");

    if (amount > mainBalance){
        alert("Insufficient Balance");
        return;
    }


   if(account.length === 11){
    if(pin === 1234){
       const diff = mainBalance - amount;
    //    document.getElementById("main-balance").innerText = diff;
    setInnerTextByIDandValue("main-balance",diff);
      




    const container = document.getElementById("transaction-history");
    const p = document.createElement("p1");
    p.innerText = `
        cashout ${amount} from ${account}

    `
    container.appendChild(p);



    }
    else{
        console.log("pin thik nai")
    }


   }

   else{
    console.log("not okay")
   }

})


// ****




// *****
    // --here the funtion use separately only for cash out section 
// *****
// document.getElementById("cashout-btn")
// .addEventListener("click", function(event){
//     event.preventDefault;
//     const cashOutPin = document.getElementById("cashout-pin").value;
//     const convertedCashOutPin = parseFloat(cashOutPin);
//     const cashAmount = document.getElementById("cashout-amount").value;
//     const convertedCashAmount = parseFloat(cashAmount);
//     const mainBalance = document.getElementById("main-balance").innerText;
//     const convertedMainBalance = parseFloat(mainBalance);
//     if(convertedCashOutPin === 1234){
//         const difference = convertedMainBalance - convertedCashAmount;
//         document.getElementById("main-balance").innerText = difference;
//     }
//     else{
//         alert("enter valid pin")
//     }
   
// })