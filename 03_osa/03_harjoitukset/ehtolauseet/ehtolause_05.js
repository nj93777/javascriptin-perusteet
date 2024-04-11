/**
Täydennä funktio evenOrOdd siten, että se palauttaa merkkijonon "even", kun se saa parametriksi parillisen luvun, ja muuten "odd".
 */

function evenOrOdd(number) {
    //tarkista onko parillinen luku
    if (number % 2 ===0) {
        return "even";
} else {
    return "odd";
}
  }

// Esimerkkikäyttö - älä muokkaa
console.log(evenOrOdd(25)); // "odd"
console.log(evenOrOdd(18)); // "even"
console.log(evenOrOdd(-17)); // "odd"


// Treenaa: Keksi itse samanlainen funktio eri nimellä

//palauta merkkijonon "black" kun se saa parametriksi parillisen, muuten "red".

function even0rred(number) {
if (number % 2 ===0) {
    return "black";
} else {
        return "red";
    }
}

// Kutsu tekemääsi funktiota

console.log(even0rred(25)); //red
console.log(even0rred(17)); //red
console.log(even0rred(12)); //black
