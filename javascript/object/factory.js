function createPerson(name,address){
    return{
        name,
    address,
    speak(){
        console.log("hello ",this.name);
    }

    }
    

}

let person1=createPerson("kawser","Dhaka")

person1.speak()