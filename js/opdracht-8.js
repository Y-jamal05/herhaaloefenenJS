   // Initialiseer de teller
   let teller = 0;

   // Gebruik een while-loop die maximaal 20 keer loopt
   while (teller < 20) {
       // Print "Loop" bij elke iteratie
       console.log("Loop");

       // Verhoog de teller
       teller++;

       // Controleer of de teller 10 bereikt heeft, zo ja, stop de loop met het break-statement
       if (teller === 10) {
           console.log("Loop gestopt na 10 iteraties.");
           break;
       }
   }
