//imports
import { Todo} from './classes/index.js'
import { todoList } from '../index.js'

//referencias
const divTodoList   = document.querySelector( '.todo-list' )
const todoInput     = document.querySelector( '.new-todo' );
const btnLimpiar    = document.querySelector( '.clear-completed' );
const ulFiltros     = document.querySelector( '.filters' );
const anchorFiltros = document.querySelectorAll( '.filtro' );

export const crearTodoHtml = ( todo ) => {

    const htmlTodo = `
        <li class="${ (todo.completado) ? "completed" : '' } " data-id="${todo.id}">
            <div class="view">
                <input class="toggle" type="checkbox" ${ (todo.completado) ? "checked" : "" }>
                <label>${ todo.tarea }</label>
                <button class="destroy"></button>
                </div>
            <input class="edit" value="Create a TodoMVC template">
        </li>`

    // Creo un div e inyecto el codigo del html
    const div = document.createElement( 'div' );
    div.innerHTML = htmlTodo

    divTodoList.append(div.firstElementChild )
    
    return div.firstElementChild
};


// eventos

todoInput.addEventListener( 'keyup', (evento) => {
    
    if( evento.keyCode === 13 && todoInput.value !== ""){

        const nuevoTodo   = new Todo( todoInput.value );
        
        todoList.nuevoTodo( nuevoTodo );

        crearTodoHtml( nuevoTodo );
        todoInput.value   = "";
    }


} );


divTodoList.addEventListener( 'click', (evento) => {

    const nombreElemento = evento.target.localName;
    const todoElemento   = evento.target.parentElement.parentElement;
    const todoId         = todoElemento.getAttribute( 'data-id' );


    if( nombreElemento === 'input'  ){ //dar Click en el input

        todoList.marcarCompletado( todoId );
        todoElemento.classList.toggle('completed');

    }else if(  nombreElemento === 'button' ){

        todoList.eliminarTodo( todoId );
        divTodoList.removeChild( todoElemento )
    }


});

btnLimpiar.addEventListener( 'click', () => {

    // const completos   = document.querySelectorAll( '.completed' )
    // completos.forEach( (completos) => { 
    //     completos.remove();
    // });

    const elementos = divTodoList.children

    for( let i = elementos.length-1; i >=0; i-- ){
        if( elementos[i].classList.contains( 'completed' )  ){
            elementos[i].remove();
        }
    }
    todoList.eliminarCompletados();
    

});

ulFiltros.addEventListener( 'click', (evento) => {

    const filtro = evento.target.text 
    if(!filtro){ return; }

    anchorFiltros.forEach( elem => {
        elem.classList.remove( 'selected' );
    });
    evento.target.classList.add( 'selected');
    
    for( const elemento of divTodoList.children ){
        elemento.classList.remove( 'hidden' )
        const completo = elemento.classList.contains( 'completed' )

        switch( filtro ){
            case 'Pendientes':
                if( completo ){
                    elemento.classList.add( 'hidden' )
                };
            break;
            
            case 'Completados': 
                if( !completo ){
                    elemento.classList.add( 'hidden' )
                };
            break;
        }
    }

});

// Al momento
/* 
    Configuramos wwebpack y le agregamos 
    Creamos la clase que hace la tarea y le asigna un identificador
    Creamos la clase que es el esqueleto que administra esa tarea. 
    Por ultimo creamos los componentes, que seria el DOM que se conecta con el esqueleto de esa clase.

*/ 