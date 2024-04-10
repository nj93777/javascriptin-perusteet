/**
Muokkaa funktio shoutMyName palauttamaan saamansa name-parametri isolla kirjaimilla.
 */

function shoutMyName(name) {
// Muuttaa ja palauttaa nimen ISOILLA kirjaimilla
return name.toUpperCase();
}

// Esimerkki - älä muokkaa
console.log(shoutMyName('Sam')); // "SAM"
console.log(shoutMyName('Charley')); // "CHARLEY"
console.log(shoutMyName('alex')); // "ALEX"



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



