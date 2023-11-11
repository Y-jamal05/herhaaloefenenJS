  // Maak een array met kleuren
  const kleurenArray = ["rood", "groen", "geel", "blauw", "roze"];

  // Toon de kleuren op de webpagina
  document.write("<h1>Kleuren Array</h1>");
  document.write("<ul>");
  for (let i = 0; i < kleurenArray.length; i++) {
      document.write("<li>" + kleurenArray[i] + "</li>");
  }
  document.write("</ul>");