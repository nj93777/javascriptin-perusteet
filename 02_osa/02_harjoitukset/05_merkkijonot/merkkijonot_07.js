/**
Moukkaa funktio concatInitials palauttamaan merkkijono, joka yhdistää parametrit firstNameInitial ja lastNameInitial.
 */

function concatInitials(firstNameInitial, lastNameInitial) {
      // Yhdistää ensimmäisen ja toisen merkkijonon
  return firstNameInitial + lastNameInitial;
}

// Esimerkki - älä muokkaa
console.log(concatInitials('J', 'D')); // "JD"
console.log(concatInitials('S', 'B')); // "SB"



// Treenaa: Keksi itse samanlainen funktio eri nimellä

function concatInitials(firstNameInitial, lastNameInitial) {
    return firstNameInitial + lastNameInitial;
}

// Kutsu tekemääsi funktiota

console.log(concatInitials('Amon', 'Burzum')); // AB
console.log(concatInitials('Bathory', 'Autopsy')); // BA
