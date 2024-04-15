//Tee ohjelma, joka kysyy kymmentä numeroa. Ohjelma laskee ja tulostaa summan ja keskiarvon sekä 
//tulostaa pienimmän ja suurimman numeron.


// Funktion määrittely numeroiden pyytämiseksi käyttäjältä
function pyydaNumeroita() {
    let numerot = [];  // Alustetaan tyhjä taulukko numeroille

    // Toistetaan kysely 10 kertaa käyttäen for-silmukkaa
    for (let i = 0; i < 10; i++) {
        // Pyydetään numeroa käyttäjältä ja yritetään muuttaa se numeroksi
        let syote = prompt(`Anna numero ${i + 1}/10:`);
        let numero = Number(syote);
        
        // Tarkistetaan, onko syöte kelvollinen numero
        while (isNaN(numero)) {  // Jos syöte ei ole numero, pyydetään syötettä uudelleen
            syote = prompt(`Virheellinen syöte. Anna kelvollinen kokonaisluku numero ${i + 1}/10:`);
            numero = Number(syote);
        }
        
        // Lisätään kelvollinen numero taulukkoon
        numerot.push(numero);
    }
    // Kutsutaan funktiota numeroiden laskemiseen ja tulosten tulostamiseen
    laskeJaTulostaTulokset(numerot);
}

// Funktion määrittely numeroiden laskemiseksi ja tulosten tulostamiseksi
function laskeJaTulostaTulokset(numerot) {
    const summa = numerot.reduce((acc, num) => acc + num, 0);  // Laskee numeroiden summan
    const keskiarvo = summa / numerot.length;  // Laskee keskiarvon
    const pienin = Math.min(...numerot);  // Etsii pienimmän numeron
    const suurin = Math.max(...numerot);  // Etsii suurimman numeron

    // Haetaan HTML-dokumentista elementti tulosten näyttämistä varten
    const tuloksetElementti = document.getElementById('tulokset');
    // Asetetaan tulokset HTML-elementin sisällöksi
    tuloksetElementti.innerHTML = `
        <p>Summa: ${summa}</p>
        <p>Keskiarvo: ${keskiarvo}</p>
        <p>Pienin numero: ${pienin}</p>
        <p>Suurin numero: ${suurin}</p>
    `;
}
