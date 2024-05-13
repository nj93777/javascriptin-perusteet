// Harjoitus 1: Määritä taulukon pituus ja ehto tarkistus
let myAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
/*
Luo funktio nimeltä myAlphabetLength, joka kirjaa taulukon pituuden.
Sisällytä myös if-lauseke tarkistaaksesi, onko taulukon pituus alle 5.
Odotettu tulos: 
"Taulukon myAlphabet pituus: 7"
"Taulukon pituus on suurempi tai yhtä suuri kuin 5."
*/
// Kirjoita funktiosi tähän

// Määritellään taulukko myAlphabet

// Funktio, joka kirjaa myAlphabet-taulukon pituuden ja tarkistaa sen suuruuden

function myAlphabetLength() {
    // Kirjataan taulukon pituus
    console.log(`Taulukon myAlphabet pituus: ${myAlphabet.length}`);

    // Tarkistetaan, onko taulukon pituus alle 5
    if (myAlphabet.length < 5) {
        console.log("Taulukon pituus on alle 5.");
    } else {
        console.log("Taulukon pituus on suurempi tai yhtä suuri kuin 5.");
    }
}
// Kutsutaan funktiota nähdäksemme tulosteen
myAlphabetLength();


// Harjoitus 2: Käy läpi taulukko ja kirjaa jokainen alkio sen indeksillä
const planets = ['Merkurius', 'Venus', 'Maa', 'Mars', 'Jupiter', 'Pluto'];
/*
Kirjaa jokainen planeetta taulukossa yhdessä sen indeksin kanssa.
Odotetut tulokset:
"Planeetta: Merkurius, Indeksi: 0"
...
"Planeetta: Jupiter, Indeksi: 4"
*/
// Kirjoita koodisi tähän

// Määritellään vakio 'planets', joka sisältää planeettojen nimet

// Käydään läpi 'planets'-taulukko forEach-metodilla
planets.forEach((planet, index) => {
    // Kirjataan jokainen planeetta ja sen indeksi
    console.log(`Planeetta: ${planet}, Indeksi: ${index}`);
});



// Harjoitus 3: Kirjaa taulukon alkiot niiden tyyppeineen
const wowDatatypes = [1, 'text', false, null, undefined];
/*
Käy läpi taulukko, kirjaten jokaisen alkion, sen indeksin ja datatyypin.
Odotetut tulokset:
"Alkio: 1, Indeksi: 0, Tyyppi: number"
"Alkio: text, Indeksi: 1, Tyyppi: string"
...
"Alkio: undefined, Indeksi: 4, Tyyppi: undefined"
*/
// Kirjoita koodisi tähän

for (let i = 0; i < wowDatatypes.length; i++) {
    const element = wowDatatypes[i];
    const type = typeof element;
    console.log(`Alkio: ${element}, Indeksi: ${i}, Tyyppi: ${type}`);
}


// Harjoitus 4: Kirjaa taulukon alkiot ilman silmukkaa
let myArr = [1, 2, 'One', true];
/*
Kirjaa jokainen alkio tässä taulukossa metodin avulla eli ilman silmukkaa.
Odotetut tulokset: 1, 2, "One", true
*/
// Kirjoita koodisi tähän

myArr.forEach(element => console.log(element));


// Harjoitus 5: Etsi yhteiset kurssit kahden opiskelijan välillä
let student1Courses = ['Matematiikka', 'Englanti', 'Ohjelmointi', 'Historia'];
let student2Courses = ['Maantieto', 'Espanja', 'Ohjelmointi', 'Historia'];
/*
Tunnista ja kirjaa ylös kaikki kurssit, jotka ovat yhteisiä sekä student1Courses- että student2Courses-taulukossa.
Odotettu tulos: "Yhteinen kurssi: Ohjelmointi"
*/


// Etsitään yhteiset kurssit
let commonCourses = student1Courses.filter(course => student2Courses.includes(course));

// Tulostetaan yhteiset kurssit
commonCourses.forEach(course => console.log("Yhteinen kurssi: " + course));



// Harjoitus 6: Kirjaa jokainen taulukon alkion kirjain
let furniture = ['Pöytä', 'Tuolit', 'Matto'];
/*
Kirjaa ylös jokainen kirjain furniture-taulukon jokaisesta alkioista.
Odotetut tulokset:
"Kirjaimet 'Pöytä'-sanassa: P, ö, y, t, ä"
...
"Kirjaimet 'Matto'-sanassa: M, a, t, t, o"
*/


// Assuming 'furniture' array is already declared somewhere in your script
furniture.forEach(item => {
    // Splitting the item into an array of characters
    let characters = item.split('');
    // Joining the characters array into a string separated by commas
    let characterString = characters.join(', ');
    // Logging the result in the specified format
    console.log(`Kirjaimet '${item}'-sanassa: ${characterString}`);
});





// Harjoitus 7: Suodata positiiviset lämpötilat
let temperatures = [-5, 3, -1, 22, -40, 5, 18];
/*
Kirjoita getPositiveTemperatures-funktio siten, että se palauttaa taulukon, joka sisältää positiiviset lämpötilat (lämpötilat, jotka ovat yli 0).
Odotettu tulos: [3, 22, 5, 18]
*/


function getPositiveTemperatures(tempArray) {
   
    return tempArray.filter(temp => temp > 0);
}

let positiveTemperatures = getPositiveTemperatures(temperatures);


console.log(positiveTemperatures);  // Expected output: [3, 22, 5, 18]



// Harjoitus 8: Suodata parittomat vuodet
/*
Täydennä getOddYears-funktio siten, että se palauttaa kaikki vuodet, jotka ovat parittomia saamistaan vuosiparametreista. 
Vuodet annetaan taulukkona.
Odotetut tulokset:

getOddYears([2019, 2020, 2021]) -> [2019, 2021]
getOddYears([2000, 2015, 2018, 2020]) -> [2015]
*/

function getOddYears(yearsArray) {
    // Filtering out odd years
    return yearsArray.filter(year => year % 2 !== 0);
}

// Testaus - Poista alta kommenttimerkinnät, niin voit testata funktion toimintaa
console.log(getOddYears([2019, 2020, 2021])); // [2019, 2021]
 console.log(getOddYears([2000, 2015, 2018, 2020])); // [2015]