class Animal {
    // every animal has a favourite food
    public favFood: string;
    // shared by every object and typically doesn't make sense for the animal to have, but need to keep track of
    static numOfAnimals: number = 0;
    // initializes and sets certain values. everytime you use private, it automatically sets the value to a variable
    constructor (private name: string, private owner: string) {
        // everytime you a static class field you need to first use the class Name
        Animal.numOfAnimals++;
    }
    // if you use private on methods, subclasses wont be able to use it
    ownerInfo() {
        document.write(this.name + " is owned by " + this.owner + "<br />")
    }
    // class method 
    static howManyAnimals(): number{
        return Animal.numOfAnimals
    }
    // variable
    private _weight: number;

    get weight(): number{
        return this._weight
    }

    set _weight(weight: number) {
        this.weight = weight
    }

}

var spot = new Animal("Spot", "Doug")

spot.ownerInfo();
spot.weight = 100;


document.write("Spot's weight is" + spot.weight + "<br />")
document.write("# of animals: " + Animal.howManyAnimals() + "<br />")

// subclassing

class Dog extends Animal {
    constructor(name: string, owner: string) {
        super(name, owner);
        Dog.numOfAnimals++;
    }
}

var grover = new Dog('grover', 'jimmy')

document.write("Is a Dog an Animal : " + (grover instanceof Animal) + "<br />")
document.write("Does grover have a name : " + (name in grover) + "<br />")

