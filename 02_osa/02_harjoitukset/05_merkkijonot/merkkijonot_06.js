/**
Muokkaa funktio skipFirstCharacter  palauttamaan merkkijono, jossa on saamansa merkkijono ilman sen ensimmäistä merkkiä

 */
function skipFirstCharacter(text) {
// Palauttaa merkkijonon ilman sen ensimmäistä merkkiä
return text.substring(1);
}

// Esimerkki - älä muokkaa
console.log(skipFirstCharacter('Xcode')); // "code"
console.log(skipFirstCharacter('Hello')); // "ello"



// Treenaa: Keksi itse samanlainen funktio eri nimellä

function skipFirstCharacter(text) {
return text.substring(1);
}

// Kutsu tekemääsi funktiota

console.log(skipFirstCharacter('apina')); // "pina
console.log(skipFirstCharacter('koira')); //oira 
