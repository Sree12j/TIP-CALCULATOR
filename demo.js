const amounts=document.querySelector(".amount");
const btn=document.querySelector(".calculate");
const tips=document.querySelector(".tip");
const totals=document.querySelector(".total");
const errors=document.querySelector(".error")

function tipcalculator(){
   const amountvalue=parseFloat(amounts.value);
   const tipValue=parseFloat(tips.value);
   const totalAmount=amountvalue+(amountvalue * tipValue / 100);
   totals.innerText=totalAmount.toFixed(2);
   totals.style.fontSize = "23px"; 
if(amounts.value==""||tipValue==""){
    errors.innerHTML="please enter the correct value";
    errors.style.display="block";
    totals.style.display="none";
}}
btn.addEventListener("click",tipcalculator);
