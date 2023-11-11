      // Initialiseer de teller
      let teller = 0;

      // Gebruik een while-loop die maximaal 20 keer loopt
      while (teller < 20) {
          // Print de eerste zin bij elke iteratie
          console.log("Dit is de eerste zin.");
  
          // Print de tweede zin alleen tijdens de eerste 10 iteraties
          if (teller < 10) {
              console.log("Dit is de tweede zin.");
          }
  
          // Verhoog de teller
          teller++;
      }
  
      // Print "Einde programma" aan het einde van het programma
      console.log("Einde programma");