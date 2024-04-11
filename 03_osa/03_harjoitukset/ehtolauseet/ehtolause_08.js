/**
Kirjoita funktio nimeltä pluralize, joka:

Hyväksyy kaksi argumenttia: substantiivin ja numeron.
Palauttaa merkkijonon, joka yhdistää numeron ja sopivasti taipuvan muodon substantiivista, kuten '5 kissaa' tai '1 koira'.

 */

function pluralize(substantiivi, määrä) {
    if (määrä <= 1) {
        return määrä + ''+ substantiivi;
    } else {
        return määrä + '' +substantiivi + 'a';
    }

}

// Esimerkkikäyttö - älä muokkaa
console.log('Minulla on ' + pluralize('kala', 0));
console.log('Minulla on ' + pluralize('koira', 1));
console.log('Minulla on ' + pluralize('papukaija', 7));


// Treenaa: Keksi itse samanlainen funktio eri nimellä.

function pluralizeNoun(noun, quantity) {
    // Tarkistetaan, onko määrä yksi
    if (quantity === 1) {
        return quantity + ' ' + noun; // Yksikkömuoto
    } else {
        // Lisää 's' muodostaaksesi monikkomuodon
        return quantity + ' ' + noun + 's'; // Monikkomuoto
    }
}


// Kutsu tekemääsi funktiota

console.log('I have ' + pluralizeNoun('fish', 0));       // Minulla on 0 fishs
console.log('I have ' + pluralizeNoun('dog', 1));        // Minulla on 1 dog
console.log('I have ' + pluralizeNoun('parrot', 7));     // Minulla on 7 parrots

