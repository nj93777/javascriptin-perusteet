// Tee ohjelma, joka kysyy aluksi käyttäjältä, kuinka monta numeroa he haluavat syöttää. 
//Saatuaan tämän tiedon ohjelman tulisi pyytää käyttäjää syöttämään jokainen näistä numeroista. 
//Kun kaikki numerot on syötetty, ohjelman tulisi selvittää ja näyttää käyttäjän antamista numeroista pienin ja suurin.

let numeroidenMaara;
let numerot = [];

function pyydaMaara() {
    numeroidenMaara = document.getElementById('numeroidenMaara').value;
    numeroidenMaara = parseInt(numeroidenMaara, 10);
    if (isNaN(numeroidenMaara) || numeroidenMaara < 1) {
        document.getElementById('tulokset').innerHTML = "<p>Syötä kelvollinen määrä (vähintään 1).</p>";
        return;
    }
    numerot = [];
    naytaNumeroSyote();
}

function naytaNumeroSyote() {
    let html = '<h3>Syötä numerot</h3>';
    for (let i = 0; i < numeroidenMaara; i++) {
        html += `<input type="number" id="numero${i}"><br>`;
    }
    html += '<button onclick="tallennaNumerotJaNaytaTulokset()">Valmis</button>';
    document.getElementById('numeroSyote').innerHTML = html;
}

function tallennaNumerotJaNaytaTulokset() {
    numerot = [];
    for (let i = 0; i < numeroidenMaara; i++) {
        const num = parseInt(document.getElementById(`numero${i}`).value, 10);
        if (!isNaN(num)) {
            numerot.push(num);
        }
    }
    if (numerot.length !== numeroidenMaara) {
        document.getElementById('tulokset').innerHTML = "<p>Varmista, että kaikki kentät on täytetty oikein.</p>";
        return;
    }
    naytaTulokset();
}

function naytaTulokset() {
    const pienin = Math.min(...numerot);
    const suurin = Math.max(...numerot);
    document.getElementById('tulokset').innerHTML = `<p>Pienin numero: ${pienin}</p><p>Suurin numero: ${suurin}</p>`;
}
