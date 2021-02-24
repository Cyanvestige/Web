class User{
    constructor(login,password,age){
        this.login = login;
        this.password = password;
        this.age = age;
    }
}

let user1 = new User('Peter', '1234', 42);
console.log(user1);
