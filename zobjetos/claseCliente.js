class Cliente {
    constructor(dni,nacionalidad,edad) {
        this._dnidni = dni.toUpperCase();
        this._nacionalidad = nacionalidad;
        this._edad = edad;
        this._vuelos = [];
    }
    añadirVuelos(vuelos) {
        this.vuelos.push(vuelos)
    }

    get dni() {
    return this._dni;
    }
    get nacionalidad() {
        return this._nacionalidad;
    }
    get edad() {
        return this._edad;
    }

    get vuelos() {
        return this._vuelos;
    }

    get huellaDeCarbono() {
        return ((this._distancia / 1000) * 0.1 * this._numMotores).toFixed(2);
      }



toString() {
    let mensaje = `
    DATOS DEL CLIENTE: 
    DNI : ${this.dni}
    NACIONALIDAD : ${this.nacionalidad}
    EDAD : ${this.edad}
    HUELLA DE CARBONO : ${this.huellaDeCarbono()} toneladas de Co2.
    VUELOS: ${this.vuelos.length}
    `
    return mensaje.trim()
}
}