let x='age'
let person={
    Name:"kawser Ahmed",
    address:"Dhaka",
    age:24,
}
//Display object
console.log("All object",person);

//Accesing object element
console.log("accesing one property",person.Name);

//updating object element
person.address="Uttara"

console.log("After updating ",person);

//accessing element with variable

console.log(person[x]);

//adding property and value to the object

person.height=5.8

console.log("after Adding",person);