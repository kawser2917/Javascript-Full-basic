function adder(num1,num2){
    let result=num1+num2
    console.log(result);
}
adder(8,9)


//Default argument in function. If we forget to pass an argument to parameter then it will show nan. for fixing this we can pass a default argument to parameter

function User(name="kawser"){
    console.log(name);
}
User()// i dont pass anyting but it will show kawser because i have passed default argement to a parameter