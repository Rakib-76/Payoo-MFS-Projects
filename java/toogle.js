
// *****
    // here i write the code very simple and lengthy
// *****

// // document.getElementById("cashout").style.display="none";
// document
// .getElementById("cashout").style.display = "none";
// document
// .getElementById("transaction-history").style.display="none";
// document
// .getElementById("addmoney-box")
// .addEventListener("click",function(){
//     document
//     .getElementById("cashout").style.display="none";
//     document
//     .getElementById("add-money").style.display="block";
//     document
//     .getElementById("transaction-history").style.display="none";
// })

// document
// .getElementById("cashout-box")
// .addEventListener("click",function(){
//     document
//     .getElementById("cashout").style.display = "block";
//     document
//     .getElementById("add-money").style.display = "none";
//     document
//     .getElementById("transaction-history").style.display="none";
// })

// document
// .getElementById("transaction")
// .addEventListener("click",function(){
//     document
//     .getElementById("cashout").style.display="none";
//     document
//     .getElementById("add-money").style.display="none";
//     document
//     .getElementById("transaction-history").style.display="block";
// })



// here the code is short and use from utilities where code are written 


document
.getElementById("cashout").style.display = "none";
document
.getElementById("transaction-history").style.display="none";
document
.getElementById("add-money").style.display="none";

document
.getElementById("addmoney-box")
.addEventListener("click",function(){
handleToogle("cashout","none");
handleToogle("add-money","block");
handleToogle("transaction-history","none");
})

document
.getElementById("cashout-box")
.addEventListener("click",function(){
handleToogle("cashout","block");
handleToogle("add-money","none");
handleToogle("transaction-history","none")
})

document
.getElementById("transaction")
.addEventListener("click",function(){
handleToogle("transaction-history","block");
handleToogle("add-money","none");
handleToogle("cashout","none");
})