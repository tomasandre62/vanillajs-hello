function generateExcuse() {
  const who = ["El perro", "Mi abuela", "El cartero", "Mi pájaro"];
  const action = ["comió", "orinó", "rompió", "destruyó"];
  const what = ["mi tarea", "mi teléfono", "el auto"];
  const when = [
    "antes de la clase",
    "mientras dormía",
    "mientras hacía ejercicio",
    "durante la hora del almuerzo",
    "mientras rezaba"
  ];

  const randomIndexWho = Math.floor(Math.random() * who.length);
  const randomIndexAction = Math.floor(Math.random() * action.length);
  const randomIndexWhat = Math.floor(Math.random() * what.length);
  const randomIndexWhen = Math.floor(Math.random() * when.length);

  const excuse = `${who[randomIndexWho]} ${action[randomIndexAction]} ${what[randomIndexWhat]} ${when[randomIndexWhen]}`;
  return excuse;
}

function displayExcuse() {
  const excuseElement = document.getElementById("excuse");
  excuseElement.innerHTML = generateExcuse();
}

window.onload = displayExcuse;
