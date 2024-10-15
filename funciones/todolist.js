const arrayTareas = [];
function agregarTarea(nuevaTarea) {
  if (nuevaTarea) {
    arrayTareas.push(nuevaTarea);
    alert(`${nuevaTarea} añadida`);
  } else {
    alert("No has añadido ninguna tarea");
  }
}

function mostrarTarea() {
  let tareasPendientes = "Tareas pendientes:<br>";
  if (arrayTareas.length === 0) {
    tareasPendientes = "No hay tareas pendientes.";
  } else {
    let i = 1;
    for (let tareas of arrayTareas) {
      tareasPendientes += `${i}-${tareas}<br>`;
      i++;
    }
  }
  document.getElementById("mostrar").innerHTML = tareasPendientes;
}
function eliminarTarea(tareaAEliminar) {
  while (
    isNaN(tareaAEliminar) ||
    tareaAEliminar <= 0 ||
    tareaAEliminar > arrayTareas.length
  ) {
    tareaAEliminar = parseInt(
      prompt("Valor incorrecto, introduce un número válido de tarea.")
    );
  }

  let borrarTarea = tareaAEliminar - 1;
  let eliminada = arrayTareas.splice(borrarTarea, 1);
  alert(`Tarea "${eliminada}" eliminada.`);
  mostrarTarea();
}

function salir() {
  window.close();
}

function main() {
  let opcionSeleccionada = parseInt(document.getElementById("opciones").value);
  switch (opcionSeleccionada) {
    case 1:
      let nuevaTarea = prompt("Ingresa tu nueva tarea");
      agregarTarea(nuevaTarea);
      break;
    case 2:
      mostrarTarea();
      break;
    case 3:
        let tareaAEliminar = parseInt(
            prompt("Escribe con números qué tarea quieres eliminar: 1, 2, 3...")
          );
      eliminarTarea(tareaAEliminar);
      break;
    case 4:
      salir();
      break;
    default:
      alert("Selecciona una opción");
      break;
  }
}
