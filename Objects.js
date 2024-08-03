// *********Objects************

const mySym= Symbol("mySymbol")
let me={
	name : "Tafheem",
	"Full Name": "Tafheem Ahemad",
	roll : 122,
	Age : 20,
	location : "Rorkela",
	email : "ahemad@goggle.com",
	[mySym] : "me vs me" // this is a symbol , So this his Syntax
}

console.log(me.name);
console.log(me["Full Name"]);
console.log(me[mySym]);


me.newfunction1=function(){
	console.log("Hii , I am Here");
}

me.newfunction2=function(){
	console.log(`I am ${this["Full Name"]}`) // Using This to reference this object variables
}

me.newfunction1();
me.newfunction2();

const myobject2= new Object(); // It is a Singleton Object



const obj1={ a : "1" , b:"2"}
const obj2={ c : "1" , d:"2"}

const combine_obj={...obj1,...obj2}

console.log(combine_obj);


const obj4={
	a: "10",
	b: '20',
	c: "30"
}

console.log(Object.values(obj4));
console.log(Object.keys(obj4)); // Give a array 
console.log(Object.entries(obj4));  


//  DeStructuring
const obj5={
	name : "Tafheem Ahemad",
	age:20,
}

const {name : na}=obj5 // Destucturing Part
console.log(na);

