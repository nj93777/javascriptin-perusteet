/*
- Luo muuttuja nimeltä 'num1' ja anna sille liukulukuarvo.
- Luo muuttuja nimeltä 'num2' ja anna sille eri liukulukuarvo.

- Pyöristä sekä 'num1' että 'num2' lähimpään kokonaislukuun ja tallenna tulokset muuttujiin 'roundedNum1' ja 'roundedNum2'.
- Laske neliöjuuri 'roundedNum1':stä ja tallenna se muuttujaan nimeltä 'sqrtNum1'.
- Etsi suurempi numero 'roundedNum1':n ja 'roundedNum2':n välillä ja tallenna se muuttujaan nimeltä 'maxNum'.

- Käytä console.log() -funktiota tulostamaan 'roundedNum1', 'roundedNum2', 'sqrtNum1' ja 'maxNum' konsoliin.
- Käytä typeof operaattoria tarkistaaksesi jokaisen uuden muuttujan tietotyypin ja tulosta tulos käyttäen console.log().
*/

// Vaihe 1: Liukulukumuuttujien luominen
let num1 = 6.6;  // Annetaan num1:lle liukulukuarvo
let num2 = 8.3;  // Annetaan num2:lle toinen liukulukuarvo, eri kuin num1

// Vaihe 2: Numeroiden pyöristäminen
let roundedNum1 = Math.round(num1);  // Pyöristetään num1 lähimpään kokonaislukuun
let roundedNum2 = Math.round(num2);  // Pyöristetään num2 lähimpään kokonaislukuun

// Vaihe 3: Neliöjuuren laskeminen
let sqrtNum1 = Math.sqrt(roundedNum1);  // Lasketaan neliöjuuri roundedNum1:stä

// Vaihe 4: Suurimman numeron etsiminen
let maxNum = Math.max(roundedNum1, roundedNum2);  // Etsitään suurempi numero roundedNum1:n ja roundedNum2:n välillä

// Vaihe 5: Tulosten tulostaminen konsoliin
console.log("roundedNum1:", roundedNum1);  // Tulostetaan roundedNum1
console.log("roundedNum2:", roundedNum2);  // Tulostetaan roundedNum2
console.log("sqrtNum1:", sqrtNum1);        // Tulostetaan sqrtNum1
console.log("maxNum:", maxNum);            // Tulostetaan maxNum

// Vaihe 6: Tietotyyppien tarkistus ja tulostus
console.log("Tyyppi roundedNum1:", typeof roundedNum1);  // Tarkistetaan ja tulostetaan roundedNum1:n tietotyyppi
console.log("Tyyppi roundedNum2:", typeof roundedNum2);  // Tarkistetaan ja tulostetaan roundedNum2:n tietotyyppi
console.log("Tyyppi sqrtNum1:", typeof sqrtNum1);        // Tarkistetaan ja tulostetaan sqrtNum1:n tietotyyppi
console.log("Tyyppi maxNum:", typeof maxNum);            // Tarkistetaan ja tulostetaan maxNum:n tietotyyppi
