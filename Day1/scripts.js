//hosting -: In hosting the variable declaration and function declaration will move to the top of the scope
//hosting will applicable only for var variable only not for let or const
// It run in both line by line and the (compiler when the out put is taken) in the code stack
//TDZ: when we declare the variable with let and var 
//example 1

var a ; // alrd been declared 
a = 10; // initialized
console.log(a);

//example 2

b = 20 // first initialized but will not show error
console.log(a);
var b; // can be  declared here

//example 3

c = 30; // firstly initialized but will show error

console.log(c);

let c; //can't be declared here
