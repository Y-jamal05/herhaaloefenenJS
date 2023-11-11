 // Gegeven waarden
 const huidigSalaris = 2000;
 const verhogingspercentage = 0.05;

 // Bereken de salarisverhoging
 let verhoging = huidigSalaris * verhogingspercentage;

 // Bereken het nieuwe salaris
 let nieuwSalaris = huidigSalaris + verhoging;

 // Toon het resultaat op de webpagina
 document.write("<p>Huidig salaris: €" + huidigSalaris.toFixed(2) + "</p>");
 document.write("<p>Verhogingspercentage: " + (verhogingspercentage * 100) + "%</p>");
 document.write("<p>Salarisverhoging: €" + verhoging.toFixed(2) + "</p>");
 document.write("<p>Nieuw salaris: €" + nieuwSalaris.toFixed(2) + "</p>");
