
let mostrarMensaje = document.getElementById("resultado");

function forecast(alturaOlas) {
  if (isNaN(alturaOlas)) {
    mostrarMensaje.innerHTML = "Introduce un número válido";
  } else if (alturaOlas > 5) {
    mostrarMensaje.innerHTML = "Hoy hay olas enormes. No te recomiendo entrar al agua";
  } else if (alturaOlas > 2) {
    mostrarMensaje.innerHTML = "Hoy hay olas grandes";
  } else {
    mostrarMensaje.innerHTML = "Hoy las olas son pequeñas";
  }
}


function experiencia(confirmacion) {
  if (confirmacion) {
    return "Tienes disponible: tabla de fibra";
  } else {
    return "Tienes disponible: tabla de espuma";
  }
}


function calcularCoste(horas, tabla) {
  let precio = 0;


  if (tabla === "Tienes disponible: tabla de fibra") {
    precio = 35;
  } else {
    precio = 20;
  }

  let costo = (horas * precio); 

 
  if (horas < 1) {
    mostrarMensaje.innerHTML = "El tiempo mínimo es de una hora";
  } else if (horas > 5) {
    mostrarMensaje.innerHTML = "El tiempo máximo es de 5 horas";
  } else {
    mostrarMensaje.innerHTML = `${tabla}. <br>El costo es de ${costo} euros.`;
  }
}


function salir() {
  let opcion = confirm("¿Seguro que quieres salir?");
  if (opcion) {
    window.close(); 
  }
}

function main() {
  let opciones = document.getElementById("opciones").value;



  switch (opciones) {

    case "pronostico":
      let alturaOlas = parseFloat(prompt("¿De cuántos metros son las olas hoy?"));
      forecast(alturaOlas);
      break;
    case "reserva":
      let tieneExperiencia = confirm("¿Tienes experiencia surfeando? SI -> ACEPTAR. NO -> CANCELAR.");
      let tipoTabla = experiencia(tieneExperiencia);
      let horas = parseFloat(prompt("Escribe el tiempo en horas que quieras reservar (Min 1 hora, Max 5 horas)"));
      calcularCoste(horas, tipoTabla);
      break;
    case "salir":
      salir();
      break;
  }
}