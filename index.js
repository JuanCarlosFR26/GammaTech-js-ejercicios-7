
// 💻 Ejercicios
// Ejercicios: Nivel 1
// Declare una función fullName e imprima su nombre completo.
function fullName() {
    console.log('Juan Carlos Fernández Ramírez');
}
fullName();

// Declare una función fullName y ahora toma firstName, lastName como parámetro y retorna su nombre completo.
function fullName2(firstName, lastName) {
    return (`${firstName} ${lastName}`);
}
console.log(fullName2('Juan Carlos','Fernández Ramírez'));

// Declare una función addNumbers que toma dos parámetros y retorna la suma de ambos.
function addNumbers(num1, num2) {
    return num1 + num2;
}
console.log(addNumbers(5, 5));

// El área de un rectángulo se calcula de la siguiente manera: area = length x width. Escribe una función areaOfRectangle que calcule el área de un rectángulo.
function areaOfRectangle(length, width) {
    return length * width;
}
console.log(areaOfRectangle(10, 22));

// El perímetro de un rectángulo se calcula de la siguiente manera: perimeter= 2x(length + width). Escribe una función perimeterOfRectangle que calcule el perímetro de un rectángulo.
function perimeterOfRectangle(length, width) {
    return 2 * (length + width);
}
console.log(perimeterOfRectangle(10, 20));

// El volumen de un prisma rectangular se calcula de la siguiente manera: volume = length x width x height. Escribe una función volumeOfRectPrism que calcule el volumen de un prisma.
function volumeOfRectPrism(length, width, height) {
    return length * width * height;
}
console.log(volumeOfRectPrism(10, 10, 10));

// El área de un círculo se calcula de la siguiente manera: area = π x r x r. Escribe una función areaOfCircle que calcule el área de un círculo.
function areaOfCircle(radio) {
    let PI = Math.PI;
    return Math.floor(PI * radio * radio);
}
console.log(areaOfCircle(20));

// La circunferencia de un círculo se calcula de la siguiente manera: circumference = 2πr. Escribe una función circumOfCircle que calcule la circunferencia de un círculo.
function circumOfCircle(radio) {
    let PI = Math.PI;
    return 2 * (PI * radio);
}
console.log(circumOfCircle(10));

// La densidad de una sustancia se calcula de la siguiente manera:density= mass/volume. Escribe una función density que calcule la densidad de una sustancia.
function density(mass, volume) {
    return mass / volume;
}
console.log(density(10, 20));

// La velocidad se calcula dividiendo el total de la distancia recorrida por un objeto en movimiento entre el tiempo total. Escribe una función que calcule la velocidad de un objeto en movimiento, speed.
function velocity(distance, time) {
    return distance / time;
}
console.log(velocity(300, 120));

// El peso de una sustancia se calcula de la siguiente manera: weight = mass x gravity. Escribe una función weight que calcule el peso de una sustancia.
function weig(mass) {
    let gravity = 9.81;
    return mass * gravity;
}
console.log(weig(100));

// La temperatura en °C se puede convertir a °F usando esta fórmula: °F = (°C x 9/5) + 32. Escribe una función convertCelsiusToFahrenheit que convierta °C a °F.
function convertCelsiusToFahrenheit(c) {
    return (c * (9 / 5) + 32);
}
console.log(convertCelsiusToFahrenheit(38));

// El índice de masa corporal (IMC) se calcula de la siguiente manera: imc = peso en Kg / (altura x altura) en m2. Escribe una función que calcule imc. El IMC se utiliza para definir de forma amplia diferentes grupos de peso en adultos de 20 años o más. Compruebe si una persona tiene un peso bajo, peso normal, con sobrepeso u obeso según la información que se proporciona a continuación.
// Se aplican los mismos parámetros de grupos tanto a hombres como a mujeres.
// Peso bajo: IMC inferior a 18,5
// Peso normal: IMC de 18,5 a 24,9
// Sobrepeso: IMC de 25 a 29,9
// Obeso: IMC es 30 o más
function imc(weight, heigth) {
    let imc = weight / (heigth ** 2);
    if(imc >0 && imc < 18.5) {
        return `${imc}: Peso bajo.`
    } else if(imc >= 18.5 && imc <= 24.9) {
        return `${imc}: Peso normal.`
    } else if(imc >= 25 && imc <= 29.9) {
        return `${imc}: Sobrepeso.`
    } else if(imc >= 30) {
        return `${imc}: Obeso.`
    }
}
console.log(imc(84, 1.80));

