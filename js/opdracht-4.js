  // Gegeven waarden
  const prijsExBtw = 100;
  const btwPercentage = 0.21;

  // Bereken de prijs inclusief btw
  let prijsInclBtw = prijsExBtw * (1 + btwPercentage);

  // Toon het resultaat op de webpagina
  document.write("<p>Prijs exclusief btw: €" + prijsExBtw.toFixed(2) + "</p>");
  document.write("<p>Btw percentage: " + (btwPercentage * 100) + "%</p>");
  document.write("<p>Prijs inclusief btw: €" + prijsInclBtw.toFixed(2) + "</p>");