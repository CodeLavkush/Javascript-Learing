// let a1 = [1,2,3];
// let a2 = [4,5,6];
// let a3 = [7,8,9];


// console.log(a1.concat(a2,a3));

// let numbers = [1,2,4,5,6,8,10]

// let num = 22;
// numbers.push(num)
// console.log(numbers);


// let a = [10,20,25,66,60,70,30,44,77];
// let num = a.filter((e) =>{
//     if(e % 10 == 0){
//         return true;
//     }
// });

// console.log(num);

let a = 10;

let array = Array.from(Array(a + 1).keys())
let factorial = array.slice(1,).reduce((a,b)=>{
    return a*b;
})

let facFor = (a)=> {
    let fac = 1;
    for(let i = 1; i <= a; i++){
        fac = fac * i;
    }
    return fac;
}
console.log(facFor(a));
console.log(factorial);