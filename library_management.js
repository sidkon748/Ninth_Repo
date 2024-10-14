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
        this.students.push(book);
    }

    getAvailableBooks() {
        return this.books.filter(book => book.isAvailable).length;
    }

    listBooks() {
        ;
    }
}
