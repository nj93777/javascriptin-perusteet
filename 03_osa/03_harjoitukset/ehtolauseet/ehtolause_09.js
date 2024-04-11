/**Luo Magic 8-Ball -ohjelma, joka matkii klassista kohtalon ennustamisen lelua. Käyttäjä syöttää kyllä-tai-ei -kysymyksen, ja ohjelma
 * antaa satunnaisen vastauksen 8-pallosta. Toteuta ohjelma käyttämällä ehtolauseita valitsemaan ja näyttämään yksi useista ennalta määritellyistä vastauksista. */ 

function magic8Ball() {
    // Ennalta määritellyt vastaukset
    const vastaukset = [
        'Antaa mennä!',
        'Näyttää hyvältä.',
        'Näin asia on.',
        'Kyllä, täysin varmasti.',
        'Voit luottaa siihen.',
        'Voitko selventää.',
        'En täysin ymmärrä.',
        'En voi ottaa kantaa.',
        'Älä luota siihen.',
        'Se on erittäin epätodennäköistä.'
    ];

    // Valitse satunnainen vastaus
    const satunnainenIndeksi = Math.floor(Math.random() * vastaukset.length);
    return vastaukset[satunnainenIndeksi];
}

// Esimerkkikäyttö
console.log('Magic 8-Ball sanoo: ' + magic8Ball()); // Näyttää satunnaisen vastauksen
