//filter()
//we can do anything logically with filter method.. It also return an array


let num=[1,2,3,4,5]
let num2=num.filter(function(x) {
    return x>2
})

console.log(num2);