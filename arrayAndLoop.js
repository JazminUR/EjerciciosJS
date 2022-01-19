//Exercise #1 | OK
// Part 1
//There are three people waiting for the bank. Their names, in order, are Sofia, David, and Juan. 
//Create an array that has these three names in order.
var people = ["Sofia", "David", "Juan"];
console.log(people);

//Part 2
//Two more people get added to the back of the line - Sara and Augustin. The first person in line is called to 
//the teller. What does the queue look like?
people.splice(0,1);
console.log(people); //Sofia goes to the teller

people.splice (0,2); //delete david and juan
console.log(people)

people.unshift("Augustin"); //add augustin
console.log(people);

people.unshift("Sara"); //add sara
console.log(people);

people.unshift("Juan"); //add juan
console.log(people);

people.unshift("David"); //add david
console.log(people);

//Part 3
/*It turns out David was saving a spot for his friend Renata. She shows up and goes behind him in the line. 
One more person (Elena) shows up and goes to the end of the line. What does the queue look like?*/
people.unshift("Renata"); //add renata
console.log(people);

people.splice(1,1); //Remove david
console.log(people);

people.unshift("David"); //add renata
console.log(people);

people.push("Elena"); //add elena to the back
console.log(people);

// Exercise #2 | OK
// Write a JavaScript program to construct the following pattern, using a nested for loop.
function Pyramid(number, symbol) {
    for (let num = 1; num <= number; num++) {
        let pyramid = "".padStart(num,symbol); //El metodo padStart rellena una cadena para tener el alcance de longitud dado, en este caso en la función es 5
        //console.log(pyramid); 
    }
}
Pyramid(5, "*");

//Exercise #3 | OK
// Write while loops to do the following:
// – Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time,
// as long as xValue remains positive. 
var Xvalue = 10;
while(Xvalue > 1){
    Xvalue = Xvalue - .5; 
    console.log(Xvalue);
}

// - Print all the odd numbers between 1 - 100.
for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0){
        console.log(i);
    }
}
// 1 / 2 = 0 ninguno y queda 1
// 5 % 2 === 0
// cuando es impar arroja 1, cuando es par arroja 0.
// !== es distinto a...

var iterator = 1;
while (iterator <= 100){
    if (iterator % 2 !== 0){
        //console.log(iterator);
    }
    iterator = iterator + 1;
}

// - Write a method with a while loop to print 1 through n in square brackets. 
// For example, if n = 6 print [1] [2] [3] [4] [5] [6]
var currentNumber = 1;
var n = 10;
var result = "";
while(currentNumber <= n){
    result = result + "[" + currentNumber + "] ";
    currentNumber = currentNumber + 1;
}
console.log(result);

/*- Write a method with a while loop that computes the sum of first n positive integers: 
sum = 1 + 2 + 3 + … + n
Examples:
n = 5 sum = 15
n = 19 sum = 190
*/
var init = 1;
var n = 20;
var sum = 0;
while(init <= n){
    sum = sum + init
    init = init + 1;
}
console.log(sum);