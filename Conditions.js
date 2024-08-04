// if-else swith



let num=10;
if(num>10){
	console.log(`Number greater than 10`);
}else if(num==10){
	console.log(`Number is equal to 10`);
	
}else console.log(`Number smaler than 10`);


// falsy values
// false, 0, -0, BigInt (0n), "", null, undefined, NaN

if( false == 0){  // Both are false, soo overal ans is true
	console.log(`exicuated`);
}


// ******** Ternary Operater *******
let isLoggedin= true
let ans= (isLoggedin) ? 10 : 20

console.log(ans);


// Nullish Coalescing Operator (??): null undefined

let val1=null;
val1 = null ?? 40;
let val2;
val2 = undefined ?? 500;

console.log(val1);
console.log(val2);
