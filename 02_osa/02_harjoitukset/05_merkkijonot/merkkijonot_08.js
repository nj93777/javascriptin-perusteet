/**
Muokkaa funktio sayHello jotta se sisällyttää parametrina saamansa nimen tervehdykseen. 

 */
function sayHello(name) {
// Palauttaa tervehdyksen, joka sisältää nimen
return `Hello ${name}`;
}

// Esimerkki - älä muokkaa
console.log(sayHello('Alex')); // "Hello Alex"
console.log(sayHello('Sam')); // "Hello Sam"



// Treenaa: Keksi itse samanlainen funktio eri nimellä ja tervehdyksellä

function sayMoro(name) {
  return `Moro ${name}`;
}

console.log(sayMoro('Johnny')); //Moro Johnny
console.log(sayMoro('Meri')); //Moro Meri


// Kutsu tekemääsi funktiota