/**
Muokkaa funktiota lowerName, jotta se palauttaa saamansa name-parametrin kokonaan pienin kirjaimin

 */
function lowerName(name) {
    return name.toLowerCase();
}

// Esimerkki - älä muokkaa
console.log(lowerName('Sam')); // "sam"
console.log(lowerName('ALEX')); // "alex"

// Treenaa: Keksi itse samanlainen funktio eri nimellä

//Palauttaa nimet pienillä kirjaimilla.

function namesToLowerCase(name) {
    // Muuttaa ja palauttaa nimen pienillä kirjaimilla
    return name.toLowerCase();
}

// Kutsu tekemääsi funktiota
console.log(namesToLowerCase('ApplE')); // "apple"
console.log(namesToLowerCase('NoKiA')); // "nokia"
console.log(namesToLowerCase('koira')); // "koira"


