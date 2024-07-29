# React
React, es una biblioteca de JavaScript que se utiliza para construir interfaces de usuario. Toda aplicación web React se compone de componentes reutilizables que conforman partes de la interfaz de usuario. Puede tener un componente distinto para barra de navegación, otro para el pie de página, otro para el contenido principal, etc.   
<br> 
Es decir, hacer todas las partes visibles de nuestra app. Y se pueden reutilizar y usar las veces que se quieran. Cada componente es una función de JavaScript que devuelven .jsx.  
<br> 
````
No se escribe como en HTML es decir JSX != HTML. Por ejemplo, un botón no se escribiría:  
 
<button class="btn">  

Se escribiría:  

<button className="btn">  
````
Permite tener atributos dinámicos.  
  
### Props  
Para crear un prop crear un nombre e iguarlo al valor que se desea. Ejemplo:  
<br>
````
<Greeting text={'Yo'}/>.  
Para utilizarlo:  
function Greeting(props) {  
return <h1>{props.text}</h1>  
}
````
<br> 
Permiten pasar además de valores otros componentes. 

### Key props
Es un identificador único que permite diferenciar componentes creados usualmente al crear listas con la función map.
<br> 
Cuando sea necesario añadirlo React lo indicará también si se necesita.


### Rendering
React hace este proceso, con los siguientes pasos:  
1. Si el estado de nuestra app en react cambia, react actualiza el VDOM (virtual DOM) que es más rápido de actualizar que el DOM real.  
2. Luego hace un proceso llamado diffs para ver las diferencias entre el VDOM y el DOM.  
3. Cuando ve las diferencias hace una reconcialition para actualziar el DOM con los cambios encontrados.  
<br> 
DOM: Document Object Model que es lo que todos los navegaores usan paera identificar los elementos HTML de una página web y es como un árbol con la jerarquía de los elementos.    

### Event Handling 
Cuando un usuario usa la app se producen muchos eventos, interacciones como clicks, movimientos de ratón o al escribir en el teclado. React tiene varios eventos incorporados, los principales son onClick, onChange y onSubmit. A través de funciones se manejan los eventos. Ejemplo:  
<br> 
````
function RedAlert() {   
   const handleClick = () => { alert(' ') }  
   return(  
   <button onClick={handleClick}>   
   Click me  
   </button>  
   )  
   }  
   <br> 
   En el ejemplo al pulsa run botón se llama a la función que alerta a los usuarios.  
````
   ### State
   Para manejar los datos se usan estados. Es como un snapshot (imagen) de la app en cualquier instante que guarda el estado de las variables en ese momento. Para ello se utilizan funciones especiales como useState() o useReducer().  
<br> 
   useState()     const [likes, setLikes] = use State(0). 
  <br> 
Aqui por ejemplo la función useState toma con argumnto likes y devuelve un array formado por la variable likes y la funcion que lo actualzia setLikes. De tal forma que para el ejemplo anterior podría ademas de alertar al usuario al clickar el botón, actualizar el número de likes con setLikes(likes+1) y luego mostrarlo en pantalla con Likes: {likes}.  
    
  ### Controlled Components  
Son perfectos para formularios. Lo que se escriba en un campo, se guarda su estado y con el valor del estado se controla. Funciona así:  
<br> 
1. El usuario escribe y la función setValue es llamada.  
2. Se actualiza su estado  
3. Input lee su valor del estado.  
<br> 
### Hooks  
Un Hook es una función de javascript que permite crear/acceder al estado y a los ciclos de vida de React. Hay 5 tipos diferentes:  
<br> 
- Hooks de estado: useState() o useReducer()  
- Context Hooks: useContext() para pasar datos de uso a través del contexto    
- Ref Hooks: useRef()  para referencias cosas como HTML.  
- Effect hooks: useEffect() para conectar con sistemas externos.  
- Performance: useMemo() y useCallback() que mejoran el rendimiento de la aplicación.  

### Purity
Es un concepto usado para describir como los componentes de React deben comportarse. Un componente con los mismos datos de entrada debería porporcionar los mismos datos de salida siempre. Para ello, debe devolver el jsx y no cambiar ningún objeto o variable que existiesen antes de rendering.  
<br> 
Ejemplo de elemento impuro:  
<br> 
````
function Cup() {  
count= count+1  
return <h2> Cup {count}</h2>  
}
````
<br> 
Es impuro porque está alterando el valor de count que existe fuera de la función lo cual puede provocar errores en la salida. Para prevenir estos errores se puede usar el modo estricto.  
Es un componente especial que nos dice errores al ir creando la aplicación y cosas que no se deberían hacer.

### Effects  
La aplicación puede necesitar comunicarse con el navegador o hacer una petición a un servidor. Los effects son código que permiten acceder fuera de la aplicación React. Por ejemplo, al subir un formulario que haga una petición HTTP.  

Se puede usar el hook useEffect() para lanzar los effects si estos no se pueden lanzar al manejar eventos. Por ejemplo: 
<br> 
````
useEffect(() => {  
fetchData().then(data => {  
//datos aqui  
})  
},[])
```` 
<br> 
Se utilizaría cuando se carga por primera vez un componente.  

### Refs
Como con los effects para trabajar fuera del código, los ref sirven para trabajar directamente con el DOM.  
<br> 
### Context
Permite la comunicación de información entre componentes. De tal forma que en vez de pasarse la información de uno a otro hasta llegar al componente que ls necesita, con el contexto se pueden comunicar directamente.