// Escribe una función llamada checkSeason, toma un parámetro de mes y retorna la estación: Otoño, Invierno, Primavera o Verano.
function checkSeason(mes) {
    switch(mes) {
        case 'diciembre':
        case 'enero':
        case 'febrero':
            return `Invierno`;
        case 'marzo':
        case 'abril':
        case 'mayo':
            return 'primavera';
        case 'junio':
        case 'julio':
        case 'agosto':
            return 'verano';
        case 'septiembre':
        case 'octubre':
        case 'noviembre':
            return 'otoño'
    }
}
console.log(checkSeason('julio'));

// Math.max retorna su argumento más grande. Escriba una función findMax que tome tres argumentos y devuelva su máximo sin usar el método Math.max.
// console.log(findMax(0, 10, 5));
// 10;
// console.log(findMax(0, -10, -2));
// 0;
function findMax(num1, num2, num3) {
    if(num1 > num2 && num1 > num3) {
        return num1;
    } else if(num2 > num1 && num2 > 3) {
        return num2;
    } else {
        return num3;
    }
}
console.log(findMax(0, 10, 5));
console.log(findMax(0, -10, -2));

// Ejercicios: Nivel 2

// La ecuación lineal se calcula de la siguiente manera: ax + by + c = 0. Escribe una función que calcule el valor de una ecuación lineal, solveLinEquation.
function solveLinEquation(a, b, c, x, y) {
    return (a * x) + (b * y) + c;
}
console.log(solveLinEquation(8, 12, 5, 4, 9));

// La ecuación cuadrática se calcula de la siguiente manera: ax2 + bx + c = 0. Escribe una función que calcule el valor o los valores de una ecuación cuadrática, solveQuadEquation.

// console.log(solveQuadratic()); // {0}
// console.log(solveQuadratic(1, 4, 4)); // {-2}
// console.log(solveQuadratic(1, -1, -2)); // {2, -1}
// console.log(solveQuadratic(1, 7, 12)); // {-3, -4}
// console.log(solveQuadratic(1, 0, -4)); //{2, -2}
// console.log(solveQuadratic(1, -1, 0)); //{1, 0}
function solveQuadEquation(a, b, c) {
    let solution = (-b + Math.sqrt((b ** 2) - (4 * a * c))) / 2 * a;
    let solution2 = (-b - Math.sqrt((b ** 2) - (4 * a * c))) / 2 * a;
    let arrRes = [solution, solution2];
    if(solution === 0 || isNaN(solution)) {
        return 0;
    } else if(solution === solution2) {
        return solution;
    } else {
        return arrRes;
    }
}
console.log(solveQuadEquation());
console.log(solveQuadEquation(1, 4, 4));
console.log(solveQuadEquation(1, -1, -2));
console.log(solveQuadEquation(1, 7, 12));
console.log(solveQuadEquation(1, 0, -4));
console.log(solveQuadEquation(1, -1, 0));


