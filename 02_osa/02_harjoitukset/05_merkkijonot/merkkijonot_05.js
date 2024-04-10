/**
Muokkaa funktio getLastCharacter palauttamaan saamansa merkkijonon viimeinen merkki
 */

function getLastCharacter(name) {
// Palauttaa merkkijonon viimeisen merkin
return name[name.length - 1];
}

// Esimerkki - älä muokkaa
console.log(getLastCharacter('Sam')); // "m"
console.log(getLastCharacter('Alex')); // "x"
console.log(getLastCharacter('Charley')); // "y"



// Treenaa: Keksi itse samanlainen funktio eri nimellä

function getLastCharacter(name) {

return name[name.length - 1];
}

// Kutsu tekemääsi funktiota

console.log(getLastCharacter('hassua1')) //a
console.log(getLastCharacter('hassua2')) //a
console.log(getLastCharacter('hassua3')) //a
