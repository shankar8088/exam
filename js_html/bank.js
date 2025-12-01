function BankAccount(name, balance) {
  this.name = name;
  this.balance = balance;

  this.deposit = function (amount) {
    this.balance += amount;
    console.log(`${this.name} deposited ₹${amount}. New Balance: ₹${this.balance}`);
  };

  this.withdraw = function (amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`${this.name} withdrew ₹${amount}. New Balance: ₹${this.balance}`);
    } else {
      console.log(`❌ Not enough balance for ${this.name}!`);
    }
  };

  this.show = function () {
    console.log(`Name: ${this.name}, Balance: ₹${this.balance}`);
  };
}

// Create accounts
let acc1 = new BankAccount("Adani", 1000);
let acc2 = new BankAccount("Modi", 5000);

// Use methods
acc1.show();
acc1.deposit(500);
acc1.withdraw(300);

acc2.show();
acc2.withdraw(6000);

