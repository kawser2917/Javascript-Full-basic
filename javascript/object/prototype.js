function createPerson(email,name,address){
    this.name=name
    this.email=email
    this.address=address
    this.online=false
}

createPerson.prototype.login=function(){
    this.online=true
    console.log(this.name,"just logged in");
    return this

}

createPerson.prototype.logout=function(){
    this.online=false
    console.log(this.name,"just logged out");
    return this

}

let userone = new createPerson("kawser@gmail.com","kawser","dhaka")

userone.login().logout()