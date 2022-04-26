function createPerson(email,name,address){
    this.name=name
    this.email=email
    this.address=address
    this.login=function(){
        console.log(this.name,"just logged in");
    }
}

let userone =new createPerson("kawser@gmail.com","kawser","Dhaka")

userone.login()