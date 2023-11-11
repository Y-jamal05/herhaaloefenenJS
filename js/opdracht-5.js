  // Vraag de gebruiker om het bedrag in euro's
  let bedragInEuro = parseFloat(prompt("Voer het bedrag in euro's in:"));

  // Vraag de gebruiker om de valuta
  let valutaType = prompt("Voer het type valuta in (BTC, ETH, XRP, DOG, SOL):").toUpperCase();

  // Definieer de wisselkoersen
  const wisselkoersen = {
      BTC: 35050,
      ETH: 1887,
      XRP: 0.7,
      DOG: 0.07,
      SOL: 40.26
  };

  // Controleer of de ingevoerde valuta bekend is
  if (valutaType in wisselkoersen) {
      // Bereken het bedrag in de opgegeven valuta
      let omgezetBedrag = bedragInEuro * wisselkoersen[valutaType];

      // Toon het resultaat in de console
      console.log(`Het bedrag van €${bedragInEuro.toFixed(2)} in ${valutaType} is ${omgezetBedrag.toFixed(2)}`);
  } else {
      console.log("De ingevoerde valuta is onbekend");
  }