// Declare una función llamada printArray. Toma un array como parámetro e imprime cada valor del array.
function printArray(arr) {
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
printArray([1, 2, 3, 4, 5]);

// Declare una función llamada showDateTime que muestre la hora en este formato: 01/08/2020 04:08 usando el objeto Date.
// showDateTime()
// 08/01/2020 04:08
function showDateTime() {
    const newDate = new Date()
    let actualYear = newDate.getFullYear().toString();
    let actualMonth = (newDate.getMonth() + 1).toString();
    let lengthActualMonth = actualMonth.length;
    let actualDay = newDate.getDate().toString();
    let lengthActualDay = actualDay.length;
    let actualHour = newDate.getHours().toString();
    let lengthActualHour = actualHour.length;
    let actualMinutes = newDate.getMinutes().toString();
    let lengthActualMinutes = actualMinutes.length;

    let format = (lengthActualDay == 2?(actualDay):"0"+(actualDay)) + "/" + (lengthActualMonth == 2?(actualMonth):"0"+(actualMonth)) + "/" + actualYear + " " + (lengthActualHour == 2? actualHour:"0"+actualHour) + ":" + (parseInt(lengthActualMinutes)==2?parseInt(actualMinutes):"0"+ parseInt(actualMinutes));

    return format;
}
console.log(showDateTime());


// Declare una función llamada swapValues. Esta función intercambia el valor de x a y.
// swapValues(3, 4); // x => 4, y=>3
// swapValues(4, 5); // x = 5, y = 4
function swapValues(x, y) {
    let copyX = y
    let copyY = x
    return `${copyX} y ${copyY}`
}
console.log(swapValues(4, 5));
console.log(swapValues(3, 4));


// Declare una función llamada reverseArray. Toma un array como parámetro y retorna el array invertido (no use el método reverse()).
// console.log(reverseArray([1, 2, 3, 4, 5]));
// //[5, 4, 3, 2, 1]
// console.log(reverseArray(["A", "B", "C"]));
// //['C', 'B', 'A']
function reverseArray(arr) {
    let arrRev = [];
    for(let i = 0; i < arr.length; i++) {
        arrRev.unshift(arr[i]);
    }
    return arrRev;
}
console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArray(["A", "B", "C"]));


// Declare una función llamada capitalizeArray. Toma un array como parámetro y retorna el array - capitalizedarray.
function capitalizeArray(arr) {
    let capitalizedarray = [];
    for(let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toUpperCase();
        capitalizedarray.push(arr[i]);
    }
    return capitalizedarray;
}

console.log(capitalizeArray(["hola", "javascript"]));


// Declare una función llamada addItem. Toma un elemento de paŕametro y retorna un array después de agregar el un elemento.
function addItem(elemento) {
    let arr = [];
    return arr.push(elemento);
}
console.log("flamenco");

// Declare una función llamada removeItem. Toma como parámetro un index y retorna un array después de eleminar el elemento con ese index.
function removeItem(index) {
    let arr = ["ejemplo", "ejemplo2", "ejemplo3"];
    arr.splice(index, 1);
    return arr;
}
console.log(removeItem(2));

// Declare una función llamada sumOfNumbers. Toma un número como parámetro y suma todos los números en ese rango.
function sumOfNumbers(num) {
    let sum = 0;
    for(let i = 0; i <= num; i++) {
        sum += i;
    }
    return sum;
}
console.log(sumOfNumbers(10));

// Declare una función llamada sumOfOdds. Toma un parámetro numérico y suma todos los números impares en ese rango.
function sumOfOdds(num) {
    let sum = 0;
    for(let i = 0; i <= num; i++) {
        if(i % 2 === 1) {
        sum += i;
    }

    }
    return sum;
}
console.log(sumOfOdds(10));

// Declare una función llamada sumOfEven. Toma un parámetro numérico y suma todos los números pares en ese rango.
function sumOfEven(num) {
    let sum = 0;
    for(let i = 0; i <= num; i++) {
        if(i % 2 === 0) {
        sum += i;
    }

    }
    return sum;
}
console.log(sumOfEven(10));

// Declare una función llamada evensAndOdds . Toma un entero positivo como parámetro y cuenta el número de pares e impares.
// evensAndOdds(100);
// El número de impares son 50.
// El número de pares es 51.
function evensAndOdds(num) {
    let even = 0;
    let odd = 0;
    if(num > 0) {
        for(let i = 0; i <= num; i++) {
            if(i % 2 === 1) {
                odd += 1;
            } else {
                even += 1;
            }
        }
    }
    return `En el rango de números del 0 al ${num}, hay ${even} números pares y ${odd} impares`;
}
console.log(evensAndOdds(100));


