import React,{Component} from 'react';
import ShelfChanger from './ShelfChanger';

class Book extends Component{
   
    render(){
        const {book} = this.props;
    
        return(
            <div className="book">
                <div className="book-top">
                {book.imageLinks 
                    && <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                }
                    <ShelfChanger book={book} shelf={book.shelf ? book.shelf : "none"} updateBooks={this.props.updateBooks}/>
                </div>
                <div className="book-title">{book.title}</div>
                {book.authors &&
                    (book.authors.map(auth => {
                        return <div key={auth} className="book-authors">{auth}</div>})
                    )   
                }
            </div>
              
            
        );
    }
}

export default Book;