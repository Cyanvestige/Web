let btnGet = document.querySelector('.btnSend');
let btnPost = document.querySelector('.btnPost');
let btnPut = document.querySelector('.btnPut');
let btnDelete = document.querySelector('.btnDelete');

btnGet.addEventListener('click',function(){//GET
    fetch('http://localhost:3000/users/1').then((response)=>response.json())
                                    .then((data)=>{console.log(data)});
});

btnPost.addEventListener('click',function(){//POST
    fetch('http://localhost:3000/users',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'text/plain'
        },
        body: JSON.stringify({
            login: 'Nancy',
            age: 20
        })
    }).then((response)=>response.text())
    .then((data)=>console.log(data),agea = 20);
});

btnPut.addEventListener('click',function(){//PUT
    fetch('http://localhost:3000/users/1',{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'text/plain'
        },
        body: JSON.stringify({
            login:"AAA",
            age:21 
        })
    }).then((response)=>response.text())
    .then((data)=>{console.log(data)});
});

btnDelete.addEventListener('click',function(){
    fetch('http://localhost:3000/users/1',{
        method:'DELETE',
    }).then((response)=>response.text())
      .then((data)=>{console.log(data)});
})