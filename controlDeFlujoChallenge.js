//Challenge Yourself
/* A teacher wants to create a rubric for grading. The rubric is from 0 - 11.
Part 1
A student passes if they have a score greater than or equal to 5. Create a function that returns 
a boolean true or false.
Part 2
A student has an excellent grade if they score higher than 8. Add on to your function to print 
out "Excellent" for scores greater than 8.
Part 3
A student has a perfect grade if their score is 11. Add on to your function to print out "Perfect" 
for a score of 11. */
function grade (){
    var grade = parseInt(prompt ("Tell me the grade"));
    if(grade >= 5 && grade <= 8 ){
        alert(true);
    }
    else if(grade > 8 && grade < 11) {
        alert ("Excellent")
    } 
    else if (grade == 11){
        alert ("Perfect")
    }
    else if(grade >= 0 && grade < 5){
        alert(false);
    }
    else{
        alert("Out of range")
    }
}
grade();