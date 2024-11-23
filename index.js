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

