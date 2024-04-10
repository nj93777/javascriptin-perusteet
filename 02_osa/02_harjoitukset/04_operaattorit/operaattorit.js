/* 
- Luo muuttujat a ja b ja anna niille kokonaislukuarvot.
- Käytä yhteen-, vähennys-, kerto- ja jakolaskuoperaattoreita muuttujille a ja b. Tallenna jokainen tulos erilliseen muuttujaan (summa, erotus, tulo, osamäärä, jakojäännös).

- Käytä console.log() -metodia tulostamaan jokaisen operaation tulos konsoliin.

- Lisää kommentteja koodiin selittämään, mitä kukin operaatio tekee.
*/

// Alustetaan muuttujat a ja b kokonaislukuarvoilla
let a = 5;
let b = 3;

// Suoritetaan aritmeettiset operaatiot ja tallennetaan tulokset omiin muuttujiinsa
let sum = a + b;         // Laskee yhteen a:n ja b:n
let difference = a - b;  // Vähentää b:n a:sta
let product = a * b;     // Kertoo a:n ja b:n keskenään
let quotient = a / b;    // Jakaa a:n b:llä
let remainder = a % b;   // Laskee jakojäännöksen kun a jaetaan b:llä

// Tulostetaan tulokset konsoliin
console.log("Summa:", sum);
console.log("Erotus:", difference);
console.log("Tulo:", product);
console.log("Osamäärä:", quotient);
console.log("Jakojäännös:", remainder);
