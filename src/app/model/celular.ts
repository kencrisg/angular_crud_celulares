export class Celular {
    id: number;
    marca: string;
    modelo: string;
    precio: number;
    almacenamiento: string;
    ram: string;
  
    constructor(
      id: number,
      marca: string,
      modelo: string,
      precio: number,
      almacenamiento: string,
      ram: string
    ) {
      this.id = id;
      this.marca = marca;
      this.modelo = modelo;
      this.precio = precio;
      this.almacenamiento = almacenamiento;
      this.ram = ram;
    }
  }