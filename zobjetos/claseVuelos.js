class Vuelo {
    constructor(numeroVuelo,companyia,distancia) {
        this._numeroVuelo = numeroVuelo;
        this._companyia = companyia;
        this._distancia = distancia;
    }

   
    get numeroVuelo() {
        return this._numeroVuelo;
    }
    get companyia() {
        return this._companyia;
    }
    get distancia() {
        return this._distancia;
    }

    get huellaDeCarbono() {
        return (this._distancia / 1000) * 0.1;

    }
    get compensaCO2() {
        return this.huellaDeCarbono * 5;
      }


      toString() {
        let mensaje = `
        NÚMERO DE VUELO : ${this.numeroVuelo}
        COMPAÑIA : ${this.companyia}
        DISTANCIA : ${this.distancia}
        HUELLA DE CARBONO: ${this.huellaDeCarbono}`
      }




}