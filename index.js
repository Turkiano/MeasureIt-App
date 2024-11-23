class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return `${this.name} makes a sound.`;
  }
}


class Dog extends Animal{
  speak(){
    return `${this.name} barks.`
  }
}

class Cat extends Animal{
  speak(){
    return `${this.name} mewos`
  }
}


const dog01 = new Dog("Max");
console.log(dog01.speak())// Max barks.

const cat01 = new Cat("Becatcho");
console.log(cat01.speak()) // Becatcho meows.