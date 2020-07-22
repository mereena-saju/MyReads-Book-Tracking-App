import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf';
import Search from './Search';
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'


class BooksApp extends React.Component {
  state = {
    books: []
  }
  componentDidMount() {
    this.updateBooks();
  }
  updateBooks = () => {
    BooksAPI.getAll().then((allBooks) => {
      this.setState(() => ({
        books: allBooks
      }))
    })
  }
  render() {
    return (
      <div className="app">
        <Route path='/search' render={({ history }) => (
          <Search
            books={this.state.books}
            updateBooks={() => {
              this.updateBooks()
              history.push('/')
            }} />
        )} />
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <BookShelf books={this.state.books} updateBooks={this.updateBooks} />
            </div>
            <div className="open-search">
              <Link to='/search' ><button>Add a book</button></Link>
            </div>
          </div>
        )} />
      </div>
    )
  }
}

export default BooksApp
