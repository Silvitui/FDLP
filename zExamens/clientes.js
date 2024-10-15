class Cliente {
    constructor(dni,edad,nacionalidad,numeroVuelos) {
        this.dni = dni,
        this.edad = edad,
        this.nacionalidad = nacionalidad,
        this.numeroVuelos = numeroVuelos
    }
    get dni(){
        return this.dni
    }
    get edad(){
        return this.edad
    }
    get nacionalidad() {
        return this.nacionalidad
    }
    get numeroVuelos() {
        return this.numeroVuelos
    }

    set dni(dni){
        return this.dni = dni
    }
    set edad(edad) {
        return this.edad = edad
    }
    set nacionalidad(nacionalidad) {
        return this.nacionalidad = nacionalidad
    }
    set numeroVuelos(numeroVuelos) {
        return this.numeroVuelos = numeroVuelos;
    }

}
export default Cliente;

const newClient = new Cliente(
    "12345678", 
    38,
    catalana,
    14
)
console.log(newClient)