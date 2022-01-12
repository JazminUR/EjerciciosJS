//TIPOS DE DATOS Y VARIABLES
//Part 1 Type Converter

console.log(Number(false));
console.log(String(false));
console.log(Boolean(false));

console.log(Number(true));
console.log(String(true));
console.log(Boolean(true));

console.log(Number(0));
console.log(String(0));
console.log(Boolean(0));

console.log(Number(1));
console.log(String(1));
console.log(Boolean(1));

console.log(Number("0"));
console.log(String("0"));
console.log(Boolean("0"));

console.log(Number("000"));
console.log(String("000"));
console.log(Boolean("000"));

console.log(Number("1"));
console.log(String("1"));
console.log(Boolean("1"));

console.log(Number(Nan));
console.log(String(Nan));
console.log(Boolean(Nan));

console.log(Number(Infinity));
console.log(String(Infinity));
console.log(Boolean(Infinity));

console.log(Number(-Infinity));
console.log(String(-Infinity));
console.log(Boolean(-Infinity));

console.log(Number(""));
console.log(String(""));
console.log(Boolean(""));

console.log(Number("20"));
console.log(String("20"));
console.log(Boolean("20"));

console.log(Number("Twenty"));
console.log(String("Twenty"));
console.log(Boolean("Twenty"));

console.log(Number(null));
console.log(String(null));
console.log(Boolean(null));

console.log(Number(undefined));
console.log(String(undefined));
console.log(Boolean(undefined));

console.log(Number(undefinited));
console.log(String(undefinited));
console.log(Boolean(undefinited));

//PART 2; New contender
//Complete each challenge individually. Use all resources available.
//Store your birth year in a variable. Store a future year in another variable. Calculate your possible ages 
//for the future year and display it in the console. Example: If you were born in 1988, then in 2026 you’ll be 
//37 or 38 (depending on the month in 2026).
var añoNacimiento = 1999;
var añoFuturo = 2050;
var edad = añoFuturo - añoNacimiento;

console.log("Si naciste en " + añoNacimiento + ", en " + añoFuturo + " tendrás " + (edad - 1) + " o " + edad + " años dependiendo del mes.");



//Challenge 2: Create an information card
//Create a card holding 3 pieces of information about a person, such as Name, Location, and Hobby. Each piece 
//of information should be a variable. Display the card with the information in the correct place. Example: 
//“Hi, my name is John. I live in South Africa and enjoy drinking homemade wine.”
var nombre = "Juanito";
var ubicacion = "Perú";
var hobby = "tejer";

console.log("Hola, mi nombre es " + nombre + ". Vivo en " + ubicacion + " y me gusta " + hobby + ".");