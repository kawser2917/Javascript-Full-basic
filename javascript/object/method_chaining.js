class Person{
    constructor(email,name){
        this.email=email
        this.name=name
        this.score=0
    }
    //method creating to an object
    login(){
        console.log(this.email,"Just Logged In");
        return this
    }
    logout(){
        console.log(this.email,"just Logged out");
        return this//this this will return logout method
    }
    updateScore(){
        this.score++
        console.log(this.score);
        return this
    }
}

let person1=new Person("kawser@gmail.com",'kawser')
let person2=new Person("kamrul@gmail.com","kamrul")

person1.login().updateScore().updateScore().logout()

//this is so much fun we can invoke how many times we want