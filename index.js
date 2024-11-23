class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return `${this.name} makes a sound.`;
  }
}

class Dog extends Animal {
  speak() {
    return `${this.name} barks.`;
  }
}

class Cat extends Animal {
  speak() {
    return `${this.name} mewos`;
  }
}

const dog01 = new Dog("Max");
console.log(dog01.speak()); // Max barks.

const cat01 = new Cat("Becatcho");
console.log(cat01.speak()); // Becatcho meows.



//---------------The [super] keywrod--------------------

class Human {
  constructor(name, age, createdAt) {
    this.name = name;
    this.age = age;
    this.createdAt = createdAt;
  }

  register() {
    return `${this.name} is registerd on ${this.createdAt}`;
  }
}

class Employee extends Human {
  constructor(name, age, createdAt, position) {
    super(name, age, createdAt);
    this.position = position
  }
  getDetails(){
    return `Age: ${this.age}, Position: ${this.position}`
  }
}

const employee01 = new Employee("Turki", 38, "1987/08/10", "The Boss")
console.log(employee01.register())
console.log(employee01.getDetails())