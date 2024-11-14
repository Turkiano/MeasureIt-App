class Person {
  #name; //private field
  #age;

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  //public methods
  getName() {return this.#name;}

  setName(name) {this.#name = name;}

  getAge() {return this.#age;}

  setAge(age) {if (age >= 0) this.#age = age;}
}

//new objects
const personOne = new Person("Khalid");
console.log("Ex 01: " + personOne.getName());

personOne.setName("Turkiano");
console.log("Ex 02: " + personOne.getName());
