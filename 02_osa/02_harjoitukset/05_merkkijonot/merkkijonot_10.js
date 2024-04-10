/**
Muokkaa funktio capitalize palauttamaan saamansa sana kirjoitettuna vain isolla alkukirjaimella
 */

function capitalize(word) {
  // Tarkistaa, onko sana tyhjä
  if(word.length === 0) {
    return word;
  }

  // Palauttaa sanan isolla alkukirjaimella
  return word[0].toUpperCase() + word.substring(1).toLowerCase();
}

// Esimerkki - älä muokkaa
console.log(capitalize('sam')); // "Sam"
console.log(capitalize('ALEX')); // "Alex"
console.log(capitalize('chARLie')); // "Charlie"


// Treenaa: Keksi itse samanlainen funktio eri nimellä

function capitalize(word) {
    if (word.length === 0) {
        return word;
    }

    return word[0].toUpperCase() + word.substring(1).toLowerCase();
}

// Kutsu tekemääsi funktiota
console.log(capitalize('johnnY')); // "Johnny"
console.log(capitalize('sami')); // "Sami"
console.log(capitalize('jeRry')); // "Jerry"

