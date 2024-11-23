class BankAccount {
  #blance; //Private field
  constructor(initialBalance) {
    this.#blance = initialBalance;
  }
  deposit(amount) {
    if (amount > 0) this.#blance += amount;
  }

  getBalance() {
    return this.#blance;
  }
}

const account = new BankAccount(200);
account.deposit(50);
console.log(account.getBalance());


console.log("----------------------Enhanced Abastraction Example------------------------")



class BankAccount02 {
  #balance;
  constructor(initialBalance, testing) {
    //validation
    if (initialBalance < 0) throw new error("The total can't be negative.");
    this.#balance = initialBalance;
    this.testing = testing

  }
  deposit(cash) {
    if (cash > 0) {
      //validation
      this.#balance += cash;
    } else {
      console.log("Deposit must be positive");
    }
  }

  withdraw(cash) {
    if (cash > this.#balance) {
      console.log("Insfficient funds.");
    } else if (cash > 0) {
      this.#balance -= cash;
    } else {
      console.log("must be a positve number");
    }
  }

  getBalance() {
    return this.#balance;
  }

}


const account01 = new BankAccount(0);
account01.deposit(-1);
console.log(account01.getBalance());
