//*El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona. El BMI se calcula con la siguiente formula: peso / altura^2Escribir una función llamada bmi que reciba dos argumentos: peso y altura, y retorne un string con las siguientes posibilidades:"Bajo de peso" si el BMI < 18.5"Normal" si está entre 18.5 y 24.9"Sobrepeso" si está entre 25 y 29.9"Obeso" si es igual o mayor a 30 *//
function bmi(peso, altura) {
    const bmiValue = peso / (altura * altura); // Calcula el BMI

    if (bmiValue < 18.5) {
        return "Bajo de peso";
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        return "Normal";
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
        return "Sobrepeso";
    } else {
        return "Obeso";
    }
}

//*Escribir una función llamada calcularImpuestos que reciba dos argumentos numéricos: edad e ingresos. Si edad es igual o mayor a 18 y los ingresos son iguales o mayores a 1000 debe retornar ingresos * 40%. De lo contrario retornar 0. *//
function calcularImpuestos(edad, ingresos) {
    if (edad >= 18 && ingresos >= 1000) {
        return ingresos * 0.40; 
    } else {
        return 0; 
    }
}

/**Escribir una función llamada fizzBuzz que reciba un número y retorne un string de acuerdo a lo siguiente:

"fizz" si el número es múltiplo de 3.
"buzz" si el número es múltiplo de 5.
"fizzbuzz" si el número es múltiplo tanto de 3 como de 5.
Si no cumple ninguna de las condiciones anteriores debe retornar el mismo número. */
function fizzBuzz(numero) {
    if (numero % 3 === 0 && numero % 5 === 0) {
        return "fizzbuzz";
    } else if (numero % 3 === 0) {
        return "fizz";
    } else if (numero % 5 === 0) {
        return "buzz";
    } else {
        return numero;
    }
}
//**Escribir una función llamada capitalizar que reciba un string y capitalice la primera letra: */
function capitalizar(texto) {
    if (texto.length === 0) {
        return ""; 
    }
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}
