/* Exercise #1
We'll build the industry plant calendar from the opening exercise.
Part 1
First, build a function called "businessHours". Similar to the day of the week class exercise, this function 
should accept two parameters: dayNumber and hourNumber.
By reading the dayNumber and the hourNumber, your program should print whether it is business hours or not. 
It should return true if it is business hours, and false if not.
function businessHours(dayNumber, hourNumber)
Obs: consider business hours 9am - 6pm. Use the 24-hour clock system (6pm = 18). */

function businessHours(dayNumber, hourNumber) {
    if (hourNumber >= 9 && hourNumber <= 18 && dayNumber > 0 && dayNumber < 6) {
    alert (true);
    } else {
    alert (false);
    }
}
businessHours(6,19);


/* Part 2
Now, create the function getDayNumber.
It should accept two parameters: janFirstDayNumber and yearDayNumber.
The yearDayNumber will be an int ranging from 0 to 365.
janFirstDayNumber will be an int ranging from 0 to 6, representing the day of the week of January 1st.
Your function should then calculate and return the day of the week corresponding to the yearDayNumber passed.
Hint: use the remainder operator (%), dividing your yearDayNumber by 7. */

var getDayNumber = parseInt(prompt("Dame un día del 0 al 365"));
var calculator = getDayNumber % 7
switch (calculator){
    case 1: 
        console.log("Lunes")
        break;
    case 2:
        console.log("Martes")
        break;
    case 3:
        console.log("Miercoles")
        break;
    case 4:
        console.log("Jueves")
        break;
    case 5:
        console.log("Viernes")
        break;
    case 6:
        console.log("Sabado")
        break;
    case 7:
        console.log("Domingo")
        break;
}

/*Part 3
Finally, build a function that, from a yearDayNumber (int, 0-365) and an hourNumber (int, 0-23), 
returns true if it is business hours. */
/* function businessHours(yearDayNumber, hourNumber) {
    var getDayNumber = parseInt(prompt("Dame un día del 0 al 365"));
    var calculator = getDayNumber % 7
switch (calculator){
    case 1: 
        console.log("Lunes")
        break;
    case 2:
        console.log("Martes")
        break;
    case 3:
        console.log("Miercoles")
        break;
    case 4:
        console.log("Jueves")
        break;
    case 5:
        console.log("Viernes")
        break;
    case 6:
        console.log("Sabado")
        break;
    case 7:
        console.log("Domingo")
        break;
}
var result = calculator 
}
var hourNumber = parseInt(prompt("Dame una hora, considerando del 0 al 23."));
    if (hourNumber >= 9 && hourNumber <= 18 && result > 0 && result < 6) {
        alert (true);
    } else {
        alert (false);
    }
    businessHours(); 
*/