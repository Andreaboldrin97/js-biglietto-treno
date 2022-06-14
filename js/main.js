//creazione var legate all'user

//creo una var per chiedere il nome all'utente
let userName = prompt(`Buongiorno mi dica il suo nome e cognome`);
console.log(userName);
document.getElementById('user_name').innerHTML = userName;

//cro una var per chiedere l'età dell'utente
let userAge = parseInt(prompt(`benvenuto signor ${userName} , in base all'età ci sono degli sconti mi dica la sua`));
console.log(userAge);
document.getElementById('user-age').innerHTML = userAge;

//creo una var per chiedere quanti km dovrà percorrere
let kmToCover = parseInt(prompt(`allora signor ${userName} ; quati km dovrà percorrere ?`));
console.log(kmToCover);
document.getElementById('km_tocover').innerHTML = kmToCover;


//! creazione costo biglietto

let PriceNoDiscount = (kmToCover * 0.21);
console.log(PriceNoDiscount);

let PriceDiscount ;
let Price ;

if (isNaN(userAge) == true){
    alert(`l'età da lei indicata non è valida`);
} else {
    if( userAge < 18){
        PriceDiscount=((PriceNoDiscount * 20 ) / 100);
        Price=( PriceNoDiscount - PriceDiscount ).toFixed(2);
    }else if(userAge > 65){
        PriceDiscount=((PriceNoDiscount * 40 ) / 100);
        Price=( PriceNoDiscount - PriceDiscount ).toFixed(2);
    }else{
        Price=PriceNoDiscount.toFixed(2);
    }
}



console.log(PriceDiscount);
console.log(Price + '&euro;');
document.getElementById('price').innerHTML = Price;