// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle implements AbleToTow {
  override wheels: Wheel[];
  towingCapacity: number;
 
  // TODO: Declare properties of the Truck class
  // TODO: The properties should include vin, color, make, model, year, weight, top speed, wheels, and towing capacity
  // TODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[]), towingCapacity (number)
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[] = [new Wheel(), new Wheel(), new Wheel(), new Wheel()],
    towingCapacity: number
  )
  // TODO: Create a constructor that accepts the properties of the Truck class
    // TODO: The constructor should call the constructor of the parent class, Vehicle
    // TODO: The constructor should initialize the properties of the Truck class
    // TODO: The constructor should check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not
    {
      // Call the parent constructor to initialize common properties
      super(vin, make, model, year, weight, topSpeed, color);
  
      // Initialize the properties specific to the Truck class
      this.towingCapacity = towingCapacity;
  
      // If the wheels array is not provided or doesn't have 4 wheels, create default wheels
      if (!wheels || wheels.length !== 4) {
        this.wheels = [
          new Wheel(18, 'Default Brand'),
          new Wheel(18, 'Default Brand'),
          new Wheel(18, 'Default Brand'),
          new Wheel(18, 'Default Brand')
        ];
            } else {
      this.wheels = wheels;
      }
    }
  // TODO: Implement the tow method from the AbleToTow interface
  tow(vehicle: Truck | Motorbike | Car): void {
    // TODO: Get the make an model of the vehicle if it exists
    const vehicleDetails = `${vehicle.make} ${vehicle.model}`;
    // TODO: Check if the vehicle's weight is less than or equal to the truck's towing capacity
    if (vehicle.weight <= this.towingCapacity) {
      console.log(`${this.make} ${this.model} is towing ${vehicleDetails}.`);
    } else {
      console.log(`${vehicleDetails} is too heavy to be towed by ${this.make} ${this.model}.`);
    }
  }
    // TODO: If it is, log that the vehicle is being towed
    // TODO: If it is not, log that the vehicle is too heavy to be towed
  }

  // TODO: Override the printDetails method from the Vehicle class
    // TODO: The method should call the printDetails method of the parent class
    // TODO: The method should log the details of the Truck
    // TODO: The details should include the VIN, make, model, year, weight, top speed, color, towing capacity, and wheels
    // printDetails(): void {
    //   // Call the parent class's printDetails method to print common details
    //   super.printDetails();
    
    //   // Log the Truck-specific details
    //   console.log(`Towing Capacity: ${this.towingCapacity ?? 'N/A'} lbs`);
    
    //   // Log the details of each wheel, using correct getter methods from the Wheel class
    //   console.log(`Wheels: ${this.wheels?.map((wheel: Wheel) => `${wheel.diameter} inch ${wheel.tireBrand}`).join(', ') ?? 'No wheels available'}`);
    // }
// Export the Truck class as the default export
export default Truck;


