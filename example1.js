const arr = [1, 2, 3, 4, 5, 6];

// utilizar el método map de los arreglos para duplicar cada elemento
const arrDoble = arr.map( num => num * 2 ); //-> [2, 4, 6, 8, 10, 12]

// utilizar el método filter para filtrar los números pares de arr
const arrPairs = arr.filter( num => num % 2 == 0) //-> [2, 4, 6]

// utilizar el método reduce para sumar todos los elementos
const sum = arr.reduce( (acumulador ,nextValue) => acumulador + nextValue, 0) //-> 21
