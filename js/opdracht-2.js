     // Gegeven waarden
     const prijs = 400000;
     const percentage = 0.025;
 
     // Bereken de jaarlijkse rentebetaling
     let rente = prijs * percentage;
 
     // Toon het resultaat op de webpagina
     document.write("<p>Huisprijs: €" + prijs.toFixed(2) + "</p>");
     document.write("<p>Rentepercentage: " + (percentage * 100) + "%</p>");
     document.write("<p>Jaarlijkse rente: €" + rente.toFixed(2) + "</p>");