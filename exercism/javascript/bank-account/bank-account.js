//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
    this.balance = 0;
    this.open = false;
  }

  open() {
    this.open = true;
  }

  close() {
    this.open = false;
  }

  deposit(quantity) {
    if (this.open) {
      this.balance += quantity;
    }
  }

  withdraw(quantity) {
    if (this.open && this.balance - quantity >= 0) {
      this.balance -= quantity;
    }
    else {
      throw new ValueError();
    }
  }

  get balance() {
    return this.balance;
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
