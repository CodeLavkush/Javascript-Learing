let a = 10;
let b = 10;
let opt = '+';
let wrongChance;

function randomNum(){
    return Math.floor(Math.random() * 100) + 1;
}

if(opt === '+'){
    wrongChance = randomNum();
    if(wrongChance === 10){
        console.log(`Total: ${a - b}`)
    }
    else{
        console.log(`Total: ${a + b}`)
    }
}
else if(opt === '-'){
    wrongChance = randomNum();
    if(wrongChance === 10){
        console.log(`Total: ${a / b}`)
    }
    else{
        console.log(`Total: ${a - b}`)
    }
}
else if(opt === '*'){
    wrongChance = randomNum();
    if(wrongChance === 10){
        console.log(`Total: ${a + b}`)
    }
    else{
        console.log(`Total: ${a * b}`)
    }
}
else if(opt === '/'){
    wrongChance = randomNum();
    if(wrongChance === 10){
        console.log(`Total: ${a ** b}`)
    }
    else{
        console.log(`Total: ${a / b}`)
    }
}