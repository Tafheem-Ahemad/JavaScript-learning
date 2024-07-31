// **************String*********** 

const st1="Tafheem"
const st2="Ahemad"

console.log(st1+" "+st2)
console.log(`My name is ${st1} ${st2}`)

console.log(st1[0]);
console.log(st1.__proto__);

console.log(st1.toUpperCase());
console.log(st1.charAt(2));
console.log(st1.indexOf('e'));

const st3=st1.substring(0,4); // (Start index , end index) --> end index not include
console.log(st3);

const st4=st1.slice(-7,5)
console.log(st4);

const st5="      Ahemad    "
const st6=st5.trim(); //Trim all spaces from start and end
console.log(st5);
console.log(st6);


const st7="ahemad@gamail.com"
console.log(st7.replace("@","##"));

console.log(st7.includes("."))

console.log(st1.split(' '));


// *********************Number***********

const num=100.2675;
console.log(num.toFixed(2)); // pression on some lenth after "." decimal  // return as number
console.log(num.toPrecision(4)); // pression on from the start index // return as String

const n=10000000000;
console.log(n.toLocaleString("en-IN"))


// ****************Math*************

console.log(Math)
console.log(Math.abs(-42))
console.log(Math.round(42.15))
console.log(Math.ceil(42.15))
console.log(Math.floor(42.15))
console.log(Math.sqrt(10)) // string will be get


const max=20
const min=10
console.log(Math.floor(Math.random()*(max-min+1))+min);



// ************Date and Time*************

let myDate= new Date(); // It is a object
console.log(myDate.toString());
console.log(myDate.toDateString());

let customDate=new Date(2024,2,20);
console.log(customDate.toDateString()); 

let customDate1=new Date("2024-10-15");
console.log(customDate1.toDateString()); 

console.log(Math.floor(Date.now()/1000)); // Convert to second from milisecond

console.log(myDate.getMonth());
console.log(myDate.getDay());