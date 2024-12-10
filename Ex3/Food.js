class Food{
    constructor(calories,name,price,taste){
        this.calories = calories;
        this.name = name;
        this.price = price;
        this.taste = taste;
    }

    /**
     * 
     */
    print() {
        const formatted = 
            `name :${this.name}\ncalories: ${this.calories}\nprice: ${this.price}$\ntaste: ${this.taste}`;

        return formatted;
    }
}