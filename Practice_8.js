// let btn = document.querySelectorAll(".btn");

// btn[0].addEventListener("click", ()=>{
//     alert("Hi how are you!")
// })

// btn[1].addEventListener("click", ()=>{
//     alert("Uwwu")
// })

// btn[2].addEventListener("click", ()=>{
//     alert("heyyyy")
// })

// btn[3].addEventListener("click", ()=>{
//     alert("hmmmm")
// })

let btn = document.querySelector(".btn");


btn.addEventListener('click', ()=>{
    addBookMarks();
});

function addBookMarks(){
    let links = document.querySelector(".LinkIn");
    let bmName = document.querySelector(".bmName");
    let container = document.querySelector(".container");

    let aLink = document.createElement('a')
    aLink.href = links.value;
    aLink.textContent = bmName.value;

    container.appendChild(aLink);
}

