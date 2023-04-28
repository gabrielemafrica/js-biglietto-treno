//presentazione
alert("Benvenuto al colcolatore di prezzo, INSERISCI I DATI RICHIESTI.")
//crea variabili globali

let userKm;
let userAge;
let discountUnder;
let discountOver;
let price;
let priceDiscount;
let messageKm;
let messageEta;
let messageDiscount;
let messageSconto;
let messagePrezzo;
let messageFinalPrice;


//chiedi chilometri

userKm = parseInt(prompt("Quanti chilometri devi percorrere?"));
userAge = parseInt(prompt("Quanti anni hai?"));


//calcolo prezzo intero

price = userKm * 0.21;


console.log("km = ", userKm);
console.log("eta = ", userAge);
console.log("prezzo = ", price);


//calcolo valore sconto

discountUnder = price * 20 / 100 ;
discountOver = price * 40 / 100 ;

console.log("sconto minorenni = ", discountUnder);
console.log("sconto vecchi = ", discountOver);

// calcolo prezzo scontato

if(userAge < 18){ //under
    priceDiscount = parseFloat((price - discountUnder).toFixed(2));
    //messaggi sconto
    messageDiscount = `Hai diritto allo sconto <u>under18</u> pari al 20%`;
    messageSconto = `Applica sconto: ${price} Euro - ${discountUnder} Euro`;
    
    
}else if(userAge >= 65){ //over
    priceDiscount = parseFloat((price - discountOver).toFixed(2));
    //messaggi sconto
    messageDiscount = `Hai diritto allo sconto <u>over65</u> pari al 40%`;
    messageSconto = `Applica sconto: ${price} Euro - ${discountOver} Euro`;
   
    
}else{ //no sconto
    priceDiscount = parseFloat(price.toFixed(2));
    //messaggi sconto
    messageDiscount = `Non hai diritto a sconti.`;
    messageSconto = `Applica sconto: ${price} Euro - 0 Euro`;
    
}

console.log("prezzo scontato= ", priceDiscount);


//creazione messaggi

messageKm = `Devi percorrere ${userKm} km`;
messageEta = `Hai ${userAge} anni`;
messagePrezzo = `Prezzo intero ${price} Euro`;
messageFinalPrice = `<u>Il prezzo finale é ${priceDiscount} Euro</u>`;


//output

document.getElementById("chilometri").innerHTML = messageKm;
document.getElementById("eta").innerHTML = messageEta;
document.getElementById("scontistica").innerHTML = messageDiscount;
document.getElementById("prezzo").innerHTML = messagePrezzo;
document.getElementById("sconto").innerHTML = messageSconto;
document.getElementById("finalPrice").innerHTML = messageFinalPrice;