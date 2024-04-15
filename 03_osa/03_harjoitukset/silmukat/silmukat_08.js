// Tee ohjelma, joka kysyy aluksi käyttäjältä, kuinka monta numeroa he haluavat syöttää. 
//Saatuaan tämän tiedon ohjelman tulisi pyytää käyttäjää syöttämään jokainen näistä numeroista. 
//Kun kaikki numerot on syötetty, ohjelman tulisi selvittää ja näyttää käyttäjän antamista numeroista pienin ja suurin.

// Globaaleja muuttujia, joita käytetään eri funktioissa
let numeroidenMaara;
let numerot = [];

// Pyytää käyttäjältä numeroiden määrän ja alustaa numeroiden syöttämisen
function pyydaMaara() {
    // Haetaan ja muunnetaan käyttäjän syöttämä numeroiden määrä kokonaisluvuksi
    numeroidenMaara = document.getElementById('numeroidenMaara').value;
    numeroidenMaara = parseInt(numeroidenMaara, 10);
    // Tarkistetaan, onko syötetty määrä kelvollinen (ei NaN ja vähintään 1)
    if (isNaN(numeroidenMaara) || numeroidenMaara < 1) {
        document.getElementById('tulokset').innerHTML = "<p>Syötä kelvollinen määrä (vähintään 1).</p>";
        return;
    }
    numerot = [];
    // Kutsutaan funktiota, joka näyttää syötekentät numeroiden syöttämiseksi
    naytaNumeroSyote();
}

// Luo dynaamisesti syötekentät numeroiden syöttämistä varten
function naytaNumeroSyote() {
    let html = '<h3>Syötä numerot</h3>';
    // Lisätään syötekentät määritetyn määrän verran
    for (let i = 0; i < numeroidenMaara; i++) {
        html += `<input type="number" id="numero${i}"><br>`;
    }
    // Lisätään nappi, joka tallentaa syötetyt numerot ja näyttää tulokset
    html += '<button onclick="tallennaNumerotJaNaytaTulokset()">Valmis</button>';
    document.getElementById('numeroSyote').innerHTML = html;
}

// Tallentaa syötetyt numerot ja näyttää tulokset
function tallennaNumerotJaNaytaTulokset() {
    numerot = [];
    // Käydään läpi kaikki syötekentät ja tallennetaan arvot numerot-taulukkoon
    for (let i = 0; i < numeroidenMaara; i++) {
        const num = parseInt(document.getElementById(`numero${i}`).value, 10);
        if (!isNaN(num)) {
            numerot.push(num);
        }
    }
    // Tarkistetaan, että kaikki kentät on täytetty oikein
    if (numerot.length !== numeroidenMaara) {
        document.getElementById('tulokset').innerHTML = "<p>Varmista, että kaikki kentät on täytetty oikein.</p>";
        return;
    }
    // Näytetään lopulliset tulokset: pienin ja suurin numero
    naytaTulokset();
}

// Näyttää pienimmän ja suurimman numeron
function naytaTulokset() {
    const pienin = Math.min(...numerot); // Etsitään pienin numero taulukosta
    const suurin = Math.max(...numerot); // Etsitään suurin numero taulukosta
    // Tulostetaan tulokset HTML-sivulle
    document.getElementById('tulokset').innerHTML = `<p>Pienin numero: ${pienin}</p><p>Suurin numero: ${suurin}</p>`;
}
