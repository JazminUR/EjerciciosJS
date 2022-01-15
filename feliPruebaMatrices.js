/*Declara un array llamado "carreritas" con los siguientes valores: Lucía, Roberto, María, Jesús, Andrea y José (éste será el orden de sus posiciones dentro de una carrera). Deberás imprimir la clasificación actual.
La carrera continúa y se van modificando esas posiciones:
1-Andrea adelanta a María
2-José es descalificado de la carrera
3-Detrás de Lucía y antes de Roberto se clasifican tres nuevos corredores: Cristóbal, Fernanda y Armando
4-Hay un nuevo concursante que toma el primer puesto: Federico
5-Imprime la clasificación actual con las posiciones que se han modificado*/

var carreritas = ["Lucía", "Roberto", "María", "Jesús", "Andrea", "José"];
console.log(carreritas);

//Quita a Andrea
carreritas.splice(4,1);
console.log(carreritas);

//1-Andrea adelanta a María
carreritas.unshift("Andrea");
console.log(carreritas);

//Eliminamos a Lucía
carreritas.splice(1,1);
console.log(carreritas);

//Eliminamos a Roberto
carreritas.splice(1,1);
console.log(carreritas);

//Agregamos a Roberto
carreritas.unshift("Roberto");
console.log(carreritas);

//Agregamos a Lucía
carreritas.unshift("Lucía");
console.log(carreritas);

//2-Descalificamos a José
//Agregamos a Roberto
carreritas.pop();
console.log(carreritas);

//3-Detrás de Lucía y antes de Roberto se clasifican tres nuevos corredores: Cristóbal, Fernanda y Armando
//Eliminamos a Lucía
carreritas.splice(0,1);
console.log(carreritas);

//Agregamos a Armando
carreritas.unshift("Armando");
console.log(carreritas);

//Agregamos a Fernando
carreritas.unshift("Fernanda");
console.log(carreritas);

//Agregamos a Cristóbal
carreritas.unshift("Cristóbal");
console.log(carreritas);

//Agregamos a Lucía
carreritas.unshift("Lucía");
console.log(carreritas);

//4-Hay un nuevo concursante que toma el primer puesto: Federico
carreritas.unshift("Federico");
console.log(carreritas);

//5-Clasificación Actual
console.log(carreritas);

