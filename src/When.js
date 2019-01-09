
class When {

    constructor() {
        this._past = {
            code: 0,
            label: "Read",
            shelfName: "read"};

        this._now = {
            code: 1,
            label: "Currently Reading",
            shelfName: "currentlyReading"};

        this._future = {
            code: 2,
            label: "Want to Read",
            shelfName: "wantToRead"};

        this._never = {
            code: 3,
            label: "None",
            shelfName: "none"};

        this._possible = {
            code: 3,
            label: "Considering",
            shelfName: "considering"};
    } // constructor()

    labelToObject( label ) {
        label = label.toLowerCase();
        label = label.replace( " ", "" );

        const past = this._past.label.toLowerCase().replace( / /g, "" );
        const now = this._now.label.toLowerCase().replace( / /g, "" );
        const future = this._future.label.toLowerCase().replace( / /g, "" );

        if( label === past ) {
            return this._past;
        } // if
        else if( label === now ) {
            return this._now;
        } // else if
        else if( label === future ) {
            return this._future;
        } // else if
        else {
            return this._never;
        } // else
    } // labelToObject()

    shelfNameToObject( shelfName ) {
        if( shelfName === this._past.shelfName ) {
            return this._past;
        } // if
        else if( shelfName === this._now.shelfName ) {
            return this._now;
        } // else if
        else if( shelfName === this._future.shelfName ) {
            return this._future;
        } // else if
        else {
            return this._never;
        } // else
    } // shelfNameToObject()

    get past() { return this._past; }
    get now() { return this._now; }
    get future() { return this._future; }
    get never() {return this._never; }
    get possible() {return this._possible; }

    get choices() {
        return {
            past: this._past,
            now: this._now,
            future: this._future,
            never: this._never,
            possible: this._possible
        } // return
    }

}; // when

export default When
