//Declare and Use Functions
//EJERCICIO 1
/* Maria has to calculate the cost of her payments for the month. For every transation there is a $3 fee and 
a 0.1% (0.01) interest fee. Can you help her calculate her costs?
Return the value of what she should be paying. */
function payment(transaction, total){
    var transactions = parseInt(prompt("Number of transactions"));
    var total = parseInt(prompt("Total cost of payments"));
    alert ("The final payment is: " + (transactions*3) + total * 1.01);
}
payment();