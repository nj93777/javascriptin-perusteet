/* 
Kirjoita JavaScript-koodi, joka lisää tapahtumankäsittelijän napille.

Kun nappia klikataan, funktion tulisi:
- Hakea arvo syötekentästä.
- Luoda uusi <li> elementti ja asettaa sen tekstisisältö syötekentän arvoksi.
- Lisätä uusi <li> elementti hedelmälistan <ul>-elementtiin.

Varmista, että syötekenttä tyhjennetään hedelmän lisäämisen jälkeen.
*/




document.addEventListener("DOMContentLoaded", function() {
    // Etsi nappi ja liitä tapahtumankäsittelijä
    document.getElementById("addFruitBtn").addEventListener("click", function() {
        // Hae syötekentän arvo
        var input = document.getElementById("fruitInput");
        var fruitName = input.value;

        // Varmista, että syötekenttä ei ole tyhjä
        if (fruitName.trim() !== "") {
            // Luo uusi li-elementti ja aseta sen sisältö
            var newFruit = document.createElement("li");
            newFruit.textContent = fruitName;

            // Lisää uusi elementti hedelmälistaan
            document.getElementById("fruitList").appendChild(newFruit);

            // Tyhjennä syötekenttä
            input.value = "";
        } else {
            alert("Syötä hedelmän nimi, kiitos!");
        }
    });
});
