class Cliente {
  constructor(dni, edad, nacionalidad, numeroVuelos) {
    this._dni = dni;
    this._edad = edad;
    this._nacionalidad = nacionalidad;
    this._numeroVuelos = numeroVuelos;
  }

  get dni() {
    return this._dni;
  }

  get edad() {
    return this._edad;
  }

  get nacionalidad() {
    return this._nacionalidad;
  }

  get numeroVuelos() {
    return this._numeroVuelos;
  }

  get huellaDeCarbono() {
    return this._numeroVuelos * 0.5;
  }

  set dni(nuevoDni) {
    this._dni = nuevoDni;
  }

  set edad(nuevaEdad) {
    this._edad = nuevaEdad;
  }

  set nacionalidad(nuevaNacionalidad) {
    this._nacionalidad = nuevaNacionalidad;
  }

  set numeroVuelos(nuevoNumeroVuelos) {
    this._numeroVuelos = nuevoNumeroVuelos;
  }

  toString() {
    let mensaje = `
  DATOS DEL CLIENTE:
  DNI: ${this.dni}
  EDAD: ${this.edad}
  NACIONALIDAD: ${this.nacionalidad}
  NUMERO VUELOS: ${this.numeroVuelos}
  HUELLA DE CARBONO: ${this.huellaDeCarbono} toneladas de CO2`;

    return mensaje.trim();
  }
}
