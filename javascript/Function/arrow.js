//simple arrow function
const data=()=>{
    console.log("Hello World");
}
data()

//arrow function as a parameter

let sum=(num1,num2)=>{
    let result=num1+num2
    console.log(result);
}
sum(5,5)

//retrun in arrow function

let add=(num1,num2)=>num1+num2

add(5,6)//this line will execute but will not show it will just store value
console.log(add(6,6));



