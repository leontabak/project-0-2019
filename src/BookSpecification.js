
class BookSpecification {

    constructor( coverImageURL, title, authors, when ) {
        this._coverImageURL = coverImageURL;
        this._title = title;
        this._authors = authors;
        this._when = when;
    } // constructor()

    get coverImageURL() { return this._coverImageURL; }
    get title() { return this._title; }
    get authors() { return this._authors; }
    get when() { return this._when; }

} // BookSpecification

export default BookSpecification

