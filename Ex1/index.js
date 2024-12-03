const days = ["sunday", "monday", "tuesday", "wednesday", "thursday","friday", "shabat"];
let dayIndex = 0;
//elements
const nextBtn = document.getElementById("next-btn");
const backBtn = document.getElementById("back-btn");
const dayDispay = document.getElementById("day-txt");
//

const init = ()=>{
    reDisplay();
}

const reDisplay = () =>{
    dayDispay.innerHTML=days[dayIndex];
    nextBtn.addEventListener("click",nextDay);
    backBtn.addEventListener("click",prevDay);
}

const nextDay = ()=>{
    if(dayIndex !== days.length-1){
        dayIndex++;
    }
    else{
        dayIndex=0;
    }
    reDisplay();
}

const prevDay = ()=>{
    if(dayIndex !== 0){
        dayIndex--;
    }
    else{
        dayIndex=days.length-1;
    }
    reDisplay();
}

init();