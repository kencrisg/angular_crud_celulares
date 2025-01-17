export class Celular {
    id: number;
    marca: string;
    modelo: string;
    precio: number;
    almacenamiento: number;
    ram: number;
  
    constructor(
      id: number,
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