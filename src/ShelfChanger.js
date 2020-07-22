import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';

class ShelfChanger extends Component {
    state = {
        selected: ''
    }
    handleUpdate(book, value) {
        this.setState(() => ({
            selected: value
        }))
        BooksAPI.update(book, value).then(() => {
            this.props.updateBooks();
        })
    }
    render() {
        const { book, shelf } = this.props;
        return (
            <div className="book-shelf-changer">
                <select onChange={(event) => this.handleUpdate(book, event.target.value)} value={shelf}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading" >Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )

    }
}

export default ShelfChanger;