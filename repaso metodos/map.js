/*Ejemplos Prácticos
1. Transformación de Elementos
Ejemplo: Multiplicar cada número en un array*/


const numeros = [1, 2, 3, 4, 5];
const dobles = numeros.map(num => num * 2);
console.log(dobles); // Salida: [2, 4, 6, 8, 10]

/*2. Conversión de Tipos de Datos
Ejemplo: Convertir un array de cadenas de texto a números*/
const cadenas = ["1", "2", "3"];
const numeros = cadenas.map(cadena => Number(cadena));
console.log(numeros); // Salida: [1, 2, 3]


/*3. Extracción de Propiedades de Objetos
Ejemplo: Obtener un array de nombres a partir de un array de objetos.*/
const usuarios = [
    { id: 1, nombre: 'Ana' },
    { id: 2, nombre: 'Luis' },
    { id: 3, nombre: 'María' }
  ];
  
  const nombres = usuarios.map(usuario => usuario.nombre);
  console.log(nombres); // Salida: ['Ana', 'Luis', 'María']


  /*4. Modificación de Objetos en un Array
Ejemplo: Agregar una propiedad a cada objeto.*/ 
const productos = [
    { nombre: 'Camisa', precio: 20 },
    { nombre: 'Pantalón', precio: 30 }
  ];
  
  const productosConDescuento = productos.map(producto => ({
    ...producto,
    precio: producto.precio * 0.9 // Aplicar un 10% de descuento
  }));
  
/*5. Uso de Índice y Array Original
Ejemplo: Multiplicar cada número por su índice.*/ 
const numeros = [5, 10, 15];
const multiplicadosPorIndice = numeros.map((num, indice) => num * indice);
console.log(multiplicadosPorIndice); // Salida: [0, 10, 30]

/*6. Encadenamiento con Otros Métodos
Puedes combinar map() con otros métodos como filter() o reduce().

Ejemplo: Obtener los nombres en mayúsculas de usuarios mayores de 18 años.*/ 
const usuarios = [
    { nombre: 'Ana', edad: 17 },
    { nombre: 'Luis', edad: 22 },
    { nombre: 'María', edad: 19 }
  ];
  
  const nombresMayoresDeEdad = usuarios
    .filter(usuario => usuario.edad >= 18)
    .map(usuario => usuario.nombre.toUpperCase());
  
  console.log(nombresMayoresDeEdad); // Salida: ['LUIS', 'MARÍA']

  /*CONVERTIR TEMPERATURAS DE CELCIUS A FARENHEIT*/ 
const temperaturasCelsius = [0, 20, 30];
const temperaturasFahrenheit = temperaturasCelsius.map(temp => (temp * 9/5) + 32);
console.log(temperaturasFahrenheit); // Salida: [32, 68, 86]

  

  /*IMPORTANTE!!!!!!! Errores Comunes
Olvidar Retornar un Valor: Si no retornas un valor en la función de map(), el nuevo array contendrá undefined en esas posiciones.*/ 
const numeros = [1, 2, 3];
const resultados = numeros.map(num => {
  num * 2; // Falta el return
});
console.log(resultados); // Salida: [undefined, undefined, undefined]


/*Los tres puntitos (...) que mencionas en JavaScript se conocen como el operador de propagación o spread operator. Cuando se utilizan dentro del método map(), permiten crear nuevos objetos o arrays expandiendo los elementos de un objeto o array existente.

¿Qué es el Spread Operator (...)?
El spread operator (...) es una sintaxis que permite expandir elementos iterables (como arrays, objetos o cadenas de texto) en lugares donde se esperan cero o más argumentos o elementos. En el caso de objetos y arrays, se utiliza para crear copias superficiales, combinar, o agregar nuevos elementos o propiedades.

Uso del Spread Operator con map()
Cuando utilizas map() para transformar elementos de un array, a veces necesitas crear nuevos objetos basados en los objetos existentes, modificando o agregando propiedades sin mutar el objeto original. Aquí es donde el spread operator es especialmente útil. */