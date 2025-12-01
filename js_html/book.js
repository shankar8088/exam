function Book(name, available) {
  this.name = name;
  this.available = available;
}

let library = {
  books: [],  

  // Getter → counts available books
  get count() {
    return this.books.filter(b => b.available).length;
  },

  // Setter → update availability
  set updateStatus(info) {
    let book = this.books.find(b => b.name === info.name);
    if (book) book.available = info.status;
  },

  // Display books
  showBooks() {
    console.log("Library Books:");
    this.books.forEach(b => {
      console.log(`- ${b.name} (${b.available ? "Available" : "Not Available"})`);
    });
    console.log("Total Available:", this.count);
  }
};

// Add books
library.books.push(new Book("Java", true));
library.books.push(new Book("HTML", false));
library.books.push(new Book("Python", true));

console.log("Before update:");
library.showBooks();

// Update status using setter
library.updateStatus = { name: "HTML", status: true };

console.log("\nAfter update:");
library.showBooks();
