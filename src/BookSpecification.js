
class BookSpecification {

    constructor( coverImageURL, title, authors, when ) {
        this._index = undefined;
        this._coverImageURL = coverImageURL;
        this._title = title;
        this._authors = authors;
        this._when = when;
    } // constructor()

    get index() { return this._index; }
    get coverImageURL() { return this._coverImageURL; }
    get title() { return this._title; }
    get authors() { return this._authors; }
    get when() { return this._when; }

    set index( n ) { this._index = n; }
    set when( relativeTime ) { this._when = relativeTime; }
} // BookSpecification

export default BookSpecification

