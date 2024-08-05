// console.log("Ahemad")

// Difault is 

// Var is not score determind

const  accountId=10
// accountId =2; // Not allowed

let accountMail="ahemad@54245"
let accountLoan // Undefined
// console.table([accountId,accountMail,accountLoan]);

// console.log(accountId,accountLoan,accountMail)

// alert(3+10) // we use NodeJS not React

let name="Ahemad"
let num=10;
let is_married=true;

console.log(typeof num);
console.log(typeof undefined); // undefined
console.log(typeof null); // object

// care full on conversion
// null --> 0;
// undefined --> NaN;
// string with wrong number like "315ab1" --> NaN

// ***********************conversions***************

let num1=10;
let num2 =Number("20")

console.log(num1);
console.log(num2);

console.log("10"+20)
console.log(10+"20")

console.log("1"+ 20)
console.log(10+ 20 + "50") // 3050
console.log("10"+ 20 + 50) // 102030

// **************Comparitions***************

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

// "=="  and ">" "<" ">=" "<=" are work differently

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);

// ********** strict Check ******
console.log("2" === 2) // it also check the the datatypes


// Datatypes summary
// Datatypes 2 types 

// Primitive --> call by value --> 7 --> Number , boolean , String , symbol , null , undefined , bigint

// Ṇon Premetive  -- > call by reference --> Array , Object , Functions
//  JS is Dynamic type language


// ******************************
//  Stack (Primitive), Heap (Ṇon Premetive)