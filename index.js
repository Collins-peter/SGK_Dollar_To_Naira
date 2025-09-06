//PAYING IN DOLLAR LOGIC
convert();
function convert() {  
    const packagePrice = document.querySelector(".packagePrice");
    const VATnaira = document.querySelector(".VATnaira");
    const payTotal = document.querySelector(".payTotal");

    const inputDollar = document.querySelector(".inputDollar");
    const exchangeRate = document.querySelector(".exchangeRate");

   //THE CONVERTING PRICE TO NAIRA
   const priceToNaira = eval(inputDollar.value * exchangeRate.value);

   //THE CONVERTING VAT TO NAIRA
    const vatToNaira = eval(inputDollar.value * (75/1000) * exchangeRate.value);

   //THE TOTAL AMOUNT TO PAY
    const totalToPay = eval(priceToNaira + vatToNaira);

   //PRICE OUTPUT
   packagePrice.innerHTML = `₦ ${priceToNaira.toLocaleString()}`;
   packagePrice.style.color = "green";


   //VAT OUTPUT LOGIC OUTPUT  
   VATnaira.innerHTML = `₦ ${vatToNaira.toLocaleString()}`;
   VATnaira.style.color = "green";
  

   //TOTAL AMOUNT OUTPUT
   payTotal.innerHTML = `₦ ${totalToPay.toLocaleString()}`;
   payTotal.style.color = "green";

}


////////////////////PAYMENT IN DOLLAR LOGIC_________
submit()
function submit() {
   const dollarPay = document.querySelector(".dollarPay").value;
   const Dpay = parseFloat(dollarPay);

   const VATdollar = document.querySelector(".VATdollar");
   const dollarTotal = document.querySelector(".dollarTotal");

   const vatD = eval(Dpay * (75/1000));
   const VATd = parseFloat(vatD);

   const dollarVatTotal = eval(Dpay + VATd);

   VATdollar.innerHTML = `$ ${VATd.toLocaleString()}`;
   VATdollar.style.color = "green";

   dollarTotal.innerHTML = `$ ${dollarVatTotal.toLocaleString()}`;
   dollarTotal.style.color = "green";

   console.log(typeof Dpay);
}


/////////////ANIM FUNCTION///////
function firstTurn() {
   const firstContainer = document.querySelector(".firstContainer");
   const secondContainer = document.querySelector(".secondContainer");

   firstContainer.style.animation = "turnAnim 0.4s forwards";
   secondContainer.style.animation = "turnAnim 0.4s 0.2s ease-in forwards reverse";
}
function secondTurn() {
   const firstContainer = document.querySelector(".firstContainer");
   const secondContainer = document.querySelector(".secondContainer");
   
   secondContainer.style.animation = "turnAnim 0.4s forwards";
   firstContainer.style.animation = "turnAnim 0.4s 0.2s ease-in forwards reverse";
}
