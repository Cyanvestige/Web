let express = require('express');
let app = express();

app.use(express.static('public')); //GET
app.use(express.json());

let products = [];
let id = 1;

app.get('/products',(req,resp)=>{
    resp.send(products);
})

app.post('/products',(req,resp) => {
    let newProduct = req.body;
    newProduct.id = id;
    id++;
    products.push(newProduct);
    resp.send('Created')
})

app.put('/products/:id',(req,resp)=>{
    let product = getProductId(req.params.id);
    if(!product)
        resp.send("rejected");
    else
        product.price = req.body.price;
})

app.delete('/products/:id',(req,resp)=>{
    let product = getProductId(req.params.id);
    if(product){
        products.splice(products.indexOf(product),1);
        resp.send("Removed!");
    }
    else{
        resp.send("Rejected");
    }
})

function getProductId(id){
    for(let i = 0;i < products.length;i++){
        if(products[i].id == id)
            return products[i];
    }
    return null;
}
app.listen(3000,() => console.log('Listening 3000...'));