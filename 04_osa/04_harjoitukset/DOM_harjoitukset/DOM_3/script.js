/* Luo toiminnallisuus, jossa syötekentän arvo näytetään jatkuvasti ja päivitetään omalla alueellaan sivulla käyttäjän kirjoittaessa, käyttäen onchange-tapahtumaa. */

/* Ohjeet:

HTML:
- Luo perus-HTML
- Sisällytä <input type="text"> -elementti, johon käyttäjä voi kirjoittaa tekstiä.
- Lisää <div> -elementti, jolla on tunniste (esim. id="displayText"), joka näyttää syötekentän arvon.
- Muista yhdistää HTML- ja JS-tiedostot

JavaScript:

Kirjoita JavaScript-koodi, joka lisää tapahtumankäsittelijän syötekentälle, erityisesti kuuntelemalla muutos-tapahtumaa.

Tapahtumankäsittelijän funktion tulisi:
- Hakea nykyinen arvo syötekentästä.
- Päivitä displayText <div>:n textContent vastaamaan syötekentän arvoa.
- Saadaksesi näytön päivittymään dynaamisemmin (käyttäjän kirjoittaessa), harkitse input-tapahtuman käyttämistä change-tapahtuman sijasta tai sen lisäksi. */

document.addEventListener("DOMContentLoaded", function() {
    // Hae input-elementti ja display-elementti
    var textInput = document.getElementById("textInput");
    var displayText = document.getElementById("displayText");

    // Lisää tapahtumankuuntelija input-elementtiin
    textInput.addEventListener("input", function() {
        // Päivitä displayText-elementin sisältö vastaamaan inputin sisältöä
        displayText.textContent = textInput.value;
    });
});
