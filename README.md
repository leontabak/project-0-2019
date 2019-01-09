# MyReads Project

## Leon Tabak

## (Project start on 01 January 2019)

I used the starter template for the final assessment project for
Udacity's React Fundamentals course to create my project. 

## How to use this app

The app displays a main page when launched.
A reader may move back and forth between the main page
(click on plus sign in green circle near right edge of
page) and a search page (click on left arrow in upper
left corner of page).

On the search page, enter text in the field at the
top of the page to query a database and display the
result of the query (a set of books).

Recognized search terms are in a comment in SearchBooks.js.

Point to the downward pointing triangle in the small green
circle at the lower right corner of a book. Select a destination
of a book. This can be done on the main page or the search page.


## Overview

Some records in the database may not include names of authors
or a URL for an image of a book's cover.
My program places the words "No authors" in the authors field
and the URL of a default image in those cases.

My program defines and makes use of a class named When
that provides labels and integer codes for categorizing
books. A book might be something that a reader is:
* currently reading
* intends to read in the future
* has already read
* will never read (or, at least, does not at the moment intend to read)
* is considering but has not yet selected

The plus sign ("+") near the right edge of the main
page ("MyReads" at the top) will take a reader to the
search page.

The left arrow in the upper left corner of the search
page will take a reader back to the main page.

The downward pointing triangle in the lower right
corner of the image of a book will open a menu from
which a reader may choose a shelf on which to place
the book.

## Structure

```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search 
|         terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need 
|         to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Edited to adjust placement of results
    |         of a search and the button for moving to the search page.
    ├── App.js # This is the root of the app. 
    ├── App.test.js # Used for testing. Provided with Create React App. 
    |         Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. 
    |         Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change 
    |         anything here.
    └── index.js # Although I was told that I would not need to edit
            this file, I did add a BrowserRouter to it.
    |__ BookCase.js models a set of 3 BookShelves.
    |__ BookShelf.js models a bookshelf.
    |__ BookShelfChanger.js models a menu for use moving/placing books.
    |__ Book.js models a book (image of cover, title, author, menu for placement).
    |__ BookSpecification.js describes attributes of a book.
    |__ BookList.js used in development and debugging only.
    |__ SearchBooks.js provides a field for queries and display of query results.
    |__ SearchResults.js models a shelf containing books returned by a query.
    |__ When.js models the times when a reader might wish to read a book.
```

## Directions and advice that I received from Udacity


The goal of this template is to
save you time by providing a static example of the CSS and HTML markup
that may be used, but without any of the React code that is needed to
complete the project. If you choose to start with this template, your
job will be to add interactivity to the app by refactoring the static
code in this template.

Of course, you are free to start this project from scratch if you
wish! Just be sure to use 

[Create React App](https://github.com/facebookincubator/create-react-app) 
to bootstrap the project.

### TL;DR

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

### What You're Getting

Remember that good React design practice is to create new JS files for
each component and use import/require statements to include them where
they are needed.

### Backend Server

To simplify your development process, we've provided a backend server
for you to develop against. The provided file
[`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to
perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

#### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a
* collection of book objects.  This collection represents the books
* currently in the bookshelves in your app.

#### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the
  response data of the POST request

#### `search`

Method Signature:

```js
search(query)
```

* query: `<String>` 
* Returns a Promise which resolves to a JSON object
        containing a collection of a maximum of 20 book objects.  
* These books do not know which shelf they are on. They are raw results
        only. You'll need to make sure that books have the correct state
        while on the search page.

### Important
The backend API uses a fixed set of cached search results and is
limited to a particular set of search terms, which can be found in
[SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_
terms that will work with the backend, so don't be surprised if your
searches for Basket Weaving or Bubble Wrap don't come back with any
results.

### Create React App

This project was bootstrapped with [Create React
App](https://github.com/facebookincubator/create-react-app). You can
find more information on how to perform common tasks
[here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

### Contributing

This repository is the starter code for _all_ Udacity
students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
