function Person(name, age) {
  let _name = name; // Private variable
  let _age = age; // Private variable

  // Public methods
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

const person = new Person("Kahlid", 30);
console.log(person.getName()); // John
person.setName("Turkiano");
console.log(person.getName()); // Turkiano
