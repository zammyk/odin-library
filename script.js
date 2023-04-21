let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

const form = document.getElementById("book-form");
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
  if (bookName === "" || author === "" || pages === "" || bookRead === "") {
    console.log("gottem");
  } else {
    addBookToLibrary(bookName, author, pages, bookRead);
    form.classList.remove("active");
  }
});
