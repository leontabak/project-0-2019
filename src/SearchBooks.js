
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import SearchResults from './SearchResults';
import When from './When';
import BookSpecification from './BookSpecification';

class SearchBooks extends Component {
    state = {
        query: '',
        selectedBooks: []
    }; // state

    when = new When();

    results = [];

    search = (event) => {
        const term = "" + event.target.value;
        if( term.length > 0 ) {
        BooksAPI.search( term ).then(
            this.createResultList.bind(this) );
        } // if
    };

    createResultList( bookSet ) {
        if(bookSet.error === undefined) {
            this.results.splice( 0, this.results.length );
            bookSet.forEach(
                (book) => {
                    const spec = this.makeBookSpecification(book);
                    spec.index = this.results.length;
                    this.results.push( spec );
                } // body of arrow function
            ); // forEach
            this.setState( {selectedBooks: this.results} );
        } // if
    } // createResultList()

    makeBookSpecification( dbRecord ) {
        const id = dbRecord.id;
        const title = dbRecord.title;

        let authors = dbRecord.authors;
        if( authors === undefined ) {
            authors = [ "Author unknown" ];
        } // if

        let coverImageURL = undefined;
        if( dbRecord.imageLinks !== undefined ) {
            coverImageURL = dbRecord.imageLinks.smallThumbnail;
        } // if
        if( coverImageURL === undefined ) {
            coverImageURL = "http://www.eonsahead.com/images/charles-river-128x193.jpg";
        } // if

        const when = this.when.possible;

        const spec = new BookSpecification( id, coverImageURL, title, authors, when );

        return spec;
    } // makeSpecification()

    moveBook(index, destination) {
        const id = this.results[index].id;
        const title = this.results[index].title;
        const authors = this.results[index].authors;
        const coverImageURL = this.results[index].coverImageURL;
        const when = this.results[index].when;

        const dbRecord = {
            id: id,
            index: index,
            title: title,
            authors: authors,
            imageLinks: {smallThumbnail: coverImageURL},
            when: when
        };

        const shelf = destination.shelfName;

        BooksAPI.update( dbRecord, shelf ).then( (msg) => console.log(msg) );
    } // moveBook()

    render() {
        return (
          <div className="search-books">
            <div className="search-books-bar">

              <Link to="/" className="close-search">Close</Link>

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
                      value={this.query}
                      onChange={this.search} 
                      placeholder="Search by title or author"/>

              </div>
            </div>
            <SearchResults books={this.state.selectedBooks} moveBook={this.moveBook.bind(this)}/>
          </div>
        ); // return
    } // render()
} // SearchBooks

export default SearchBooks
