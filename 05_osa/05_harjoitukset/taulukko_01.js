// Alkuperäinen joukko tiimin jäseniä
let teamMembers = ['Jukka', 'Emilia', 'Miikka', 'Saara'];

// Harjoitus 1: Käy läpi `teamMembers` ja kirjaa jokainen nimi konsoliin.
// Kirjoita koodisi tähän:
teamMembers.forEach(member => {
    console.log(member);
});


// Harjoitus 2: Poista ensimmäinen jäsen taulukosta.
// Kirjoita koodisi tähän:
teamMembers.shift();
console.log(teamMembers);


// Harjoitus 3: Poista taulukon viimeinen jäsen.
// Kirjoita koodisi tähän:
teamMembers.pop();
console.log(teamMembers);

// Harjoitus 4: Lisää uusi jäsen "Aleksi" taulukon alkuun.
// Kirjoita koodisi tähän:
teamMembers.unshift("Aleksi");
console.log(teamMembers);

// Harjoitus 5: Lisää uusi jäsen "Linda" taulukon loppuun.
// Kirjoita koodisi tähän:
teamMembers.push("Linda");
console.log(teamMembers);

// Harjoitus 6: Luo uusi taulukko, joka ei sisällä kahta ensimmäistä jäsentä.
// Kirjoita koodisi tähän:
let newTeamMembers = teamMembers.slice(2);
console.log(newTeamMembers);

// Harjoitus 7: Etsi "Miikka" indeksi taulukossa.
// Kirjoita koodisi tähän:
const index = teamMembers.indexOf('Miikka');
console.log(index);

// Harjoitus 8: Yritä löytää "Jaakko" indeksi (joka ei ole taulukossa).
// Kirjoita koodisi tähän:
const indexJaakko = teamMembers.indexOf('Jaakko');
console.log(indexJaakko);

// Harjoitus 9: Käytä `splice` poistaaksesi "Miikka" ja lisätäksesi "Karoliina" ja "Bettina" hänen tilalleen.
// Kirjoita koodisi tähän:
const miikkaIndex = teamMembers.indexOf('Miikka');  
if (miikkaIndex !== -1) {
    teamMembers.splice(miikkaIndex, 1, 'Karoliina', 'Bettina');
}
console.log(teamMembers);

// Harjoitus 10: Liitä uusi jäsen "Hemmo" taulukon loppuun ja luo uusi taulukko.
// Kirjoita koodisi tähän:
teamMembers.push('Hemmo');  // Add 'Hemmo' to the end of the array
console.log(teamMembers);

let updatedTeamMembers = [...teamMembers];
console.log(updatedTeamMembers);

// Harjoitus 11: Käyttäen `slice` kopioidaksesi koko taulukon
// Kirjoita koodisi tähän:
let copiedTeamMembers = teamMembers.slice();
console.log(copiedTeamMembers);

// Harjoitus 12: Yhdistä taulukot käyttäen `concat`
// Oletetaan, että `newMembers`-taulukko on määritelty
let newMembers = ['Tiina', 'Daniel'];
// Kirjoita koodisi tähän:

let combinedTeamMembers = teamMembers.concat(newMembers);
console.log(combinedTeamMembers);

// Harjoitus 13: Etsi kaikki Jukan esiintymät
// Kirjoita koodisi tähän:
let occurrencesOfJukka = combinedTeamMembers.filter(member => member === 'Jukka');
console.log(occurrencesOfJukka);


// Harjoitus 14: Muuta jäsenet `map` avulla kirjoitettavaksi ISOILLA KIRJAIMILLA
// Kirjoita koodisi tähän:
let upperCaseMembers = combinedTeamMembers.map(member => member.toUpperCase());
console.log(upperCaseMembers);


