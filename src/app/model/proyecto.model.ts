export class Proyecto{
    id?: number;
    nombre: String;
    fecha: number;
    imagen: String;
    descripcion: String;

    constructor (nombre: String, fecha: number, imagen: String, descripcion: String){
        this.nombre=nombre;
        this.fecha=fecha;
        this.imagen=imagen;
        this.descripcion=descripcion;
    }
}