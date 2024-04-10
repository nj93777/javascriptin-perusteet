/**
Toteuta funktio canVote siten, että se palauttaa arvon true aina kun ikä on 18 tai enemmän ja false muissa tapauksissa.
*/

function canVote(age) {
    // 18 tai enemmän
    if (age >= 18) {
        return true; 
    } else {
        return false; 
    }
}

// Esimerkkikäyttö - älä muuta
console.log(canVote(25)); // true
console.log(canVote(18)); // true
console.log(canVote(10)); // false



// Treenaa: Keksi itse samanlainen funktio eri nimellä

function canBuy(age) {
    // 21 tai enemmän
if (age >=21) {
    return true;
} else {
    return false
}
}

// Kutsu tekemääsi funktiota

console.log(canBuy(30)); // true
console.log(canBuy(21)); // true
console.log(canBuy(3)); // false
console.log(canBuy(19)); // false
