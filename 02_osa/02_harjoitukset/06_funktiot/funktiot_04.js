/** Harjoitus: Kolmion pinta-ala
 * Tee funktio nimeltä laskeKolmionPintaala, joka ottaa kaksi parametria: kannanPituus ja korkeus.
 * Funktio laskee annetun kolmion pinta-alan kaavalla kannanPituus * korkeus / 2  ja palauttaa sen.
 * Testaa funktiota antamalla sille eri sivun pituuksia ja tulosta pinta-alat konsoliin. 
 * Voit käyttää joko nuolifunktiota tai tavallista funktiota*/


// Tavallinen funktio laskee kolmion pinta-alan
function laskeKolmionPintaala(kannanPituus, korkeus) {
    return (kannanPituus * korkeus) / 2;
  }
  
  // Testataan funktiota eri arvoilla
  console.log(laskeKolmionPintaala(10, 5)); // Esimerkki 1: Kannan pituus 10, korkeus 5
  console.log(laskeKolmionPintaala(6, 3));  // Esimerkki 2: Kannan pituus 6, korkeus 3
  
  