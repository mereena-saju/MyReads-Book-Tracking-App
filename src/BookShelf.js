import React,{Component} from 'react';
import Book from './Book';

class BookShelf extends Component{
   
    makeShelf(allBooks){
      let newObj={};
      let category=[];
      allBooks.map((book)=>{
          if(!category.includes(book.shelf)){
            category.push(book.shelf);
          }
      });
      category.forEach((shelf)=>{
        newObj[shelf] = allBooks.filter((bk)=>{return bk.shelf === shelf});
      });
      return newObj;
    }
   
    render(){
      const {books} = this.props;
      const shelf=this.makeShelf(books);
      const title={currentlyReading:'Currently Reading',wantToRead:'Want to Read',read:'Read',none:'None'};
        return(
            <div>
              {
              Object.entries(shelf).map(([key,value])=>{
                return (
                  <div key={key} className="bookshelf">
                    <h2 className="bookshelf-title">{title[key]}</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                      {value.map(ele=>{
                        return(
                          <li key= {ele.id} >
                            <Book book={ele} updateBooks={this.props.updateBooks}/>
                          </li>
                        )
                      })}   
                      </ol>
                    </div>
                  </div>
                )
              })
              }
            </div>
        )

    }
}

export default BookShelf;