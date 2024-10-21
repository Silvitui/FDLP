const arrayClientes = [];

const cliente1 = new Cliente("12345678A", 27, "ECUATORIANA", 9);
const cliente2 = new Cliente("87654321B", 37, "ITALIANA", 5);
const cliente3 = new Cliente("123456456C", 30, "COLOMBIANA", 12);

arrayClientes.push(cliente1);
arrayClientes.push(cliente2);
arrayClientes.push(cliente3);

const buscarCliente = (dni) => {
  let posicion = arrayClientes.findIndex(
    (cliente) => cliente.dni === dni.toUpperCase()
  );
  console.log("DNI introducido:", dni);
  console.log("Índice encontrado:", posicion);
  return posicion;
};

const agregarCliente = () => {
  let dni = prompt("Introduzca el DNI del cliente").toUpperCase();
  if (dni.length !== 9) {
    alert("El DNI ha de contener 8 números y una letra en mayúscula");
    return;
  }
  let posicion = buscarCliente(dni);
  if (posicion >= 0) {
    alert("Ha introducido el DNI de un cliente existente");
    return;
  }
  let edad = parseInt(prompt("Introduzca la edad del cliente"));
  if (isNaN(edad) || edad < 0) {
    alert("Introduzca una edad válida");
    return;
  }
  let nacionalidad = prompt("Introduzca la nacionalidad del cliente");
  let numeroVuelos = parseInt(
    prompt("Introduzca el número de vuelos que ha realizado")
  );
  if (isNaN(numeroVuelos) || numeroVuelos < 0) {
    alert("Ingrese un número válido");
    return;
  }
  const nuevoCliente = new Cliente (dni, edad, nacionalidad, numeroVuelos); 
  arrayClientes.push(nuevoCliente);
  alert(`Nuevo cliente añadido correctamente \n${nuevoCliente.toString()}`);
  console.log("Nuevo cliente agregado:",nuevoCliente)
};


const consultarDatos = () => {
  let dni = prompt(
    "Ingrese el DNI del cliente que desea consultar"
  ).toUpperCase();
  if (dni.length !== 9) {
    alert("El DNI ha de contener 8 números y una letra en mayúscula");
    return;
  }
  let posicion = buscarCliente(dni);
  if (posicion < 0) {
    alert("No se ha encontrado ningún cliente con ese DNI");
  } else {
    let mensaje = arrayClientes[posicion].toString();
    alert(mensaje);
  }

};
  
const modificarDatos = () => {
  let dni = prompt("Ingrese el DNI del cliente que desea modificar").toUpperCase();
  if (dni.length !== 9) {
    alert("El DNI ha de contener 8 números y una letra en mayúscula");
    return;
  }
  let posicion = buscarCliente(dni);
  if (posicion < 0) {
    alert("No se ha encontrado ningún cliente con ese DNI");
  } else {
    let nuevoDni = prompt("Ingrese el nuevo DNI ");
    if (nuevoDni.length !== 9) {
      alert("El DNI ha de contener 8 números y una letra en mayúscula");
      return;
    }
    let nuevaEdad = parseInt(prompt("Ingrese la nueva edad"));
    let nuevaNacionalidad = prompt("Ingrese la nueva nacionalidad");
    let nuevoNumeroVuelos = parseInt(
      prompt("Ingrese el nuevo número de vuelos que ha realizado")
    );

    arrayClientes[posicion].dni = nuevoDni; 
    arrayClientes[posicion].edad = nuevaEdad;
    arrayClientes[posicion].nacionalidad = nuevaNacionalidad;
    arrayClientes[posicion].numeroVuelos = nuevoNumeroVuelos;
    alert(`Datos del cliente modificados correctamente : \n${arrayClientes[posicion].toString()}`
    );
  }
};

const eliminarCliente = () => {
  let dni = prompt("Ingrese el DNI del cliente a eliminar ").toUpperCase()
  if (dni.length !== 9) {
    alert("El DNI ha de contener 8 números y una letra en mayúscula");
      return;
}
  let posicion = buscarCliente(dni)
  if (posicion < 0) {
    alert("No se ha encontrado ningún cliente con ese DNI")
  } else {
    arrayClientes.splice(posicion,1)
    alert("Cliente eliminado correctamente")
  }
  console.log("Lista actual de clientes:", arrayClientes);
}

const salir = () => {
 if (confirm("¿Seguro que desea salir?")) {
  alert("¡Gracias por usar el sistema!. Adiós")
 }
  window.close()
}