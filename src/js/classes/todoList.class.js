
import {Todo} from '../classes/index';

// Administra la tarea - Esqueleto de la app
export class TodoList{

    constructor(){

        this.crearLocalStorage()
        // this.todos = [];

    }

    nuevoTodo( todo ){

        this.todos.push( todo );
        this.guardarLocalStorage()
    };
    

    eliminarTodo( id ){ 

        // const elemento = element => element == id;
        // const indice = this.todos.findIndex( elemento );
        // this.todos.splice( indice , 1 );
        this.todos = this.todos.filter( todo => todo.id != id );// Me devolvera un nuevo arreglo, excluyendo el todo diferente a el id. 
        
        this.guardarLocalStorage()
    };

    // Lo que necesitamos es barrer el arreglo, buscar el id y cambiar 
    //el estado del completado del id

    marcarCompletado( id ){

        for( const todo of this.todos ){

            if( todo.id == id ){
                todo.completado = !todo.completado;
            };
            
        }
        this.guardarLocalStorage();
    };

    eliminarCompletados(){

        this.todos = this.todos.filter( todo => !todo.completado );
        this.guardarLocalStorage();
    };

    guardarLocalStorage(){

        localStorage.setItem( 'todo', JSON.stringify( this.todos )  )
        
    };

    crearLocalStorage(){
        // if( localStorage.getItem( 'todo' ) ){

        //     this.todos = JSON.parse( localStorage.getItem( 'todo' ));

        //     console.log( 'cargarLocal:', this.todos );
        // }else{ 
            
        //     this.todo = [];
        // }

        this.todos = (localStorage.getItem( 'todo' )) ?  
                    JSON.parse( localStorage.getItem( 'todo' )) :
                    [];

        // this.todos = this.todos.map( obj => Todo.fromJson( obj ) );
        this.todos = this.todos.map( Todo.fromJson );

    };
};