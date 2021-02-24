let express = require('express');
let app = express();

app.use(express.static('public'));//GET
app.use(express.json());//POST


let users = [];
let id = 1;

app.get('/users/:id',(req,resp)=>{//GET
    let user = getUser(req.params.id);
    if(!user)
        resp.send('Rejected!');
    else
        resp.send(user);
})

app.post('/users',(req,resp)=>{//POST
    let newUser = req.body;
    newUser.id = id;
    id++;
    users.push(newUser);
    resp.send('Created');
})

app.put('/users/:id',(req,resp)=>{//PUT
    let user = getUser(req.params.id);
    let data = req.body;
    if(!user)
        resp.send('Rejected');
    else{
        for(let key in data){
            user[key] = data[key];
        }
        resp.send("Updated");
    }
})

app.delete('/users/:id',(req,resp)=>{
    let user = getUser(req.params.id);
    if(user){
        users.splice(users.indexOf(user),1);
        resp.send("Removed!");
    }
    else{
        resp.send("Rejected");
    }
})

function getUser(id){
    for(let i = 0;i < users.length;i++){
        if(users[i].id == id)
            return users[i];
    }
    return null;
}
app.listen(3000,() => console.log('Listening 3000...'));