// Escriba una función que tome cualquier número de argumentos y retorne la suma de los argumentos
// sum(1, 2, 3); // -> 6
// sum(1, 2, 3, 4); // -> 10
function sum(...args) {
    let sum = 0;
    for(let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
}
console.log(sum(8, 9, 10));

// Escriba una función randomUserIp que genere una ip de usuario aleatoria.
const anonIp = () => {
    let pattern = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789';
    let id = '';
    for(let i = 0; i <= 10; i++) {
        id += pattern.charAt(Math.floor(Math.random()* pattern.length));
    }
    return id;
}
console.log(anonIp());

// Escriba una función randomMacAddress que genere una dirección mac aleatoria.
const randomMacAddress = () => {
    let id1 = '';
    let id2 = '';
    let id3 = '';
    let id4 = '';
    let id5 = '';
    let pattern = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789';
    let id = '';
    for(let i = 0; i < 2; i++) {
        id1 += pattern.charAt(Math.floor(Math.random()* pattern.length));
    }
    for(let i = 0; i < 2; i++) {
        id2 += pattern.charAt(Math.floor(Math.random()* pattern.length));
    }
    for(let i = 0; i < 2; i++) {
        id3 += pattern.charAt(Math.floor(Math.random()* pattern.length));
    }
    for(let i = 0; i < 2; i++) {
        id4 += pattern.charAt(Math.floor(Math.random()* pattern.length));
    }
    for(let i = 0; i < 2; i++) {
        id5 += pattern.charAt(Math.floor(Math.random()* pattern.length));
    }
    return `00:${id1}:${id2}:${id3}:${id4}:${id5}`;
}
console.log(randomMacAddress());

// Declare una función llamada randomHexaNumberGenerator. Cuando se llama a esta función, genera un número hexadecimal aleatorio. La función retorna el número hexadecimal.
// console.log(randomHexaNumberGenerator());
// '#ee33df'
function randomHexaNumberGenerator() {
    let hexRand = '';
    let patternHex = 'abcdef0123456789';
    let limitHex = Math.floor(Math.random() * 6);
    for (let i = 0; i <= limitHex; i++) {
        hexRand += patternHex.charAt(Math.floor(Math.random() * patternHex.length));
    }
    return `#${hexRand}`;
}
console.log(randomHexaNumberGenerator());

// Declare una función llamada userIdGenerator. Cuando se llama a esta función, genera un id de siete caracteres. La función devuelve el id.
// console.log(userIdGenerator());
// 41XTDbE
function userIdGenerator() {
    let pattern = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789';
    let id = '';
    for(let i = 0; i <= 7; i++) {
        id += pattern.charAt(Math.floor(Math.random() * pattern.length));
    }
    return id;
}
console.log(userIdGenerator());

// Ejercicios: Nivel 3

// Modifique la función userIdGenerator. Declare una función de nombre userIdGeneratedByUser. No toma ningún parámetro pero toma dos entradas usando prompt(). Una de las entradas es la cantidad de caracteres y la segunda entrada es la cantidad de ID que se supone que se generarán.
// userIdGeneratedByUser()
// 'kcsy2
// SMFYb
// bWmeq
// ZXOYh
// 2Rgxf
// '
// userIdGeneratedByUser()
// '1GCSgPLMaBAVQZ26
// YD7eFwNQKNs7qXaT
// ycArC5yrRupyG00S
// UbGxOFI7UXSWAyKN
// dIV0SSUTgAdKwStr
// '
function userIdGeneratedByUser() {
    let pattern = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789';
    let arrId = [];
    let cuantity = prompt('Introduce la cantidad de caracteres: ');
    let cuantityId = prompt('Introduce cuántas Id quieres: ');
    for(let i = 0; i < cuantityId; i++) {
        let id= '';
        for(let j = 0; j < cuantity; j++) {
            id += pattern.charAt(Math.floor(Math.random() * pattern.length));
        }
        arrId.push(id);
    }

    return arrId.join('\n');

}

// console.log(userIdGeneratedByUser());

// Escriba una función llamada rgbColorGenerator que genera colores rgb
// rgbColorGenerator()
// rgb(125,244,255)
function rgbColorGenerator() {
    let colorRGB = [];
    for(let i = 0; i < 3; i++) {
        colorRGB.push(Math.floor(Math.random() * 255));
    }

    return `rgb(${colorRGB[0]},${colorRGB[1]},${colorRGB[2]})`;
}
console.log(rgbColorGenerator());

// Escriba una función arrayOfHexaColors que retorna cualquier cantidad de colores hexadecimales en un array.
function arrayOfHexaColors(numColors) {
    let colors = [];
    for (let i = 0; i < numColors; i++) {
      let color = "#";
      for (let j = 0; j < 6; j++) {
        color += Math.floor(Math.random() * 16).toString(16);
      }
      colors.push(color);
    }
    return colors;
}
console.log(arrayOfHexaColors(5));

// Escriba una función arrayOfRgbColors que retorna cualquier cantidad de colores RGB en un array.
function arrayOfRgbColors(num) {
    let colors = [];
    for(let i = 0; i < num; i++) {
        let color = "rgb";
        for(let j = 0; j < 1; j++) {
            color = color + '(' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ')';
        }
        colors.push(color);
    }
    return colors;
}

console.log(arrayOfRgbColors(4));

// Escriba una función convertHexaToRgb que convierta el color hexa a rgb y retorna un color rgb.
function convertHexaToRgb(hex) {
    let pattern = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return pattern ? {
        r: parseInt(pattern[1], 16),
        g: parseInt(pattern[2], 16),
        b: parseInt(pattern[3], 16)
    } : null;
}
console.log(convertHexaToRgb('#efe234'));


// Escriba una función convertRgbToHexa que convierta rgb a color hexa y retorna un color hexa.
function elementToConvert(hex) {
    let color = hex.toString(16);
    return color.length === 1 ? "0" + color : color;
}

function convertRgbToHexa(r, g, b) {
    return "#" + elementToConvert(r) + elementToConvert(g) + elementToConvert(b);
}

console.log(convertRgbToHexa(20, 55, 223));

// Escriba una función generateColors que pueda generar cualquier número de colores hexa o rgb.
// console.log(generateColors("hexa", 3)); // ['#a3e12f', '#03ed55', '#eb3d2b']
// console.log(generateColors("hexa", 1)); // '#b334ef'
// console.log(generateColors("rgb", 3)); // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
// console.log(generateColors("rgb", 1)); // 'rgb(33,79, 176)'
// function generateColors() {
//     let selection = prompt('Introduce hexa si quieres un color hexadecimal. Introduce rgb si quieres un color rgb: ');
//     let cuantity = prompt('Introduce el número de colores que quieres generar: ');
//     if(selection === 'hexa') {
//         let = arrHex = [];
//         for (let i = 0; i < cuantity; i++) {
//             let color = "#";
//             for (let j = 0; j < 6; j++) {
//               color += Math.floor(Math.random() * 16).toString(16);
//             }
//             arrHex.push(color);
//           }
//           return (arrHex.length > 1) ? arrHex : arrHex[0];
//     } else if(selection === 'rgb') {
//         let arrRgb = [];
//         for(let i = 0; i < cuantity; i++) {
//             let color = "rgb";
//             for(let j = 0; j < 1; j++) {
//                 color = color + '(' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ')';
//             }
//             arrRgb.push(color);
//         }
//         return (arrRgb.length > 1) ? arrRgb : arrRgb[0];
//     }
// }
// console.log(generateColors());


// Llame a su función shuffleArray, toma un array como parámetro y devuelve un array mezclada
function shuffleArray(arr) {
    for(let i = arr.length - 1; i > 0; i--) {
        let random = Math.floor(Math.random() * (i + 1));
        let temp = arr[i];
        arr[i] = arr[random];
        arr[random] = temp;
    }

    return arr;
}
console.log(shuffleArray(['hola', 'mundo', 'cebolla', 'mango']))

// Llame a su función factorial, toma un número entero como parámetro y devuelve un factorial del número.
function factorial(num) {
    let factorial = 1;
    for(let i = 1; i <= num; i++) {
        factorial *= i;
    }

    return factorial;
}
console.log(factorial(5));

// Llame a su función isEmpty, toma un parámetro y verifica si está vacío o no.
function isEmpty(param) {
    if(param.length === 0) {
        return 'El parámetro está vacío';
    } else {
        return param;
    }
}
console.log(isEmpty(''));

// Llame a su función sum, toma cualquier cantidad de argumentos y devuelve la suma.
function suma(...args) {
    let sum = 0;
    for(let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
}
console.log(suma(5, 8, 2))

// Escriba una función llamada sumOfArrayItems, toma un array como parámetro y retorna la suma de todos los elementos. Compruebe si todos los elementos de la matriz son tipos de números. Si no, dé una respuesta razonable.
function sumOfArrayItems(arr) {
    let sum = 0;
    for(let i= 0; i < arr.length; i++) {
        if(typeof arr[i] === 'string') {
            return 'No es posible sumar el array porque contiene cadenas de texto.'
        } else if(typeof arr[i] === 'number') {
            sum += arr[i];
        }
    }
    return sum;

}
console.log(sumOfArrayItems([2, 9, 6]))

// Escribe una función llamada average, toma un array como parámetro y retorna el promedio de los elementos. Compruebe si todos los elementos de la matriz son tipos de números. Si no, dé una respuesta adecuada.
function average(arr) {
    let sum = 0;
    for(let i= 0; i < arr.length; i++) {
        if(typeof arr[i] === 'string') {
            return 'No es posible sumar el array porque contiene cadenas de texto.'
        } else if(typeof arr[i] === 'number') {
            sum += arr[i];
        }
    }
    return Math.round(sum / arr.length);
}
console.log(average([16, 15, 15,100, 627]));

// Escriba una función llamada modifyArray que tome un array como parámetro y modifique el quinto elemento del array y retorna el array. Si la longitud del array es inferior a cinco, retorna 'elemento no encontrado'.
// console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
// ['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
// ['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
//   'Not Found'
function modifyArray(arr) {
    if(arr.length >= 5) {
        for(let i = 0; i < arr.length; i++) {
            if(i === 4) {
                arr[i] = arr[i].toUpperCase();
            }
        }
        return arr;
    } else {
        return 'Not found';
    }
}
console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']));
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']));
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']));

// Escribe una función llamada isPrime, que verifica si un número es un número primo.
function isPrime(numero) {
    if (numero == 0 || numero == 1 || numero == 4) return `${numero} no es primo`;
	for (let i = 2; i < numero / 2; i++) {
		if (numero % i == 0) return `${numero} no es primo`;
	}
	return `${numero} es primo`;
}
console.log(isPrime(4));

// Escriba una función que verifique si todos los elementos son únicos en un array.
function unique(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] === arr[j]) {
                return 'Hay elementos repetidos';
            }
        }
    }
    return 'Todos los elementos son únicos';
}
console.log(unique([8, 9, 13, 12, 1, 'string', 'string']));

