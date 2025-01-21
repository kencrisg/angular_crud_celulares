export class Celular {
    id: string;
    marca: string;
    modelo: string;
    precio: number;
    almacenamiento: number;
    ram: number;
  
    constructor(
      id: string,
      marca: string,
      modelo: string,
      precio: number,
      almacenamiento: number,
      ram: number
    ) {
      this.id = id;
      this.marca = marca;
      this.modelo = modelo;
      this.precio = precio;
      this.almacenamiento = almacenamiento;
      this.ram = ram;
    }
  }