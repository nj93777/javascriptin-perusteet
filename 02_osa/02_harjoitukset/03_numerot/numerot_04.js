/** - Luo muuttuja, jolle annat haluamasi arvon ja seuraavalla rivillä vähennät nykyisestä arvosta kaksi. 
 * - Luo muuttuja, jolle annat haluamasi arvon ja seuraavalla rivillä kerrot nykyisen arvon viidellä.
 */

// Muuttujan määrittely ja vähennys
let var1 = 10;  // Alkuperäinen arvo asetettu
var1 -= 2;      // Vähennetään 2 nykyisestä var1:n arvosta

// Muuttujan määrittely ja kertolasku
let var2 = 10;  // Alkuperäinen arvo asetettu
var2 *= 5;      // Kerrotaan nykyinen var2:n arvo viidellä

// Tulosten tulostaminen konsoliin tarkastusta varten
console.log("var1 arvo vähennyksen jälkeen:", var1);  // Tulisi olla 8
console.log("var2 arvo kertolaskun jälkeen:", var2); // Tulisi olla 50
