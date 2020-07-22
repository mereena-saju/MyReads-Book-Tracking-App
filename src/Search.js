import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';
import PropTypes from 'prop-types';

class Search extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        updateBooks: PropTypes.func.isRequired,
    }
    state = {
        query: '',
        searchedBooks: []
    };

    setSearchedBook(res) {
        this.setState(() => ({
            searchedBooks: res
        }))
    }

    updateQuery(value) {
        this.setState(() => ({
            query: value
        }))
        if (value !== '') {
            BooksAPI.search(value).then((res) => {
                try {
                    res.map((eachBook) => {
                        //Finding if the Book is already in Shelf from MainPage
                        const newBook = this.props.books.find((b) => b.id === eachBook.id);
                        if (newBook) {
                            eachBook.shelf = newBook.shelf;
                        }
                    })
                    this.setSearchedBook(res);
                } catch (error) {
                    this.setSearchedBook({ 'error': 'No results' });
                }
            })
        }

    }
    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author"
                            value={this.state.query}
                            onChange={(event) => this.updateQuery(event.target.value)} />
                    </div>
                </div>
                {this.state.query !== '' &&
                    <div className="search-books-results">
                        <ol className="books-grid">
                            {!this.state.searchedBooks.error && this.state.searchedBooks.map(ele => {
                                return (
                                    <li key={ele.id} >
                                        <Book book={ele} updateBooks={this.props.updateBooks} />
                                    </li>
                                )
                            })}
                            {this.state.searchedBooks.error && <div>No Results</div>}

                        </ol>
                    </div>
                }
            </div>

        )

    }
}


export default Search;