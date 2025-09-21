// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Voy a buscarte lejos en cualquier lugar", time: 6 },
  { text: "Vos marcá el sendero, yo camino atrás", time: 10 },
  { text: "¿Qué veo cuando miro tu nombre en la ciudad?", time: 13 },
  { text: "Puedo sentirte cerca, hasta cuando no estás", time: 18 },
  { text: "Voy a buscarte lejos de cualquier lugar", time: 20 },
  { text: "Vos marcá el sendero, yo camino atrás", time: 26 },
  { text: "¿Qué veo cuando miro tu nombre en la ciudad?", time: 29 },
  { text: "Puedo sentirte cerca, hasta cuando no estás", time: 34 },
  { text: "Al principio estábamos bajo perfil, Desaparecíamo' a lo Copperfield", time: 55.7 },
  { text: "Y yo te imaginaba fumando en mi cama", time: 58.2 },
  { text: "Mientras vos cantabas Recovery", time: 62 },
  { text: "Te fui a ver a un show con la excusa", time: 63 }, 
  { text: "De que era por un amigo, pero no por mí", time: 65 }, 
  { text: "Tu mamá me saludó con una sonrisa", time: 67 }, 
  { text: "Y me dijo: Muchas gracias por venir", time: 69 }, 


  { text: "Maldita manía de amar, fue por tu forma de ser", time: 72 }, 
  { text: "Lo que no pude explicar, ella lo pudo entender", time: 76 }, 
  { text: "El infinito no tiene final, lo nuestro no tiene definición", time: 81 }, 
  { text: "Demasiado como pa ser real, la realidad superó la ficción", time: 86 }, 

  { text: "Voy a buscarte lejos en cualquier lugar", time: 89 },
  { text: "Vos marcá el sendero, yo camino atrás", time: 94 },
  { text: "¿Qué veo cuando miro tu nombre en la ciudad?", time: 97 },
  { text: "Puedo sentirte cerca, hasta cuando no estás", time: 102 },


];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 5
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);