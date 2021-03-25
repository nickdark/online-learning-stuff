//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
    this.account = 0;
    this.isOpen = false;
  }

  open() {
    if (!this.isOpen) {
      this.isOpen = true;
      this.account = 0;
    }
    else {
      throw new ValueError();
    }
  }

  close() {
    if (this.isOpen) {
      this.isOpen = false;
    }
    else {
      throw new ValueError();
    }
  }

  deposit(quantity) {
    if (this.isOpen && quantity > 0) {
      this.account += quantity;
    }
    else {
      throw new ValueError();
    }
  }

  withdraw(quantity) {
    if (this.isOpen && this.account - quantity >= 0 && quantity > 0) {
      this.account -= quantity;
    }
    else {
      throw new ValueError();
    }
  }

  get balance() {
    if (this.isOpen) {
      return this.account;
    }
    else {
      throw new ValueError();
    }
  }

  set balance() {
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
