### Creacion de TODO app

---
## Datos curiosos
+ Una buena forma de agregar un id unico es usando new Date().getTime();

        this.id = new Date().getTime(); //1234123512

+ Para la clase principal necesitamos:

1. Agregar una tarea
2. Agregar un identificador
3. Agregar la fecha y hora 
4. Y marcar como no completado la tarea

+ Cuando nosotros programemos un proyecto, siempre es buena idea hacer una estructura en consola y luego juntar todo con el DOM ya cuando tengamos claro que queremos.

### Todo list class

+ Ahora necesitamos almacenar las tareas pendientes en algun lugar, pero adicional tendremos otros procedimientos. Agregar filtros, elmiminar tareas, entre otras cosas.

+ Como son varias cosas, lo ideal seria crear una clase.

+ Los componentes por lo general contienen todo el DOM, incluyendo event listeners

+ keyup se refiere al evento que se usa para soltar la tecla, en este caso sera agregado para la tecla enter.

+ Antes de trabajar con el DOM, es buena idea jugar un poco con el esqueleto para ver como lo podemos administrar.

+ Para determinar donde estamos haciendo click, usamos console log, para determinar el target donde se hace click y poder administrar dicho boton, usamos el target y despoues el localName

                event.target.localName

+ getAtributte( 'atributo' ), es la forma en que tomamos atributos de un elemento html.

+ classList.toggle, funciona para alternar una clase, Si no existe la clase la coloca, si existe la quita.

                div.classList.toggle("visible"); 

+ Array.filter me devuelve un nuevo array con las indicaciones que yo le de, va a barrer cada elemento y de acuerdo a la indicacion, me lo devuelve.

+ Para eliminar un elemento dentro de otro, por ejemplo un li de un ul, se usa removeChild( 'nombre del elemento' );

+ Lo que realmente uso de un filter es que me devuelva un array con todo lo que necesito. Ejemplo si necesito que me de un array con todos los false podriamos hacer la condicion con !true

+ Aunque en muchas ocasiones se puede usar todo con el DOM, cuando pasemos todo a un lugar persistente. Necesitaremos la estructura javascript

+ Contains('clase'), me permite saber si un elemento tiene un clase.


### LocalStorage

+ Esto solo funciona cuando va destinado a la web, ya que si lo usamos en node en otros dispositivos no disponemos de esto.

+ LocalStorage, aguanta inicio de computadora y se siguen almacenando los datos.

+ SessionStorage, solo se almacena hasta que se cierre el navegador, cuando lo volvemos a abrir se borrara todo.

Ejemplo:

                //agregar calve,valor
                localStorage.setItem( 'key','value' );

                //eliminar 
                //Se eliminara el valor en 4 segundos
                setTimeout(() => {
                    localStorage.removeItem('key')
                }, 4000);

+ Con sessionStorage seria igual, solo que en vez de local, seria session.

+ El localStorage solo se da por dominio cuando sea http://

+ El local storage, siempre se llamara cuando hagamos algun ajuste o cambio, normalmente se guarda en una funcion o metodo.

+ JSON.stringify es muy ideal para convertir un arreglo en clave valor, como .JSON

                .JSON.stringify( arreglo );

---

+ Un tip para un forEach, es que cuando tenemos un argumento y ese mismo argumento se llama una vez en una funcion, podemos quitar y solo dejar la funcion de esta forma, el interprete analizara dicho valor como parametro y como argumento.

        array.forEach( arg => funcion( arg ) )
        array.forEach( funcion );

Solo funciona para un argumento, si necesita dos. Ya no funcionara.

+ Los metodos nos son guardados en el localStorage por el .strigify.

+ array.map(), barre los elementos del arreglo y me devuelve los elementos mutados.

+ Puede ser muy util en el momento de crear instancias en un arreglo.

+ Cuando en un evento listener agregamos como argumento un evento, puede ser porque elegimos todo un div que contiene varios elementos dentro, asi estara atento de cual elemento escogimos.

+ Cuando vemos el evento, nos interesa en muchas ocasiones el evento al cual nosotros dimos click, para eso nos centraremos en target y si queremos por ejemplo saber su texto. Target.text