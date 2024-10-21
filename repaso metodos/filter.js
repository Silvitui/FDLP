/*El método filter() en JavaScript crea un nuevo array que contiene todos los elementos del array original que cumplen una condición específica. Básicamente, recorre cada elemento del array y aplica una función de prueba a cada uno; si la condición es verdadera, ese elemento se incluye en el nuevo array.*/ 
let numeros = [1, 2, 3, 4, 5, 6];

// Filtrar solo los números pares
let numerosPares = numeros.filter(num => num % 2 === 0);

console.log(numerosPares); // Salida: [2, 4, 6]

/*Ejemplo más avanzado: Filtrar nombres que comienzan con una letra específica*/ 
let nombres = ["Ana", "Juan", "Amanda", "Pedro", "Alberto"];

// Filtrar solo los nombres que empiezan con 'A'
let nombresConA = nombres.filter(nombre => nombre.charAt(0) === "A");

console.log(nombresConA); // Salida: ["Ana", "Amanda", "Alberto"]
