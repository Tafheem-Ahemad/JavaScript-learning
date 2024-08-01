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

