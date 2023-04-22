let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.bookId = Book.prototype.count;
  Book.prototype.count += 1;
}

Book.prototype.count = 0;

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

function removeAllChild(node) {
  while (node.childElementCount > 0) {
    node.removeChild(cardContainer.firstChild);
  }
}

function switchState() {
  if (this.classList.contains("read")) {
    this.classList.remove("read");
    this.classList.add("unread");
  } else {
    this.classList.remove("unread");
    this.classList.add("read");
  }
}

function deleteBook() {
  const removeBookId = this.id.substring(12);
  cardContainer.removeChild(document.getElementById("book-" + removeBookId));
  for (let i = 0; i < myLibrary.length; i++) {
    if (myLibrary[i].bookId == removeBookId) {
      myLibrary.splice(i, 1);
      return;
    }
  }
}

function displayBook(book) {
  const bookCard = document.createElement("div");
  bookCard.id = "book-" + book.bookId;
  bookCard.classList.add("book-card");

  const cardTitle = document.createElement("div");
  cardTitle.textContent = book.title;

  const cardAuthor = document.createElement("div");
  cardAuthor.textContent = book.author;

  const cardPages = document.createElement("div");
  cardPages.textContent = book.pages;

  const readButton = document.createElement("button");
  readButton.classList.add("read");
  readButton.id = "read-book-" + book.bookId;
  readButton.addEventListener("click", switchState);

  const removeButton = document.createElement("button");
  removeButton.addEventListener("click", deleteBook);
  removeButton.textContent = "REMOVE BOOK";
  removeButton.id = "remove-book-" + book.bookId;

  bookCard.appendChild(cardTitle);
  bookCard.appendChild(cardAuthor);
  bookCard.appendChild(cardPages);
  bookCard.appendChild(readButton);
  bookCard.appendChild(removeButton);
  cardContainer.appendChild(bookCard);
}

const form = document.getElementById("book-form");
const cardContainer = document.querySelector(".card-container");

const inputBookName = document.getElementById("book-name");
const inputAuthor = document.getElementById("author");
const inputPages = document.getElementById("pages");
const inputBookRead = document.getElementById("book-read");

const addBookButton = document.getElementById("add-book");

addBookButton.addEventListener("click", () => {
  form.classList.add("active");
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let bookName = inputBookName.value;
  let author = inputAuthor.value;
  let pages = inputPages.value;
  let bookRead = inputBookRead.value;
  if (!(bookName === "" || author === "" || pages === "" || bookRead === "")) {
    addBookToLibrary(bookName, author, pages, bookRead);
    form.classList.remove("active");
  }
  removeAllChild(cardContainer);
  myLibrary.forEach((book) => displayBook(book));
});
