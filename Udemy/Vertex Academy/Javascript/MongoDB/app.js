let mongoose = require('mongoose');
let Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/users').then(() => {
    console.log('Connected to MongoDB...');
}).catch((error) => {
    console.log('Something is Wrong.');
});

let userSchema = new Schema({
    login: String,
    password: {
        type: String,
        minlength:4
    },
    age: {
        type: Number,
        min: 0
    },
    student: Boolean,
    country: String
});

let User = mongoose.model('User',userSchema);

let user1 = new User({
    login:"John",
    password:"9999",
    age:41,
    student:true,
    country:"Cna"
});

// //Create
// user1.save().then(()=>{
//     console.log("Done");
// })

// //Get
async function getUsers(){
    let users = await User
                        .find()
                        .limit(3)
                        .where('age').gt(40).lt(100)
                        .sort({age: 1})
                        .select({login: true,password:true});
    console.log(users);
}

// //Update
async function updateUser(){
    //Option1
    let user = await User.findOne({login: "Nancy"});
    user.age = 30;
    user.save();
    console.log("Done!");
    //Option2
    User.findOneAndUpdate({login:'Peter'},{password:5678},()=>{
        console.log("Done!");
    })
}

// //Delete
async function deleteUser(){
    let user = await User.deleteOne({login:"Nancy"});
    console.log(user);
}
getUsers();
updateUser();
deleteUser();