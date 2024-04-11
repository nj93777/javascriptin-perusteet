/**
Kehitä funktio nimeltä assignGrade, joka:

Hyväksyy yhden argumentin, numeerisen pistemäärän.
Palauttaa kirjainarvosanan pistemäärän perusteella seuraavasti:
- 'A' pistemäärille 90 tai enemmän.
- 'B' pistemäärille 80-89.
- 'C' pistemäärille 70-79.
- 'D' pistemäärille 60-69.
- 'F' pistemäärille alle 60.

*/

function assignGrade(score) {
    if (score >= 90){
        return 'A';
    } else if (score >= 80){
    return 'B';    
    } else if (score >= 70){
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

// Esimerkkikäyttö - älä muokkaa
console.log('Sinä sait ' + assignGrade(95)); // Sinä sait A
console.log('Sinä sait ' + assignGrade(81)); // Sinä sait B
console.log('Sinä sait ' + assignGrade(72)); // Sinä sait C
console.log('Sinä sait ' + assignGrade(64)); // Sinä sait D
console.log('Sinä sait ' + assignGrade(42)); // Sinä sait F



// Treenaa: Keksi itse samanlainen funktio eri nimellä. Pisterajoja voi olla vähemmän kuin yllä.

/**Palauttaa kommentin pistemäärän perusteella
- 'Olet ässä!' pistemäärille 90 tai enemmän.
- 'Tosi hyvä!' pistemäärille 70-89.
- 'Paremmin voisi mennä' pistemäärille 49-69. 
- 'Yritä uudelleen'
*/



function assignComments(score) {
    if (score >= 90) {
        return 'Olet ässä!';
    } else if (score >= 70) {
        return 'Tosi hyvä!';
    } else if (score >= 49) {
        return 'Paremmin voisi mennä';
    } else {
        return 'Yritä uudelleen';
    }
}

// Kutsu tekemääsi funktiota
console.log('Arvio: ' + assignComments(95)); // Arvio: Olet ässä!
console.log('Arvio: ' + assignComments(81)); // Arvio: Tosi hyvä!
console.log('Arvio: ' + assignComments(69)); // Arvio: Paremmin voisi mennä
console.log('Arvio: ' + assignComments(48)); // Arvio: Yritä uudelleen