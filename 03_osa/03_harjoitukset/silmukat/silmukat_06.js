/* Kehitä ohjelma, joka aluksi kysyy käyttäjältä yhtä numeroa. Tämän jälkeen ohjelma kysyy, haluaako käyttäjä 
jatkaa numeroiden antamista seuraavalla kysymyksellä: 'Haluatko jatkaa numeroiden antamista? (k/e)'. 
Jos käyttäjä vastaa 'k', ohjelma pyytää toista numeroa. Jos vastaus on 'e', ohjelma lopettaa. 
Lopetettuaan ohjelma laskee ja näyttää kaikkien syötettyjen numeroiden keskiarvon.*/

let summa = 0;
let laskuri = 0;
let jatka = 'k';

while (jatka === 'k') {
    let syote = Number(prompt("Syötä numero:"));
    summa += syote;
    laskuri++;
    jatka = prompt("Haluatko jatkaa numeroiden antamista? (k/e)");
}

if (laskuri > 0) {
    let keskiarvo = summa / laskuri;
    console.log(`Syötettyjen numeroiden keskiarvo on ${keskiarvo}`);
} else {
    console.log("Yhtään numeroa ei syötetty.");
}
