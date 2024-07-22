function generateRandomExcuse() {
  const excuses = [
    "Mi perro se comió mi tarea",
    "Tuve una emergencia familiar",
    "El perro del vecino se comió mi tarea mientras la llevaba a casa",
    "Me enfermé",
    "Olvidé que tenía tarea",
    "No tuve tiempo para hacerla",
    "Tuve problemas con el internet",
    "No entendí la tarea",
    "Tuve que ayudar a mi abuela a atrapar a un ladrón en su casa",
    "Me quedé dormido estudiando y no me di cuenta de la hora"
  ];

  const randomIndex = Math.floor(Math.random() * excuses.length);
  return excuses[randomIndex];
}

window.onload = function() {
  const excuse = generateRandomExcuse();
  const heading = document.querySelector(".excusa"); // Selecciona el elemento h1
  heading.textContent = excuse; // Asigna la excusa al contenido del h1
};
