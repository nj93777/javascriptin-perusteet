/**
Muokkaa funktio getFirstCharacter palauttamaan saamansa merkkijonon ensimmäinen merkki
 */

function getFirstCharacter(name) {
    // Palauttaa merkkijonon ensimmäisen merkin
  return name[0];
}
  
// Esimerkki - älä muokkaa
console.log(getFirstCharacter('Amsterdam')); // "A"
console.log(getFirstCharacter('Japan')); // "J"

// Treenaa: Keksi itse samanlainen funktio eri nimellä

function getFirstCharacter(name) {
    return name[0]; 
}

// Kutsu tekemääsi funktiota

console.log(getFirstCharacter('Helsinki')); //"A"
console.log(getFirstCharacter('Ruotsi')); // "R"