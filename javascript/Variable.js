// There are 4 ways to declare variable in javascript

//let example
let x=5
let y=5
x=8 //let and var variable can be changable 
let z= x+y
console.log("let example: ",z);
 
//var example
var a=5
var b=5
var c=a+b
console.log("var Example: ",c);

//const example

const pi=3.14
const p=9

//pi=4 //can not be changable 

console.log("const example: ",pi);


k=0
h=0
console.log('Not used anything: ',k+h);


//one statement multiple variable

let person ="kawser", address="Dhaka", location="uttara";
console.log(location);


//{' '} treated as string

l='5'+2+2;
console.log(l);//522 every number will be treated as string and concate all of them 
l=2+2+"5";
console.log(l);//45 int will be added first 
 
