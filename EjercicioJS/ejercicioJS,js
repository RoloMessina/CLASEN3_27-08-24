const personajesSimpsons = [ 
{ nombre: "Homero", edad: 39, rol: "Padre" }, 
{ nombre: "Marge", edad: 36, rol: "Madre" }, 
{ nombre: "Bart", edad: 10, rol: "Hijo" }, 
{ nombre: "Lisa", edad: 8, rol: "Hija" }, 
{ nombre: "Maggie", edad: 1, rol: "Hija" }, 
{ nombre: "Ned", edad: 35, rol: "Vecino" }, 
{ nombre: "Ralph", edad: 8, rol: "Compañero de clase" }, 
{ nombre: "Milhouse", edad: 10, rol: "Amigo" }, 
{ nombre: "Nelson", edad: 12, rol: "Bravucón" }, 
{ nombre: "Martin", edad: 10, rol: "Compañero de clase" } 
]
/*Ejercicio 1: Filtrar personajes menores de edad
Crear un array de objetos con información de personajes de Los Simpsons, cada 
objeto debe contener el nombre, la edad y el rol del personaje. Utilizar el método 
filter para obtener un nuevo array que contenga solamente los personajes 
menores de 18 años*/
const personajesMenos18 = personajesSimpsons.filter((personaje) => personaje.edad < 18)
console.log(personajesMenos18)

/*Ejercicio 2: Sumar edades de los personajes
Utilizar el método 
reduce para sumar las edades de todos los personajes del array 
creado en el Ejercicio 1. Mostrar el resultado en la consola.*/

const sumaEdades = personajesMenos18.reduce((total, personaje) => total + personaje.edad, 0);
console.log("La suma total de todos los personajes es:", sumaEdades);

/*Ejercicio 3: Obtener los nombres de los personajes
Utilizar el método map y una función arrow para crear un nuevo array que contenga 
solamente los nombres de los personajes del array del Ejercicio 1. Mostrar el nuevo 
array en la consola.*/

const personajesNombres = personajesSimpsons.map((personaje) => personaje.nombre)
console.log(personajesNombres)

/*Ejercicio 4: Cambiar el rol de los personajes
Utilizar el método map y destructuring para crear un nuevo array a partir del array del 
Ejercicio 1, en el cual el rol de los personajes menores de edad sea cambiado a "Estudiante".
Mostrar el nuevo array en la consola.*/

const personajesConNuevoRol = personajesMenos18.map(( nombre, edad, rol) => ({
        nombre,
        edad,
        rol: "Estudiante"
    }));
console.log(personajesConNuevoRol);

/*Ejercicio 5: Agregar personajes con spread
Crear un nuevo array de objetos con más personajes de Los Simpsons. Utilizar el 
operador spread para combinar ambos arrays de personajes en un nuevo array. 
Mostrar el array resultante en la consola*/

const nuevosPersonajes = [
    { nombre: "Apu", edad: 40, rol: "Dueño de tienda" },
    { nombre: "Skinner", edad: 44, rol: "Director de escuela" }
];

const todosLosPersonajes = [...personajesSimpsons, ...nuevosPersonajes];

console.log(todosLosPersonajes);

