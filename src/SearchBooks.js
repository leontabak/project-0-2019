
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
                    spec.id = this.results.length;
                    //console.log( spec.title );
                    this.results.push( spec );
                } // body of arrow function
            ); // forEach
            this.setState( {selectedBooks: this.results} );
            //this.results.forEach( (b) => {console.log(b.title)} );
        } // if
    } // createResultList()

    makeBookSpecification( dbRecord ) {
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

        //console.log( title );

        const spec = new BookSpecification( coverImageURL, title, authors, when );

        return spec;
    } // makeSpecification()

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
            <SearchResults books={this.state.selectedBooks} />
          </div>
        ); // return
    } // render()
} // SearchBooks

export default SearchBooks
