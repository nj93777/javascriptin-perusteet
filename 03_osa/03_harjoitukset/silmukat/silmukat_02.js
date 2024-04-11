//Tee ohjelma, joka tulostaa kaikki parilliset kokonaisluvut 1 ja 99 välillä, esittäen ne seuraavalla tavalla
//2, 98, 4, 96, 6, 94 ja niin edelleen. Tulosta luvut samalle riville. 

let kasvava = 2, vähenevä = 98;

while (kasvava <= vähenevä) {
    // Tulosta kasvava luku ja vähenevä luku
    if (kasvava != 2) {
        process.stdout.write(", ");
    }
    process.stdout.write(kasvava + ", " + vähenevä);

    // Päivitä luvut seuraavaa iteraatiota varten
    kasvava += 2;
    vähenevä -= 2;
}
