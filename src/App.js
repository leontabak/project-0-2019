
import React from 'react';
// import * as BooksAPI from './BooksAPI'
import './App.css';
import BookShelfChanger from './BookShelfChanger';
import BookSpecification from './BookSpecification';
import BookList from './BookList';
import Book from './Book';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of 
     * which page we're on, use the URL in the browser's address bar. 
     * This will ensure that users can use the browser's back and 
     * forward buttons to navigate between pages, as well as provide 
     * a good URL they can bookmark and share.
     */
    showSearchPage: false,

    books: (new BookList()).listOfBooks,

    nowBooks: (new BookList()).listOfNowBooks,
    pastBooks: (new BookList()).listOfPastBooks,
    futureBooks: (new BookList()).listOfFutureBooks
  }

  render() {

    const present = this.state.nowBooks;
    const past = this.state.pastBooks;
    const future = this.state.futureBooks;

    console.log( "Now" );
    console.log ( present[0].title );
    console.log ( present[1].title );

    console.log( "Future" );
    console.log ( future[0].title );
    console.log ( future[1].title );

    console.log( "Past" );
    console.log ( past[0].title );
    console.log ( past[1].title );
    console.log ( past[2].title );

    //console.log( this.nowBooks[0].title );
    //console.log( this.nowBooks[1].title );

    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <button 
                    className="close-search" 
                    onClick={() => this.setState({ showSearchPage: false })}>
                  Close
              </button>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a 
                  particular set of search terms.

                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method 
                  DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every 
                  search is limited by search terms.
                */}
                <input
                      type="text" 
                      placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      <li>
                        <Book spec={this.state.books[0]} />
                      </li>
                      <li>
                        <Book spec={this.state.books[1]} />
                      </li>
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      <li>
                        <Book spec={this.state.books[2]} />
                      </li>
                      <li>
                        <Book spec={this.state.books[3]} />
                      </li>
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      <li>
                        <Book spec={this.state.books[4]} />
                      </li>
                      <li>
                        <Book spec={this.state.books[5]} />
                      </li>
                      <li>
                        <Book spec={this.state.books[6]} />
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
