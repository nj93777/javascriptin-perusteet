/**
Täydennä funktio getCharCount niin, että se palauttaa argumenttina str saamiensa merkkien lukumäärän.
*/

function getCharCount(str) {
     // Oletetaan, että str on aina merkkijono, joten palautetaan suoraan sen pituus
  return str.length;
}


// Esimerkkikäyttö - älä muokkaa
console.log(getCharCount('Sam')); // 3
console.log(getCharCount('Alex 123')); // 8
console.log(getCharCount('Jimi was here')); // 15 (oikea luku on 14)


// Treenaa: Keksi itse samanlainen funktio eri nimellä


function countWords(str) {
    // Poistetaan ylimääräiset välilyönnit ja erikoismerkit, erotellaan sitten sanat
    const words = str.replace(/[^\w\s]|_/g, "")
                     .replace(/\s+/g, " ")
                     .trim()
                     .split(' ');

    // Palautetaan sanojen määrä
    return words.length;
}

// Kutsu tekemääsi funktiota
console.log(countWords('Hei miten menee')); // 3
console.log(countWords('En keksi mitään eli tämä on esimerkki lause')); // 8
console.log(countWords('JavaScript ohjelmointi...:(')); // 2


// TREENI2

function countLetters(str) {
    // Poistetaan kaikki muu paitsi kirjaimet, mukaan lukien ääkköset
    const lettersOnly = str.replace(/[^a-zA-ZöåÖÅäÄ]/g, "");

    // Palautetaan kirjainten määrä
    return lettersOnly.length;
}

// Kutsu tekemääsi funktiota
console.log(countLetters('Hei miten menee')); // 13
console.log(countLetters('En keksi mitään eli tämä on esimerkki lause')); // 36
console.log(countLetters('JavaScript ohjelmointi...:(')); // 21
