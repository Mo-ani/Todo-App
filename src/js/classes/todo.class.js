
// Crea la tarea
export class Todo{

    static fromJson ( { id, tarea, completado, fecha } ){

        const tempTodo = new Todo( tarea );

        tempTodo.id = id;
        tempTodo.completado = completado;
        tempTodo.fecha = fecha;

        return tempTodo;
    }

    constructor( tarea ){

        this.tarea      = tarea;


        this.id         = new Date().getTime(); // Funciona para tomar un id
        this.completado = false;
        this.fecha      = new Date();

    };

    imprimirClase() {
        console.log( `${ this.tarea } - ${ this.id }` );
    }

};