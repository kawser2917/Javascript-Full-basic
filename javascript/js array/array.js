let arr=["kawser","kamrul","Kaharul"]

//watching arr variable is which type
console.log(typeof(arr));
console.log(arr);

//accessing array elemt
console.log(arr[1]);

//changing array element

arr[0]="Khairul"

console.log("After updating: ",arr);

//adding array element 

arr.push('khadem')
console.log("After pushing: ",arr);

//Removing array element
arr.pop()
console.log(arr);

//Empty items

arr[15]='shipon' //this will add shipon at position 15 rest of space will be empty
console.log(arr);
