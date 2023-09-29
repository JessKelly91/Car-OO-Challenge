class Vehicle{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk(){
        return "Beep."
    }
    toString(){
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}`
    }
}

class Car extends Vehicle{
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle{
    constructor(make, model, year){
        super(make,model, year);
        this.numWheels = 2;
    }
    revEngine(){
        return "VROOM!";
    }
}

class Garage{
    constructor(capacity){
        if(!Number.isInteger(capacity) || capacity <= 0){
            throw new Error ("capacity must be a positive number")
        }
        this.capacity = capacity;
        this.vehicles = [];
    }
    add(newVehicle){
        if(!(newVehicle instanceof Vehicle)){
            throw new Error ("Only vehicles are allowed in here!");
        }
        else if (this.vehicles.length >= capacity){
            throw new Error ("Sorry, we're full.");
        }
        else{
            this.vehicles.push(newVehicle);
            return "Vehicle added!";
        }
}