/** Tehtävä: Ostoskori
 * Kuvitellaan, että olet kehittämässä yksinkertaista verkkokauppasovellusta. Sinun tehtäväsi on luoda ohjelma, joka laskee ostoskorissa olevien tuotteiden yhteishinnan ja tulostaa sen.
 * - Määrittele muuttujat kullekin ostoskorissa oleville tuotteille ja niiden hinnoille.
 * - Laske tuotteiden yhteishinta ja tallenna se muuttujaan, esimerkiksi yhteishinta.
 * - Tulosta yhteishinta konsoliin.
 */

// Määritellään tuotteet ja niiden hinnat
let tuote1Hinta = 15.99; // Esimerkki tuotteen hinta
let tuote2Hinta = 45.50;
let tuote3Hinta = 23.75;

// Laske yhteishinta
let yhteishinta = tuote1Hinta + tuote2Hinta + tuote3Hinta;

// Tulosta yhteishinta konsoliin
console.log('Ostoskorin yhteishinta on:', yhteishinta, 'euroa.');
