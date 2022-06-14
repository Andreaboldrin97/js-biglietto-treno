//creazione var legate all'user

//creo una var per chiedere il nome all'utente
let userName = (prompt(`Buongiorno mi dica il suo nome`));
console.log(userName);

//cro una var per chiedere l'età dell'utente
let userAge = (parseInt(prompt(`benvenuto signor ${userName} , in base all'età ci sono degli sconti mi dica la sua`)));
console.log(userAge);

//creo una var per chiedere quanti km dovrà percorrere
let kmToCover = (parseInt(prompt(`allora signor ${userName} ; quati km dovrà percorrere`)));
console.log(kmToCover);


//! creazione cpsto biglietto

let PriceNoDiscount = (kmToCover * 0.21);
console.log(PriceNoDiscount)

let PriceDiscount =('')
let Price =('')

if( userAge < 18){
    PriceDiscount=((PriceNoDiscount * 20 ) / 100)
    Price=( PriceNoDiscount - PriceDiscount )
}
console.log(PriceDiscount)
console.log(Price)