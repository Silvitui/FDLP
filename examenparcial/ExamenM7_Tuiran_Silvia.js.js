
      const logica = (array1, array2) => {
        let numerosArray1 = [];
        let numerosArray2 = [];
        let arrayVacio = [];

        console.log("Array1", array1);
        console.log("Array2", array2);

        for (let i = 0; i < array1.length; i++) {
          let num = parseInt(array1[i]);
          if (isNaN(num)) {
            alert(`El valor '${array1[i]}' no es un número válido`);
            return [];
          }
          numerosArray1.push(num);
        }
        for (let j = 0; j < array2.length; j++) {
          let num = parseInt(array2[j]);
          if (isNaN(num)) {
            alert(`El valor '${array2[j]}' no es un número válido`);
            return [];
          }
          numerosArray2.push(num);
        }

        console.log("Array1 convertido a números:", numerosArray1);
        console.log("Array2 convertido a números:", numerosArray2);

        for (let i = 0; i < numerosArray1.length; i++) {
          let num1 = numerosArray1[i];
          let num2 = numerosArray2[i];
          let combinaciones = 0;

          if (num1 % 2 === 0 && num2 % 2 === 0) {
            combinaciones = num1 + num2;
          } else if (num1 % 2 !== 0 && num2 % 2 !== 0) {
            combinaciones = num1 * num2;
          } else {
            combinaciones = num1 - num2;
          }
          if (combinaciones < 0) {
            combinaciones = Math.abs(combinaciones);
          }

          arrayVacio.push(combinaciones);
        }

        console.log("Resultado final del array:", arrayVacio);
        return arrayVacio;
      };

      const main = () => {
        let arr1 = document.getElementById("arr1").value;
        let arr2 = document.getElementById("arr2").value;

        let array1 = arr1.split(",");
        let array2 = arr2.split(",");

        if (array1.length !== 6 || array2.length !== 6) {
          alert("Debes ingresar 6 números en cada campo");
          return;
        }
        if (array1.length !== array2.length) {
          alert("Los arrays no tienen la misma longitud");
          return;
        }

        let resultado = logica(array1, array2);
        if (resultado.length > 0) {
          document.getElementById("resultado").innerHTML = `Resultado: ${resultado.join(", ")}`;
        }
      };
 









      