
function convert() {  
    const packagePrice = document.querySelector(".packagePrice");
    const VATnaira = document.querySelector(".VATnaira");
    const payTotal = document.querySelector(".payTotal");

    const inputDollar = document.querySelector(".inputDollar").value;
    //const VAT = document.querySelector(".VAT").value;
    const exchangeRate = document.querySelector(".exchangeRate").value;

    const convertBtn = document.querySelector(".convertBtn");

 //THE CONVERTING PRICE TO NAIRA
    const priceToNaira = eval(inputDollar * exchangeRate);

 //THE CONVERTING VAT TO NAIRA
    const vatToNaira = eval(inputDollar * (75/1000) * exchangeRate);

 //THE TOTAL AMOUNT TO PAY
    const totalToPay = eval(priceToNaira + vatToNaira);


 //PRICE OUTPUT
 packagePrice.innerHTML = `₦ ${priceToNaira.toLocaleString()}`;
 packagePrice.style.color = "green";


 //VAT OUTPUT LOGIC OUTPUT  
    VATnaira.innerHTML = `₦ ${vatToNaira.toLocaleString()}`;
        VATnaira.style.color = "green";
  /*  if (inputDollar === "") {
        VATnaira.innerHTML = "Invalid Dollar Input!";
        VATnaira.style.color = "red";
    } else if (VAT === "") {
        VATnaira.innerHTML = "Invalid VAT Input!";
        VATnaira.style.color = "red";
    } else if (exchangeRate === "") {
        VATnaira.innerHTML = "Invalid Exchange Rate!";
        VATnaira.style.color = "red";
    } else {
        
    }
  */

 //TOTAL AMOUNT OUTPUT
 payTotal.innerHTML = `₦ ${totalToPay.toLocaleString()}`;
 payTotal.style.color = "green"

}