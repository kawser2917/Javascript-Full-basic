//For loop in array
let arr=["kawser",'Kamrul','Kaharul']

for (let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}

//foreach loop in array

let myArray=['One','two','Three','Four','Five','Six']

myArray.forEach(function(element,index){
    console.log("Element: ",element,"Index: ",index);
})


//for...of in array

for (element of myArray){
    console.log(element);
}

//if we use for...of and want to see index then we need to use entries method

for ([element,index] of myArray.entries()){
    console.log(element," ",index);
}


//For...in loop... basically it is used for object 

for (p in myArray){
    console.log(p);
    console.log(myArray[p]);
}
