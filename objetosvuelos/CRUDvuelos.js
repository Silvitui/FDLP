const arrayVuelos = [];

const vuelo1 = new Vuelo (55556, 16900, "QantasAirways", 396, 4);
const vuelo2 = new Vuelo (88887, 8000, "Emirates", 240, 2);

arrayVuelos.push(vuelo1);
arrayVuelos.push(vuelo2);



const buscarVuelo = (numeroVuelo) => {
  const posicion = arrayVuelos.findIndex((vuelo) => vuelo.numeroVuelo === parseInt(numeroVuelo));
  return posicion;
};

const crearVuelo = (numeroVuelo,distancia,companyia,numPasajeros,numMotores) => {
    const nuevoVuelo = new Vuelo (numeroVuelo,distancia,companyia,numPasajeros,numMotores);
    arrayVuelos.push(nuevoVuelo);
    document.getElementById("mostrar").innerHTML = `${nuevoVuelo.toString()}`;
    console.log(`Buscando vuelo con número: ${numeroVuelo}. Posición: ${posicion}`);
  };
  

const crearVueloPreguntas = () => {
  let numeroVuelo = parseInt(prompt("Introduzca el número de vuelo: "));
  while (isNaN(numeroVuelo) || numeroVuelo <= 0 ) {
    numeroVuelo = parseInt(
      prompt("Número de vuelo inválido. Pruebe de nuevo:")
    );
  }
  let posicion = buscarVuelo(numeroVuelo);
  if (posicion >= 0) {
    alert("Ya existe un vuelo con ese número.");
    return;
  }

  let distancia = parseFloat(
    prompt("Introduzca la distancia que recorrerá en km (Mínimo 100 km)")
  );
  while (isNaN(distancia) || distancia < 100) {
    distancia = parseFloat(
      prompt("Distancia inválida. La distancia mínima son 100 km:")
    );
  }

  let companyia = prompt("Introduzca la compañía aérea");

  let numPasajeros = parseInt(
    prompt("Introduzca el número de pasajeros (Mínimo 30 pax):")
  );
  while (isNaN(numPasajeros) || numPasajeros < 30) {
    numPasajeros = parseInt(
      prompt("Número de pasajeros inválido. Debe ser mayor o igual a 30 pax:")
    );
  }

  let numMotores = parseInt(
    prompt("Introduzca el número de motores del avión:")
  );
  while (isNaN(numMotores) || numMotores < 2 || numMotores > 4) {
    numMotores = parseInt(
      prompt("Número de motores inválido. Debe ser entre 2 y 4:")
    );
  }

  crearVuelo(numeroVuelo, distancia, companyia, numPasajeros, numMotores);


};
const verVuelo = (numeroVuelo) => {
    let posicion = buscarVuelo(numeroVuelo) 
    if (posicion >= 0) {
        let vuelo = arrayVuelos[posicion]
        document.getElementById("mostrar").innerHTML = vuelo.toString()
    } else {
        alert("Vuelo no encontrado")
    }
    console.table(arrayVuelos)

}

const pedirNumeroVuelo = () => {
    let numeroVuelo = parseInt(prompt("Introduzca el número del vuelo que desea mirar"))
    while (isNaN(numeroVuelo) || numeroVuelo <= 0) {
     numeroVuelo = parseInt(prompt("Introduzca un número válido"))
    }

    verVuelo(numeroVuelo)
    
}

const modificarVuelo = (numeroVuelo) => {
    let posicion = buscarVuelo(numeroVuelo);
    if (posicion < 0) {
      alert("No existe un vuelo con ese número."); 
      return;
    }
  
    let vuelo = arrayVuelos[posicion];
    let opcion = parseInt(
      prompt(`Ingrese la opción que desea modificar:
  1) Número de vuelo
  2) Distancia
  3) Compañía
  4) Número de pasajeros
  5) Número de motores`)
    );
  
    switch (opcion) {
      case 1:
        let nuevoNumeroVuelo = parseInt(prompt("Ingrese el nuevo número de vuelo:"));
        vuelo.numeroVuelo(nuevoNumeroVuelo);
        break;
      case 2:
        let nuevaDistancia = parseFloat(prompt("Ingrese la nueva distancia:"));
        vuelo.distancia(nuevaDistancia);
        break;
      case 3:
        let nuevaCompanyia = prompt("Ingrese la nueva compañía:");
        vuelo.companyia(nuevaCompanyia);
        break;
      case 4:
        let nuevoNumPasajeros = parseInt(prompt("Ingrese el nuevo número de pasajeros:"));
        vuelo.numPasajeros(nuevoNumPasajeros);
        break;
      case 5:
        let nuevoNumMotores = parseInt(prompt("Ingrese el nuevo número de motores:"));
        vuelo.numMotores(nuevoNumMotores);
        break;
      default:
        alert("Opción no válida.");
        return;
    }
    document.getElementById("mostrar").innerHTML = vuelo.toString();
    alert("El vuelo ha sido modificado correctamente.");
    console.table(arrayVuelos)
};
const pedirNumeroVueloParaModificar = () => {
    let numeroVuelo = parseInt(prompt("Ingrese el número de vuelo que desea modificar:"));
    if (isNaN(numeroVuelo)) {
        alert("Número de vuelo inválido.");
        return;
    }
    modificarVuelo(numeroVuelo);
};

const eliminarVuelo = (numeroVuelo) => {
    let posicion = buscarVuelo(numeroVuelo);
    if (posicion >= 0) {
        arrayVuelos.splice(posicion, 1);
        alert(`El vuelo número ${numeroVuelo} ha sido eliminado de la aplicación.`);
        document.getElementById("mostrar").innerHTML = "";
    } else {
        alert("El vuelo no se encuentra la aplicación.");
    }
};


const pedirNumeroVueloParaEliminar = () => {
    let numeroVuelo = parseInt(prompt("Ingrese el número del vuelo que desea eliminar:"));
    if (isNaN(numeroVuelo)) {
        alert("Número de vuelo inválido.");
        return;
    }
    eliminarVuelo(numeroVuelo);
};


