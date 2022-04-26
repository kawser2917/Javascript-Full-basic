//Declaring array

let arr1=["one","two","three","Four","Five"]
let arr2=["six","seven","eight"]

console.log("Normal Array",arr1);

console.log("Array to string: ",arr1.toString());

//Shift() 
//Method used for removing first element from the array

// console.log("Shift Method: ",arr1.shift());
console.log("After Shifting Main Array: ",arr1);


//unshift()
//This method used for adding new element into the array

arr1.unshift(arr1.shift())//shift will return first element from the array
console.log("After use of unshift: ",arr1);

//concat()
//this method used for adding two array

let arr3=arr1.concat(arr2)
console.log("After concat: ",arr3);

//splice()
//this method add element to the array. if has two parameter if we want to remove also we can remove any element
//If we don't remove any element sometimes we can get empty array. wtf javascript
 
console.log(arr3.splice(2,1,"nine","ten"));