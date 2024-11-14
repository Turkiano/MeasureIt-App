function person(name, age) {
  let _name = name; //private variable
  let _age = age;

  //public methods (getter & Setter)
  this.getName = function () {
    return _name;
  };

  this.setName = function (name) {
    _name = name;
  };

  this.getAge = function () {
    return _age;
  };

  this.setAge = function (age) {
    if (age >= 0) _age = age;
  };
}

//A new object
const person1 = new person("Turki", 38);
console.log("ex 1: " + person1.getName());
person1.setName("Khalid");
console.log("ex 2: " + person1.getName());
