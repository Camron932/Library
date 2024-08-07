const form = document.getElementById("form");
const bookButton = document.getElementById("bookButton");
const submitButton = document.getElementById("submitButton");
const buttonText = document.getElementById("buttonText");
const bookRead = document.getElementsByClassName("bookRead");
const isRead = document.getElementById("yes");
const unread = document.getElementById("no");
const table = document.getElementById("tableMain");

const myLibrary = [];

bookButton.onclick = function() {
    formShow();
}

submitButton.onclick = function() {
    addBookToLibrary();
    renderTable();
    formHide();
}

function formShow() {
    form.classList.remove("hidden");
};

function formHide() {
    form.classList.add("hidden");
};

function Book(title, author, length, rating, read) {
    this.bookTitle = title;
    this.author = author;
    this.bookLength = length;
    this.rating = rating; 
    this.read = read;
};

function addBookToLibrary() {
    title = document.getElementById("bookTitle").value;
    author = document.getElementById("author").value;
    length = document.getElementById("bookLength").value;
    rating = document.getElementById("rating").value;

    read = isRead.checked || !unread.checked

    newBook = new Book(title, author, length, rating, read);

    myLibrary.push(newBook);
}

function readCheck(index) {
    if (buttonText.innerHTML === "Read") {
        buttonText.innerHTML = "Unread";
        bookRead[index].classList.remove("readConfirm");
    } else {
        buttonText.innerHTML = "Read"
        bookRead[index].classList.add("readConfirm");
    }
}

function renderTable() {
    table.innerHTML = 
        `<tr>
            <th class="tableHeads">Title</th>
            <th class="tableHeads">Author</th>
            <th class="tableHeads">Length</th>
            <th class="tableHeads">Rating</th>
            <th class="tableHeads">Read</th>
            <th class="tableHeads"> </th>
        </tr>`

    myLibrary.forEach((book, index) => {

        let row = table.insertRow()
        let cell1 = row.insertCell()
        let cell2 = row.insertCell()
        let cell3 = row.insertCell()
        let cell4 = row.insertCell()
        let cell5 = row.insertCell()
        let cell6 = row.insertCell()

        cell1.innerHTML = book.bookTitle
        cell2.innerHTML = book.author
        cell3.innerHTML = book.bookLength
        cell4.innerHTML = book.rating
        cell5.innerHTML = `<button class="readButton" id="${index}"><span id="text${index}">Read</span></button>`
        cell6.innerHTML = `<button class="readButton" id="remove${index}"><span>Remove</span></button>`

        const readButton = document.getElementById(`${index}`);
        const removeButton = document.getElementById(`remove${index}`);

        readButton.onclick = function(index) {
            readCheck(index);
        }
        removeButton.onclick = function(r) {
            let i = r.parentNode.parentNode.rowIndex;
            table.deleteRow(i);
        }
    })
}
