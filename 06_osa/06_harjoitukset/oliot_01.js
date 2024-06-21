// Tehtävä 1: Olion luominen ja tulostaminen
/*
Luo olio nimeltään `henkilö` ominaisuuksilla: `nimi` asetettuna "Aleksi" ja `ikä` asetettuna 30.
Tulosta tämä olio konsoliin.
*/

const henkilö = {
  nimi: "Aleksi",
  ikä: 30,
};
console.log(henkilö);

// Tehtävä 2: Olio-ominaisuuksien käyttäminen
/*
Käytä ja kirjaa `nimi` ja `ikä` henkilö-oliosta.
*/

const nimi = henkilö.nimi;
const ikä = henkilö.ikä;

console.log('Nimi:', nimi);
console.log('Ikä:', ikä);


// Tehtävä 3: Olion ominaisuuksien muokkaaminen
/*
Päivitä `henkilö`-olio: aseta `ikä` arvoon 31. Lisää sitten uusi ominaisuus `maa` asetettuna "Kroatia".
Kirjaa päivitetty olio.
*/

henkilö.ikä = 31;
henkilö.maa = 'Kroatia';
console.log(henkilö);


// Tehtävä 4: Sisäkkäiset oliot
/*
Luo olio `opiskelija` ominaisuuksilla: `nimi` arvolla "Emilia" ja `tiedot` oliona, jossa ominaisuudet `ikä` asetettuna 22 ja `kurssi` asetettuna "JavaScript".
Kirjaa `opiskelijan` `kurssi`.
Odotettu tulos: "Kurssi: JavaScript"
*/

const opiskelija = {
    nimi: 'Emilia',
  
    tiedot: {
        ikä: 22,
        kurssi: 'JavaScript'
    }
};
console.log('Kurssi:', opiskelija.tiedot.kurssi);



// Tehtävä 5: Ominaisuuksien poistaminen
/*
Poista `henkilö`-oliosta ominaisuus `ikä`. Kirjaa saatu olio.
Odotettu tulos: { nimi: "Aleksi", maa: "Kroatia" }
*/


delete henkilö.ikä;
console.log(henkilö);


// Tehtävä 6: Olion avaimet ja arvot
/*
Kirjaa kaikki ominaisuuden nimet (avaimet) `henkilö`-oliosta, sitten kirjaa kaikki ominaisuuden arvot.
Odotetut tulokset:
Avaimet: nimi, maa
Arvot: Aleksi, Kroatia
*/

// Oletetaan, että henkilö-olio on jo määritelty aiemmassa koodissa


const avaimet = Object.keys(henkilö);
const arvot = Object.values(henkilö);
console.log('Avaimet:', avaimet.join(', '));
console.log('Arvot:', arvot.join(', '));


// Tehtävä 7: Olion metodien käyttäminen
/*
Määritä metodi `tervehdi` sisälle `henkilö`-olioon, joka palauttaa "Hei, nimeni on Aleksi".
Kutsu tätä metodia ja kirjaa tulos.
Odotettu tulos: "Hei, nimeni on Aleksi"
*/

henkilö.tervehdi = function() {
  
    return `Hei, nimeni on ${this.nimi}`;
};
console.log(henkilö.tervehdi());

