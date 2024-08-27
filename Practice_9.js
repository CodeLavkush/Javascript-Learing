// let promise = new Promise((resolve, reject)=>{
//     setTimeout(()=> resolve("done"), 5000)
// })


// promise.then(alert);

// promise.catch(alert);


// function loadScipt(src, callback){
//     let script = document.createElement('script');
//     script.src = src;
//     script.onload = () =>{
//         callback(script);
//     }
//     document.head.append(script);
// }

// async function scriptCall(){
//     return await loadScipt("https://cdnjs.cloudflare.com/ajax/libs/script.js/2.0.2/script.min.js",    (script)=>{
//     alert('script is loaded')
//     alert('script.src')
// });
// }

// scriptCall();
// async function ramesh() {
//     return 8;
// }

// ramesh().then(alert)

// let promise = new Promise((resolve, reject)=>{
//     // setTimeout(()=> resolve('hi'), 3000);
//     setTimeout(()=> reject("error"), 3000);
// })


// // promise.then(console.log);
// promise.catch(console.log)

// function rejectPromise(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             reject("error")
//         }, 3000);
//     })
// }

// async function handlePromises() {
//     try{
//         let result = await rejectPromise();
//         console.log(result)
//     }
//     catch(error){
//         console.log(error);
//     }

// }
// handlePromises();


// function allPromises(){
//     let firstPromise = new Promise((resolve, reject)=> resolve('hi'));
//     let secondPromise = new Promise((resolve, reject)=> resolve('hello'));
//     let thirdPromise = new Promise((resolve, reject)=> resolve('bye'));

//     return Promise.all([firstPromise,secondPromise,thirdPromise]);
// }

// async function checkValues(params) {
//     try{
//         allPromises().then(console.log);
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// checkValues();



