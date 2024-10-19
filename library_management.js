//Task 1
//Create a Book Class
class Book {
    constructor(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this._isAvailable = true; 
    }

    //getDetails method  for Book title, author, and ISBN properties
    getDetails() {
        return `Title: ${this.title}, Author: ${this.author}, and ISBN: ${this.ISBN}`;
    }

    // getter to return available books
    get isAvailable() {
        return this._isAvailable;
    }

    // setter to to confirm available book values
    set isAvailable(available) {
        this._isAvailable = available;
    }
}

//Task 2
//Create a Section Class
class Section {
    constructor(name, ) {
        this.name = name;
        this.books = []; 
    }

    //push method that adds to books array
    addBook(book) {
        this.books.push(book);
    }

    //filter method uses arrow function to narrow book parameter to number of available books
    getAvailableBooks() {
        return this.books.filter(book => book.isAvailable).length;
    }

    listBooks() {
        console.log(`Books in section "${this.name}":`);
        
        if (this.books.length === 0) {
            console.log("No books available.");
            return;
        }
    
        this.books.forEach(book => {
            console.log(`${book.getDetails()} (${book.isAvailable ? 'Available' : 'Unavailable'})`);
        });
    } 
    calculateTotalBooksAvailable(book) {
        return this.getAvailableBooks();
    }
}

//Task 3
//Create a Patron Class
class Patron {
    constructor(name) {
        this.name = name;
        this.borrowedBooks = []; 
    }

    borrowBook(book) {
        if (book._isAvailable) {
            book._isAvailable = false; 
            this.borrowedBooks.push(book);
            console.log(`${this.name} borrowed "${book.title}".`);
        } else {
            console.log(`"${book.title}" is currently not available.`);
        }
    }

    returnBook(book) {
        const hasBook = this.borrowedBooks.includes(book);
        if (hasBook) {
            book.isAvailable = true;
            this.borrowedBooks = this.borrowedBooks.filter(b => b !== book);
            console.log(`${this.name} returned "${book.title}".`);
        } else {
            console.log(`${this.name} does not have "${book.title}" borrowed.`);
        }
    }
    
}

class VIPPatron extends Patron {
    constructor(name) {
        super(name);
        this.priority = true; 
    }
    borrowBook(book) {
        if (book.isAvailable) {
            console.log(`"${book.title}" is not available, but ${this.name} can still borrow it.`);
        }
        super.borrowBook(book);
    }
}



// Create sections
const fiction = new Section("Fiction");
const science = new Section("Science");

// Create books
const book1 = new Book("1984", "George Orwell", "1234567890");
const book2 = new Book("Brave New World", "Aldous Huxley", "0987654321");
const book3 = new Book("The Selfish Gene", "Richard Dawkins", "1122334455");
const book4 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "9780333791035");
const book5 = new Book("Inheritance", "Dani Shapiro", "1122334455");

// Add books to sections
fiction.addBook(book1);
fiction.addBook(book2);
science.addBook(book3);
fiction.addBook(book4);
science.addBook(book5);

// Create patrons
const regularPatron = new Patron("James Dove");
const vipPatron = new VIPPatron("Jane Donner", true);

// Regular patron tries to borrow a book
regularPatron.borrowBook(book1);
regularPatron.borrowBook(book5);

// VIP patron tries to borrow a book (has priority)
vipPatron.borrowBook(book1);
vipPatron.borrowBook(book4);

// Return the book
regularPatron.returnBook(book1);

// List books and availability
fiction.listBooks();

// Calculate total available books in each section
console.log(`Total available books in Fiction: ${fiction.getAvailableBooks()}`);
console.log(`Total available books in Science: ${science.getAvailableBooks()}`);