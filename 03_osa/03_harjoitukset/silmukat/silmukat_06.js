/* Kehitä ohjelma, joka aluksi kysyy käyttäjältä yhtä numeroa. Tämän jälkeen ohjelma kysyy, haluaako käyttäjä 
jatkaa numeroiden antamista seuraavalla kysymyksellä: 'Haluatko jatkaa numeroiden antamista? (k/e)'. 
Jos käyttäjä vastaa 'k', ohjelma pyytää toista numeroa. Jos vastaus on 'e', ohjelma lopettaa. 
Lopetettuaan ohjelma laskee ja näyttää kaikkien syötettyjen numeroiden keskiarvon.*/

// Alustetaan muuttuja summan laskemista varten
let summa = 0;
// Alustetaan laskuri, joka pitää kirjaa syötettyjen numeroiden määrästä
let laskuri = 0;
// Alustetaan muuttuja, jolla kontrolloidaan silmukan toistoa
let jatka = 'k';

// Suoritetaan silmukka niin kauan kuin käyttäjä haluaa jatkaa numeroiden antamista
while (jatka === 'k') {
    // Pyydetään käyttäjältä numero, muutetaan se numerotyypiksi ja lisätään summaan
    let syote = Number(prompt("Syötä numero:"));
    summa += syote;
    laskuri++;
    // Kysytään käyttäjältä, haluaako hän jatkaa numeroiden syöttämistä
    jatka = prompt("Haluatko jatkaa numeroiden antamista? (k/e)");
}

// Tarkistetaan, onko syötetty yhtään numeroa
if (laskuri > 0) {
    // Jos numeroita on syötetty, lasketaan keskiarvo
    let keskiarvo = summa / laskuri;
    // Tulostetaan keskiarvo konsoliin
    console.log(`Syötettyjen numeroiden keskiarvo on ${keskiarvo}`);
} else {
    // Jos yhtään numeroa ei ole syötetty, ilmoitetaan siitä käyttäjälle
    console.log("Yhtään numeroa ei syötetty.");
}

