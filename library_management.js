//Task 1
//Create a Book Class
class Book {
    constructor(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this._isAvailable = true; 
    }

    getDetails() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.ISBN}`;
    }

    get isAvailable() {
        return this._isAvailable;
    }

    set isAvailable(available) {
        this._isAvailable = available;
    }
}

//Task 2
//Create a Section Class
class Section {
    constructor(name,book) {
        this.name = name;
        this.book = [];
    }

    addBook(book) {
        this.book.push(book);
    }

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

    calculateTotalBooksAvailable(){
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
            console.log(`"${book.title}" is currently unavailable.`);
        }
    }

    returnBook(book) {
        
    }
}

class VIPPatron extends Patron {
    constructor(name) {
        super(name);
        this.priority = true; 
    }
    borrowBook(book) {
        if (book.isAvailable()) {
            this.borrowedBooks.push(book);
            book.borrow();
            console.log(`${this.name} (VIP) borrowed ${book.title}.`);
        } else {
            console.log(`${book.title} is not available for ${this.name}.`);
        }
    }
}



// Create sections
const fiction = new Section("Fiction");
const science = new Section("Science");

// Create books
const book1 = new Book("1984", "George Orwell", "1234567890");
const book2 = new Book("Brave New World", "Aldous Huxley", "0987654321");
const book3 = new Book("The Selfish Gene", "Richard Dawkins", "1122334455");

// Add books to sections
fiction.addBook(book1);
fiction.addBook(book2);
science.addBook(book3);

// Create patrons
const regularPatron = new Patron("John Doe");
const vipPatron = new VIPPatron("Jane Smith", true);

// Regular patron tries to borrow a book
regularPatron.borrowBook(book1);

// VIP patron tries to borrow a book (has priority)
vipPatron.borrowBook(book1);

// Return the book
regularPatron.returnBook(book1);

// List books and availability
fiction.listBooks();

// Calculate total available books in each section
console.log(`Total available books in Fiction: ${fiction.getAvailableBooks()}`);
console.log(`Total available books in Science: ${science.getAvailableBooks()}`);
