/**
 * we have two objects (Person, and Address),
 * and each object has properties inside a constructor
 */

class Person {
  constructor(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  getDetails() {
    //methods as a property
    return `${this.name} ${this.age} Address: ${this.address.getDetails()}`;
  }
}

class Address {
  constructor(streetName, zipCode) {
    this.streetName = streetName;
    this.zipCode = zipCode;
  }
  getDetails(){
    return `${this.streetName} ${this.zipCode}`
  }
}

const address01 = new Address("st.street", 2345);
const person01 =  new Person("Turkiano", 38, address01)

console.log(person01.getDetails())
