// *********Arrays***********
// It is normally call by reference 
// can be change it's lenth
// Elements can be mix of datatpes

const arr1=[10,11,12,13,14,15]
console.log(arr1)

const arr2=["Thor", "Captain","Spiderman"]
console.log(arr2)

arr1.push(20)
console.log(arr1);
arr1.pop()
console.log(arr1);

console.log(arr1.includes(12));
console.log(arr1.indexOf(11));
console.log(arr1.indexOf(100));

const arr3=arr1.join(" "); // can be give place separaters
console.log(arr1)
console.log(arr3) // it is string

const a1=["Thor", "Captain","Spiderman"]
const a2=["Batman", "Superman","flash"]

const a3=a1.concat(a2)
const a4=[...a1,...a2] // For concatination this method is normaly used
 
console.log(a3);
console.log(a4);

const a5=[10,12,15,[100,102,115],25,26,[200,201,202]]
const a6=a5.flat(Infinity)

console.log(a5);
console.log(a6);

const a=10
const b=20
const c=30

const a7=Array.of(a,b,c);
console.log(a7);