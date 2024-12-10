
const init = () =>{
    printFood();
}


const printFood = () =>{
    const cakeText = document.createElement('p');
    const food = new Food(400,"cake",20,"sweet");
    cakeText.innerHTML = food.print();
    document.getElementById('root').append(cakeText);

}


init();


