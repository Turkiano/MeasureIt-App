//---------------The [Polymorphism ] example--------------------

class Human {
  constructor(id, name, age, createdAt) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.createdAt = createdAt;
  }
  getDetails() {
    return `Name: ${this.name} Age: ${this.age}, `;
  }

  register() {
    return `This Id No: ${this.id}, is registerd on ${this.createdAt}`;
  }
}

class Employee extends Human {
  constructor(id, name, age, createdAt, position) {
    super(id, name, age, createdAt);
    this.position = position;
  }
  getDetails() {
    // Overriding the parent's method
    return `Name: ${this.name} Age: ${this.age}, Position: ${this.position} `;
  }
}

const employee01 = new Employee(1, "Turki", 38, "1987/08/10", "The Boss");
console.log(employee01.register());
console.log(employee01.getDetails());
