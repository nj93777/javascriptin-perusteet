/* Tehtävä 1
Luo JavaScript-taulukko nimeltä `kirjasto`, joka edustaa kirjojen kokoelmaa.
Jokaisella kirjalla tulisi olla ominaisuudet `otsikko`, `kirjailija` ja `julkaisuvuosi`.
Lisää ainakin kaksi kirja-oliota tähän kokoelmaan.
*/

const kirjasto = [
    {
        otsikko: "Tuntematon Sotilas",
        kirjailija: "Väinö Linna",
        julkaisuvuosi: 1954
    },
    {
        otsikko: "Sinuhe egyptiläinen",
        kirjailija: "Mika Waltari",
        julkaisuvuosi: 1945
    }
];

console.log(kirjasto);

/* Tehtävä 2
Käytä `kirjaston` ensimmäisen kirjan `otsikko`-ominaisuutta ja tulosta se konsoliin.
Muuta toisen kirjan `julkaisuvuotta` uuteen vuoteen kokoelmassa ja kirjaa päivitetty kirja-olio konsoliin.
*/

console.log(kirjasto[0].otsikko);

kirjasto[1].julkaisuvuosi = 1950;

console.log(kirjasto[1]);

/* Tehtävä 3
Käytä pistenotaatiota lisätäksesi uuden ominaisuuden `lajityypit` (merkkijonotaulukko) ensimmäiseen kirjaan `kirjasto`-taulukossa.
Käytä hakasulkunotaatiota lisätäksesi boolean-ominaisuuden `onSaatavilla` samaan kirjaan, ilmaisten sen saatavuuden.
*/
kirjasto[0].lajityypit = ["Sota", "Historiallinen romaani"];
kirjasto[0]['onSaatavilla'] = true;

console.log(kirjasto[0]);

/* Tehtävä 4
Määritä konstruktorifunktio nimeltä `Kirja`, joka voi luoda uusia kirja-olioita ominaisuuksilla `otsikko`, `kirjailija`, `julkaisuvuosi` ja `lajityypit`.
Käyttäen `Kirja`-konstruktoria, luo uusi kirja-olio annetuilla syöttöarvoilla ja lisää se `kirjasto`-kokoelmaan.
*/

function Kirja(otsikko, kirjailija, julkaisuvuosi, lajityypit) {
    this.otsikko = otsikko;
    this.kirjailija = kirjailija;
    this.julkaisuvuosi = julkaisuvuosi;
    this.lajityypit = lajityypit;
}

let uusiKirja = new Kirja("Mestaritontun seikkailut", "Aino Kallas", 1919, ["Satu", "Seikkailu"]);

kirjasto.push(uusiKirja);

console.log(kirjasto);

/* Tehtävä 5
Kirjoita funktio nimeltä `luoKirja`, joka ottaa parametrit `otsikko`, `kirjailija`, `julkaisuvuosi` ja `lajityypit` (taulukko).
Funktion tulisi palauttaa uusi kirja-olio näillä ominaisuuksilla.
Testaa `luoKirja`-funktiota luomalla uusi kirja-olio käyttäjän antamilla syötteillä ja kirjaa uusi kirja-olio konsoliin.
*/

function luoKirja(otsikko, kirjailija, julkaisuvuosi, lajityypit) {
    return {
        otsikko: otsikko,
        kirjailija: kirjailija,
        julkaisuvuosi: julkaisuvuosi,
        lajityypit: lajityypit
    };
}

uusiKirja = luoKirja("Seitsemän veljestä", "Aleksis Kivi", 1870, ["Klassikko", "Romaani"]);

console.log(uusiKirja);




/* Tehtävä 6
Muunna `kirjasto`-kokoelma JSON-merkkijonoksi ja kirjaa se konsoliin.
Tee JSON-merkkijonosta JavaScript-olio ja kirjaa ensimmäisen kirjan otsikko konsoliin.
*/
const kirjastoJSON = JSON.stringify(kirjasto);

console.log(kirjastoJSON);

const kirjastoOlio = JSON.parse(kirjastoJSON);

console.log(kirjastoOlio[0].otsikko);