// Escriba una función que verifique si todos los elementos de un array son del mismo tipo de datos.
function uniqueData(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(typeof arr[i] === typeof arr[j]) {
                return 'Hay tipos de datos repetidos';
            }
        }
    }
    return 'Todos los tipos de datos son únicos';
}
console.log(uniqueData([1, 'string', true, false]));

// El nombre de las variables de JavaScript no admite caracteres o símbolos especiales, excepto $ o _. Escriba una función isValidVariable que verifique si una variable es válida o inválida.
function isValidVariable(variable) {
    let pattern = /^[$a-zA-Z_][$a-zA-Z0-9_]*$/;
    return pattern.test(variable);
}
console.log(isValidVariable('$'));
console.log(isValidVariable('*4lor'));


// Escriba una función que devuelva un array de siete números aleatorios en un rango de 0-9. Todos los números deben ser únicos.
// sevenRandomNumbers()[(1, 4, 5, 7, 9, 8, 0)];
function sevenRandomNumbers() {
    const uniqueNumbers = [];
    while(uniqueNumbers < 7) {
        const randomNumber = Math.floor(Math.random() * 9);
        if(!uniqueNumbers.includes(randomNumber) || !unique)
    }
}
console.log(sevenRandomNumbers());
// Escriba una función llamada reverseCountries, toma el array de países y primero copia el array y retorna el array original invertido