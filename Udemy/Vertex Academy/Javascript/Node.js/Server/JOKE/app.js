// let joke = require('one-liner-joke');
// let express = require('express');
// let app = express();
// app.get('/joke/:Num',(req,resp)=>{
//     let num = req.params.Num;
//     let j = '';
//     for(let i = 0;i < num;i++){
//         j += `<h4>${joke.getRandomJoke().body}</h4>***`;
//     }
//     resp.send(j);
// })

// app.get('/joke/:Category/:Num',(req,resp)=>{
//     let num = req.params.Num;
//     let type = req.params.Category;
//     let j = '';
//     for(let i = 0;i < num;i++){
//         j += `<h4>${joke.getRandomJokeWithTag(type).body}</h4>***`;
//     }
//     resp.send(j);
// })

// app.get('*',(req,resp)=>{
//     resp.send("<h4>Message 404 It's not funny</h4>");
// })

// app.listen(3000,function(){
//     console.log('Listening 3000...');
// })

let joke = require('one-liner-joke');
let express = require('express');
let app = express();

app.get('/joke/:Category/:Num',(req,resp)=>{
    let num = req.params.Num;
    let type = req.params.Category;
    let j = '';
    for(let i = 0;i < num;i++){
        j += `<h4>${joke.getRandomJokeWithTag(type).body}</h4>***`;
    }
    resp.send(j);
})
app.get('/joke/:Num',function(req,resp){
    let num = req.params.Num;
    let j = "";
    for(let i = 0;i < num;i++){
        j+=`<h4>${joke.getRandomJoke().body}</h4>`;
    }
    resp.send(j);
})

app.get('*',(req,resp) =>{
    let j = "<h4>404</h4>";
    resp.send(j);
})
// app.get('/joke/:Tag/:Num',(req,resp) =>{
//     let tag = req.params.Tag;
//     let num = req.params.Num;
//     let j = '';
//     for(let i = 0;i < num;i++){
//         j+= `<h4>${joke.getRandomJokeWithTag(tag).body}</h4>`;
//     }
//     resp.send(j);
// })

app.listen(2999,function(){
    console.log('listening');
})