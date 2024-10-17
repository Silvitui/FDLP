class Cliente {

    constructor(dni, edad, nacionalidad, numeroVuelos) {
      this.dni = dni.toUpperCase();
      this.edad = edad;
      this.nacionalidad = nacionalidad.toUpperCase();
      this.numeroVuelos = numeroVuelos;
    }
  
    getDni() {
      return this.dni;
    }
  
    getEdad() {
      return this.edad;
    }
  
    getNacionalidad() {
      return this.nacionalidad;
    }
  
    getNumeroVuelos() {
      return this.numeroVuelos;
    }
  
    getHuellaDeCarbono() {
      return this.numeroVuelos * 0.5;
    }
  
    setDni(dni) {
      this.dni = dni.toUpperCase();
    }
  
    setEdad(edad) {
      this.edad = edad;
    }
  
    setNacionalidad(nacionalidad) {
      this.nacionalidad = nacionalidad.toUpperCase();
    }
  
    setNumeroVuelos(numeroVuelos) {
      this.numeroVuelos = numeroVuelos;
    }
  
    toString() {
      let mensaje = `
  DATOS DEL CLIENTE:
  DNI: ${this.dni}
  EDAD: ${this.edad}
  NACIONALIDAD: ${this.nacionalidad}
  NUMERO VUELOS: ${this.numeroVuelos}
  HUELLA DE CARBONO: ${this.getHuellaDeCarbono()} toneladas de CO2`;
  
      return mensaje.trim();
    }
  }
  