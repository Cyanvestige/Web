const { response } = require('express');
let express = require('express');
let app = express();


app.get('/:Category',(req,resp) => {
    let page;
    if(req.query.page == undefined){
        page = 1
    }else{
        page = req.query.page
    }
    resp.send(`<h1>Category:${req.params.Category} </h1><h4>Page: ${page}</h4><h4>${req.query.number}</h4>`);
})


app.listen(3000,function(){
    console.log('Listening 3000...');
})