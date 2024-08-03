const form = document.getElementById("form");
const bookButton = document.getElementById("bookButton");
const submitButton = document.getElementById("submitButton");
const readButton = document.getElementById("readButton");
const buttonText = document.getElementById("buttonText");
const bookRead = document.querySelectorAll("bookRead");

const myLibrary = [];

bookButton.onclick = function() {
    formShow();
}

submitButton.onclick = function() {
    addBookToLibrary();
    formHide();
}

function formShow() {
    form.classList.remove("hidden");
};

function formHide() {
    form.classList.add("hidden");
};

function Book(title, author, length, rating) {
    this.bookTitle = title;
    this.author = author;
    this.bookLength = length;
    this.rating = rating; 
};

function addBookToLibrary() {
    title = document.getElementById("bookTitle").value;
    author = document.getElementById("author").value;
    length = document.getElementById("bookLength").value;
    rating = document.getElementById("rating").value;

    newBook = new Book(title, author, length, rating);

    myLibrary.push(newBook);
}

function readCheck() {
    if (buttonText.innerHTML === "Read") {
        buttonText.innerHTML = "Unread";
        bookRead.classList.remove("readConfirm");
    } else {
        buttonText.innerHTML = "Read"
        bookRead.classList.add("readConfirm");
    }
}

readButton.onclick = function() {
    readCheck()
}