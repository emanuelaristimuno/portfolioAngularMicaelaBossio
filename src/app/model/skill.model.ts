export class Skill{
    id?: number;
    tipo: String;
    nombre: String;
    porcentaje: String;

    constructor (tipo: String, nombre: String, porcentaje: String){
        this.tipo=tipo;
        this.nombre=nombre;
        this.porcentaje=porcentaje;
    }
}