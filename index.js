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



//-----------------------Interacting with classes using methods -----------------------------------------

class Library {
  constructor(name){
    this.name = name
    this.bookList = []
  }
  addBook(book){ //method to create
    this.bookList.push(book)
  }
  
  getBooks(){//method to Read
    console.log(`${this.bookList}`);
  }
}


const Library01 = new Library("Kings College Library")
Library01.addBook("Comedy stories")
Library01.addBook("Math01")
Library01.addBook("Gym Guidence")
Library01.getBooks()

