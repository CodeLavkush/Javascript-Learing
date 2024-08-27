function generateWord(firstWord, secondWord, thirdWord){
    let randNum = Math.floor(Math.random() * 10) + 1;
    if(randNum < 4){
        return firstWord;
    }
    else if(randNum > 4 && randNum <= 6){
        return secondWord;
    }
    else if(randNum > 6 && randNum <= 10){
        return thirdWord;
    }
    else{
        return firstWord;
    }
}

let adjectives = generateWord("Crazy", "Amazing", "Fire");
let ShopName = generateWord("Engine", "Foods", "Graments");
let AnotherName = generateWord("Bros", "Limited", "Hub");

let businessName = `${adjectives} ${ShopName} ${AnotherName}`;
console.log(businessName);

