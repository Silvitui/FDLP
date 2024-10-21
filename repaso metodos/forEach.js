/*El método forEach() en JavaScript permite ejecutar una función sobre cada elemento de un array, de manera similar a un bucle for. A diferencia de map() o filter(), forEach() no devuelve un nuevo array; simplemente itera sobre cada elemento y realiza una acción con ese elemento.
forEach() solo ejecuta la función de callback en cada elemento; no devuelve nada. Por lo tanto, si quieres realizar una acción sobre cada elemento, como imprimir o modificar algo fuera del array, forEach() es una buena opción.
map() y filter() devuelven un nuevo array con los elementos transformados o filtrados.*/


/*Ejemplo práctico:
Supón que tienes un array de nombres y quieres convertir cada nombre a mayúsculas sin crear un nuevo array:*/
let nombres = ["Ana", "Juan", "Pedro"];

nombres.forEach((nombre, indice) => {
  nombres[indice] = nombre.toUpperCase();
});

console.log(nombres); // Salida: ["ANA", "JUAN", "PEDRO"]
