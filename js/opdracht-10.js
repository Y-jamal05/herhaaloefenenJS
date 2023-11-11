// Maak een array van muziekartiesten
const muziekartiesten = ["Artiest 1", "Artiest 2", "Artiest 3", "Artiest 4", "Artiest 5"];

// Functie om een muziekartiest toe te voegen
function voegMuziekartiestToe() {
    // Haal het container-element op
    const container = document.getElementById("muziekartiestenContainer");

    // Genereer een willekeurige index om een muziekartiest te kiezen
    const willekeurigeIndex = Math.floor(Math.random() * muziekartiesten.length);

    // Maak een nieuw div-element aan
    const nieuwDiv = document.createElement("div");

    // Voeg de muziekartiest toe aan het div-element
    nieuwDiv.textContent = muziekartiesten[willekeurigeIndex];

    // Voeg het div-element toe aan de container
    container.appendChild(nieuwDiv);
}