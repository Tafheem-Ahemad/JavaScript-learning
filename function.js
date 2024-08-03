
let f1= function (){
	console.log("Ahemad");
}

f1();

let f2= function (num1 , num2){
	return (num1+num2);
}

console.log(f2(10,20));


// a data strean can be come;

const f3 = function (num1 ,num2 ,...num3){
	return num3 ;   // It give a array   any number can be come
}

console.log(f3(10,20,2,3,100));
console.log(f3(100,200));
