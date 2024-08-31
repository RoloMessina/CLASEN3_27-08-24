let numeros = [1,2,3,4,5,6,7,8,9,10]

let mayorQueTres = numeros.find(num => num > 3);
console.log("Primer número mayor que 3:", mayorQueTres);

let mayoresQueDos = numeros.filter(num => num > 2);
console.log("Números mayores que 2:", mayoresQueDos);


let numerosII = [1,2,3,4,5]

let duplicados = numerosII.map(num => num * 2);
console.log("Números duplicados:", duplicados);


/*Crear un array de números.
● Usar el método find para encontrar el primer número mayor que 3. 
● Usar el método filter para obtener todos los números mayores que 2. 
● Usar el método map para duplicar cada número en el array*/