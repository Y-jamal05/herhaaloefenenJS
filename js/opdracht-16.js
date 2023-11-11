// Definieer de functie getSumOfArray met één parameter genaamd numArray
function getSumOfArray(numArray) {
    // Initialiseer een variabele om de som bij te houden
    let som = 0;

    // Loop door elk element van de array en voeg ze toe aan de som
    for (let i = 0; i < numArray.length; i++) {
        som += numArray[i];
    }

    // Retourneer de berekende som
    return som;
}

// Voorbeeld van het aanroepen van de functie getSumOfArray met een array
const voorbeeldArray = [1, 3, 5, 7, 11];
const resultaat = getSumOfArray(voorbeeldArray);
console.log("De som van de array is: " + resultaat);