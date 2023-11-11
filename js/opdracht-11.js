 // Array om de ingevoerde tekst op te slaan
 const tekstArray = [];

 // Functie om tekst toe te voegen aan de array en de HTML-lijst
 function voegToe() {
     // Haal het ingevoerde tekst op
     const ingevoerdeTekst = document.getElementById("tekstInput").value;

     // Voeg de tekst toe aan de array
     tekstArray.push(ingevoerdeTekst);

     // Voeg de tekst toe aan de HTML-lijst
     toonInLijst(ingevoerdeTekst);

     // Wis het inputveld
     document.getElementById("tekstInput").value = "";
 }

 // Functie om tekst weer te geven in de HTML-lijst
 function toonInLijst(tekst) {
     // Haal het ul-element op
     const lijst = document.getElementById("tekstLijst");

     // Maak een nieuw li-element aan
     const nieuwItem = document.createElement("li");

     // Voeg de tekst toe aan het li-element
     nieuwItem.textContent = tekst;

     // Voeg het li-element toe aan de ul-lijst
     lijst.appendChild(nieuwItem);
 }

 // Functie om alles te wissen
 function wisAlles() {
     // Wis de array
     tekstArray.length = 0;

     // Wis de inhoud van de HTML-lijst
     document.getElementById("tekstLijst").innerHTML = "";
 }