const colors = ["red" , "blue", "yellow" , "silver"];

const init = ()=>{
    createBtns();
}
//calls the createBtns

const createBtns = () =>{
    colors.forEach(color => {
        createElement(color);
    });
}
//uses create element on the colors array

const createElement = (color)=>{
    const newBtn = document.createElement("button");
    newBtn.innerHTML=color;
    newBtn.addEventListener("click",()=>{
        newBtn.style.background=color;
    })
    document.body.append(newBtn);
}
// creates a buttton with the color of "color" and adds an event that colors this button the color on click


init();