// function getRandNum(lo,hi,func){
//     setTimeout(()=>{
//         let randnum = Math.floor(Math.random() * (hi - lo + 1)+lo);
//         func(randnum);
//     },2000);
// }

function getOddRandNum(lo,hi){
    let promise = new Promise((resolve,reject) =>{
        setTimeout(()=>{
            let randnum = Math.floor(Math.random() * (hi - lo + 1)+lo);
            if(randnum % 2 === 1)
                resolve(randnum);
            else
                reject("The number is even");
        },2000);
    })
    return promise;
} 
function printNum(n){
    console.log(n);
}

async function func(){
    try{
        let randnum = await getOddRandNum(2,5);
        printNum(randnum);
        console.log(randnum);
    }catch(msg){
        console.log(msg);
    }    
}
// getOddRandNum(5,9,printNum)
//     .then(printNum)
//     .catch((m)=> {
//         console.log(m)
//     });
func();
