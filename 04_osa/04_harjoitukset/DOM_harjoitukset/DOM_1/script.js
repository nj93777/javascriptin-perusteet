/* 
Kirjoita JavaScript-koodi, joka valitsee sisällön tunnuksen käyttämällä getElementById-metodia.
Kirjoita funktio, joka päivittää valitun elementin tekstisisällön painamalla nappia tekstiksi "Hei, maailma!".
*/


// Funktion määrittely, joka päivittää elementin tekstisisällön
function updateContent() {
    // Hae elementti sen ID:n perusteella
    var element = document.getElementById("targetElement");

    // Aseta uusi tekstisisältö
    element.textContent = "Hei, maailma!";
}

// Voit lisätä kuuntelijan napille suoraan tässä, jos nappi on jo HTML:ssä määritelty
document.getElementById("updateButton").addEventListener("click", updateContent);
