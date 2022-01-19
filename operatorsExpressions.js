//EXERCISE #1
//You have a list of names: var names = ["Maria", "Antony", "Joy", "Juan"]
//Part 1
//Write a function to insert a name to the end of the list. Add your own name to the end of the list.
var names = ["Maria", "Antony", "Joy", "Juan"];
names.push("Jazmín");
//console.log(names);

//Part 2 | OK
//Write a function that takes in a name and checks if the list has that name. It should return back a boolean - true/false.
function encontrar(y){
    let existName = false;
    names.forEach(function(elemento){
        if(elemento === y){
            existName = true;
        }
    })
    //console.log(existName);
}
encontrar("Jazmín");

//Part 3
//Write a function that takes in a list of names. This function should compare the list taken into the names 
//list you currently have. The function should pass back an array with the names that are in both lists.
//var names = ["Maria", "Antony", "Joy", "Juan"];
let newArray = []
function addNames(anotherListOfNames){
    anotherListOfNames.forEach(function(element){
        newArray.push(element);
    })
    names.forEach(function(element){
        newArray.push(element);
    })
    console.log(newArray);
}
addNames(["Juanita", "Larissa", "Germán"]);

//Part 4
//Write a function that takes in a list of names and returns a list of Integers with the length of the names 
//in the same order as received. Hint use the push function
let lengthOfNames = [];
function getLengthOfNames(listOfNames){
    listOfNames.forEach(function(element){
        lengthOfNames.push(element.length);
    })
}
getLengthOfNames(["Otniel", "Denise", "Victoria"]);
console.log(lengthOfNames);

// Exercise #2
// What do the following expressions evaluate to?
console.log(false || (true && false));
console.log(true || (11 + 12));
console.log((31 + 22) || true);
console.log(true && (1 + 7));
console.log(false && (3 + 4));
console.log((1 + 2) && true);
console.log((32 * 4) >= 129);
console.log(false !== !true);
console.log(true === 4);
console.log(false === (847 === '847'));
console.log(false === (887 == '887'));
console.log((!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false);

//Exercise #3
//Write a function that logs whether a number is between 0 and 25 (inclusive), between 26 and 100 (inclusive), 
//greater than 100, or less than 0.
//numberRange(25);   // '25 is between 0 and 25'
//numberRange(75);   // '75 is between 26 and 100'
//numberRange(125);  // '125 is greater than 100'
//numberRange(-25);  // '-25 is less than 0'
function rangeOfNumber(number){
    if (number >= 0 && number <= 25){
        console.log(number + " is between 0 and 25");
    }
    else if (number >= 26 && number <= 100){
        console.log(number + " is between 26 and 100");
    }
    else if (number > 100){
        console.log(number + " is greater than 100");
    }
    else {
        console.log(number + " is less than 0");
    }
}
rangeOfNumber(-25);