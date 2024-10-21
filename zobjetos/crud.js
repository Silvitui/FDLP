const arrayClientes = [];


const buscarCliente = (dni) => {
    let posicion = arrayClientes.findIndex((cliente) => cliente.dni === dni)
    return posicion;

}

const crearCliente =(dni,nacionalidad,edad) => {
    const nuevoCliente = new Cliente(dni,nacionalidad,edad)
    arrayClientes.push(nuevoCliente)
    document.getElementById("mostrar").innerHTML = nuevoCliente.toString();

}

const datosCrearCliente = () => {
    let dni = prompt("Ingrese el DNI del cliente")
    if (dni.length< 9) {
        alert("El DNI debe contener 8 números y una letra en mayúscula")
        return
    }
    let posicion = buscarCliente(dni)
    if (posicion >= 0) {
        alert("Ya existe un cliente con ese DNI en nuestro sistema")
    } else {
        let nacionalidad = prompt("Ingrese la nacionalidad del cliente")
        let edad = parseInt(prompt("Ingrese la edad del cliente"))
        if (isNaN(edad) || edad <= 0) {
            alert("Introduzca una edad válida")
            return
        }
        
     crearCliente(dni,nacionalidad,edad)
    }

  
}

const eliminarCliente = (dni) => {
    let posicion = buscarCliente(dni) 
    if (posicion >= 0) {
        arrayClientes.splice(posicion,1)
        document.getElementById("mostrar").innerHTML = "Cliente eliminado"
        alert("Cliente eliminado")

    } else {
        alert("No hemos encontrado el cliente")
    }
}
const datoEliminarCliente = () => {
    let dni = prompt("Ingrese el DNI del cliente que quiere eliminar")
    while (dni.length < 9) {
        dni = prompt("El DNI ha de contener 8 números y una letra en mayúscula")
    }
    eliminarCliente(dni)
}

const crearVueloCliente = (dni,numeroVuelo,companyia,distancia) => {
   let posicion = buscarCliente(dni)
   if (posicion >= 0) {
    const vuelo = new Vuelo(numeroVuelo,companyia,distancia)
    arrayClientes[posicion].añadirVuelos(vuelo)
    document.getElementById("mostrar").innerHTML = `Vuelo creado con éxito : ${vuelo.toString()}`
   } else {
    alert("Cliente no encontrado")
   }
}
const datosCrearVueloCliente = () => {
    let dni = prompt("Introduzca el DNI para crearle un vuelo al cliente")
    while (dni.length < 9) {
        dni = prompt("El DNI ha de contener 8 números y una letra en mayúscula")
    }
    let numeroVuelo = parseInt(prompt("Introduzca el número de vuelo"))
    while (isNaN(numeroVuelo) || numeroVuelo <= 0) {
        numeroVuelo = parseInt(prompt("Introduzca un número válido"))
    }
    let companyia = prompt("Introduzca la compañia aérea")
    let distancia = parseInt(prompt("Introduzca la distancia en km"))
    if (isNaN(distancia)) {
        alert("Introduzca un número válido")
        return;
    }

    crearVueloCliente(dni,numeroVuelo,companyia,distancia)

}
