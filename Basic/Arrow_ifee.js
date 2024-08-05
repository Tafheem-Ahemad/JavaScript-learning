// ******Arrow Functions******

let f1=function(num1,num2){
	return num1 +num2
}

let f2= (num1,num2) => {
	return num1 +num2
}

let f3= (num1,num2) => num1 +num2   // No need to write "return" if we donot use {}


let f4= (num1,num2) => (num1 +num2)   // No need to write "return" if we donot use {}

let f5= (num1,num2) => ({num1 , num2})   // return as Object


console.log(f1(1,2));
console.log(f2(10,20));
console.log(f3(100,200));
console.log(f4(1000,2000));
console.log(f5(10000,20000));



// **********Immediately Invoked Function Expressions (IIFE)******


(function (a,b){
	console.log(a+b);
})(12,12);                 // Need a semicolon to stop the IIFE


((a,b) => {
	console.log(a+b);
})(15,15)