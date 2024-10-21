class Vuelo {
  constructor(numeroVuelo, distancia, companyia, numPasajeros, numMotores) {
    this._numeroVuelo = numeroVuelo;
    this._distancia = distancia;
    this._companyia = companyia;
    this._numPasajeros = numPasajeros;
    this._numMotores = numMotores;
  }

  get numeroVuelo() {
    return this._numeroVuelo;
  }

  get distancia() {
    return this._distancia;
  }

  get companyia() {
    return this._companyia;
  }

  get numPasajeros() {
    return this._numPasajeros;
  }

  get numMotores() {
    return this._numMotores;
  }

  get huellaDeCarbono() {
    return ((this._distancia / 1000) * 0.1 * this._numMotores).toFixed(2);
  }

  set numeroVuelo(nuevoNumeroVuelo) {
    this._numeroVuelo = nuevoNumeroVuelo;
  }

  set distancia(nuevaDistancia) {
    this._distancia = nuevaDistancia;
  }

  set companyia(nuevaCompanyia) {
    this._companyia = nuevaCompanyia;
  }

  set numPasajeros(nuevoNumPasajeros) {
    this._numPasajeros = nuevoNumPasajeros;
  }

  set numMotores(nuevoNumMotores) {
    this._numMotores = nuevoNumMotores;
  }

  toString() {
    let mensaje = `
       DATOS DEL VUELO:<br>
       NÚMERO DE VUELO:      ${this.numeroVuelo}<br>
       DISTANCIA:            ${this.distancia} km <br>
       COMPAÑIA:             ${this.companyia}<br>
       NÚMERO DE PASAJEROS : ${this.numPasajeros}<br>
       NÚMERO DE MOTORES:    ${this.numMotores}<br>
       HUELLA DE CARBONO:    ${this.huellaDeCarbono} toneladas de CO2.
       `;
    return mensaje.trim();
  }
}
