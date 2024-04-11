/** Harjoitus: Neliön pinta-ala
 * Tee funktio nimeltä laskeNelionPintaala, joka ottaa yhden parametrin: sivunPituus.
 * Funktio laskee annetun neliön pinta-alan kaavalla sivunPituus * sivunPituus ja palauttaa sen.
 * Testaa funktiota antamalla sille eri sivun pituuksia ja tulosta pinta-alat konsoliin. 
 * Voit käyttää joko nuolifunktiota tai tavallista funktiota*/

// Tavallinen funktio laskee neliön pinta-alan

function laskeNelionPintaala(sivunPituus) {
    return sivunPituus * sivunPituus;
  }
  
  // Testataan funktiota eri sivun pituuksilla
  
  console.log(laskeNelionPintaala(5)); // Esimerkki 1: Sivun pituus 5
  console.log(laskeNelionPintaala(10)); // Esimerkki 2: Sivun pituus 10
  