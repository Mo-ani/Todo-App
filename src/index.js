import './css/styles.css';
import { Todo,TodoList } from './js/classes/index';
import { crearTodoHtml } from './js/componentes'



export const todoList = new TodoList();

// todoList.todos.forEach( todo => crearTodoHtml( todo ) );

todoList.todos.forEach( crearTodoHtml );

// const newTodo = new Todo( 'Tal cosa' );

// todoList.todos[0].imprimirClase();

console.log( todoList.todos );

// const tarea = new Todo( 'Aprender Javascript' );
// console.log( tarea );

// todoList.nuevoTodo( tarea );

// crearTodoHtml( tarea );

// //agregar calve,valor
// localStorage.setItem( 'key','value' );

// //eliminar 
// //Se eliminara el valor en 4 segundos
// setTimeout(() => {
//     localStorage.removeItem('key')
// }, 4000);

