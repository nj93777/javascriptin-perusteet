
document.addEventListener('DOMContentLoaded', function () {
    // Haetaan elementit
    const typeSelect = document.getElementById('type');
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const totalPriceElements = document.querySelectorAll('#totalPrice'); // Haetaan kaikki totalPrice-elementit

    // Funktio kokonaishinnan laskemiseksi ja päivittämiseksi
    function updateTotalPrice() {
        let total = parseFloat(typeSelect.value); // Aloita valitun pancake-tyypin perushinnasta

        // Lisää kunkin valitun täytteen hinta kokonaissummaan
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                total += parseFloat(checkbox.value);
            }
        });

        // Päivitä näyttö kaikissa totalPrice-elementeissä
        totalPriceElements.forEach(element => {
            element.textContent = `${total}€`;
        });
    }

    // Aseta tapahtumankuuntelijat hintojen päivitykselle, kun valinnat muuttuvat
    typeSelect.addEventListener('change', updateTotalPrice);
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateTotalPrice);
    });

    // Alusta kokonaishinnan näyttö oikein
    updateTotalPrice();
});
