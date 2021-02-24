// function generateNum(quantity,min,max){
//     let promise = new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             if(min >= max)
//                 reject("min must smaller than max");
//             if(quantity <= 0) 
//                 reject("Quantity must larger than 0");
//             if(quantity > 0 && min < max){
//                 let arr = [];
//                 for(let i = 0;i < quantity;i++){
//                     arr[i] = Math.floor(Math.random() * (max - min + 1) + min);
//                 }
//                 resolve(arr);
//             }
//         },2000);   
//     });
//     return promise;
// }

// function sum(nums){
//     let sum = 0;
//     for(let i = 0;i < nums.length;i++){
//         sum += nums[i];
//     }
//     console.log("Numbers: " + nums);
//     console.log("Sum: " + sum);
// }

// // async function func(){
// //     try{
// //         let rand = await generateNum(3,1,6);
// //         sum(rand);
// //     }catch(msg){
// //         console.log(msg);
// //     }
// // }

// generateNum(3,1,10).then(sum).catch((msg)=>{
//     console.log(msg);
// })




function generateNum(quantity,min,max){
    let promise = new Promise((resolve,reject)=>{
        if(min >= max)
            reject("min >= max!");
        if(quantity <= 0)
            reject("quantity <= 0!");
        setTimeout(() => {
            let nums = [];
            for(let i = 0; i < quantity;i++){
                let random = Math.floor(Math.random() * (max - min + 1) + min);
                nums.push(random);
            }
            resolve(nums);
        }, 2000);
    });
    return promise;
}

function sum(nums){
    let sum = 0;
    for(let i = 0;i < nums.length;i++){
        sum += nums[i]; 
    }
    console.log("Numbers: " + nums);
    console.log("Sum: " + sum);
}

generateNum(3,1,10).then(sum).catch((msg)=>{
    console.let(msg);
})

// async function func(){
//     try{
//         let rand = await generateNum(3,1,10);
//         sum(rand);
//     }catch(msg){
//         console.let(msg);
//     }
// }

// func();