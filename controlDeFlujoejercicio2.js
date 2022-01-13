//EJERCICIO 2
/*Part 1
Ed would like a way to input 3 names of his friends. The output should be a console greeting to his friends 
saying: Welcome {name1}, {name2}, {name3}.*/
function names(a, b, c){
    var a = prompt("Tell me your name");
    var b = prompt("Tell another name");
    var b = prompt("Tell another name");
    console.log("Welcome " + a + ", " + b + ", " + c + ".");
}
names();

/* Part 2
Ed would like to create a function that takes in a birth year and returns the age.
i.e. 1990 returns 30 */
function age (year, date){
    var year = prompt("Tell me your year of birth");
    alert(2022-year);
} 
age();

/* Part 3
Ed would like to create a function that prints out, Welcome {name1}, you are {age1}. Welcome {name2}, you are 
{age2}. Welcome {name3}, you are {age3}. */
function nameAge(n1, n2, n3, a1, a2, a3){
    var n1 = prompt("Tell me your name");
    var a1 = prompt("Tell me" + n1 + "age");
    var n2 = prompt("Tell me your name");
    var a2 = prompt("Tell me" + n2 + "age");
    var n3 = prompt("Tell me your name");
    var a3 = prompt("Tell me" + n3 + "age");
}
