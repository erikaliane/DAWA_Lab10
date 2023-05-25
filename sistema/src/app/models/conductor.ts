export class Conductor {
    nombre: string;
    apellidos: string;
    dni: number;
    placa: string;
    fecha_nac: Date;
  
    constructor(nombre: string,
        apellidos: string,
        dni: number,
        placa: string,
        fecha_nac: Date
      ) {
      this.nombre = nombre;
      this.apellidos= apellidos;
      this.dni= dni;
      this.placa = placa;
      this.fecha_nac = fecha_nac
    }
  }
  