export default class Propietario {
    constructor(nombre, direccion, telefono) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }
    datosPropietario() {
        return `El Nombre del dueño es: ${this.nombre}. El Domicilio es: ${this.direccion}, y el numero telefonico de contacto: ${this.telefono}`
    }
}