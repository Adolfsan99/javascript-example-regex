texto = prompt('Ingresa el nombre de una persona, por ejemplo, pepe');

const regex = /\bpepe\b/gi;

if (regex.test(texto)) {
  alert("Has encontado a pepe!");
}