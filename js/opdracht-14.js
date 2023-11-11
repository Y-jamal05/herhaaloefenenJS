 // Definieer de functie showArray met een parameter genaamd inputArray
 function showArray(inputArray) {
    // Loop door elk element van de array en print ze op de console
    for (let i = 0; i < inputArray.length; i++) {
        console.log(inputArray[i]);
    }
}

// Voorbeeld van het aanroepen van de functie showArray met een array
const FruitArray = ["Appel", "Banaan", "Sinaasappel", "Druif"];
showArray(FruitArray);