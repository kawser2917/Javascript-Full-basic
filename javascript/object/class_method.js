class Person{
    constructor(email,name){
        this.email=email
        this.name=name
    }
    //method creating to an object
    login(){
        console.log(this.email,"Just Logged In");
    }
    logout(){
        console.log(this.email,"just Logged out");
    }
}

let person1=new Person("kawser@gmail.com",'kawser')
let person2=new Person("kamrul@gmail.com","kamrul")

//accessing method

person1.login()

person1.login().login()
//oops this will show an typeError we can solve this problem with method chaining