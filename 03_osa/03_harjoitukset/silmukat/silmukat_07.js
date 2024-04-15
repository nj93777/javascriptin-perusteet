//Tee ohjelma, joka kysyy kymmentä numeroa. Ohjelma laskee ja tulostaa summan ja keskiarvon sekä 
//tulostaa pienimmän ja suurimman numeron.


function pyydaNumeroita() {
    let numerot = [];
    for (let i = 0; i < 10; i++) {
        let syote = prompt(`Anna numero ${i + 1}/10:`);
        let numero = Number(syote);
        while (isNaN(numero)) {
            syote = prompt(`Virheellinen syöte. Anna kelvollinen kokonaisluku numero ${i + 1}/10:`);
            numero = Number(syote);
        }
        numerot.push(numero);
    }
    laskeJaTulostaTulokset(numerot);
}

function laskeJaTulostaTulokset(numerot) {
    const summa = numerot.reduce((acc, num) => acc + num, 0);
    const keskiarvo = summa / numerot.length;
    const pienin = Math.min(...numerot);
    const suurin = Math.max(...numerot);

    const tuloksetElementti = document.getElementById('tulokset');
    tuloksetElementti.innerHTML = `
        <p>Summa: ${summa}</p>
        <p>Keskiarvo: ${keskiarvo}</p>
        <p>Pienin numero: ${pienin}</p>
        <p>Suurin numero: ${suurin}</p>
    `;
}
