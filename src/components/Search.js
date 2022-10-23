import { Link } from "react-router-dom";
import { useState } from "react";
import Book from  "../components/Book"
import '../App.css';
function Search(props){
  const [searchText, setSearchText] = useState("");
    function  handleChange (e){
    setSearchText(e.target.value);
    props.searchForBooks(searchText);
  }

  // function handleChangeSelect(e){
  //   let shelf=e.target.value
  //    props.moveBook(props.books,shelf)
  // }
  const updatedBooks = props.searchBooks.map(book => {
    props.books.map(b => {
      if (b.id === book.id) {
        book.shelf = b.shelf;
      }
      return b;
    });
    return book;
  });
    return (
        <>
         <div className="search-books">
          <div className="search-books-bar">
          <Link  to={'/'} className="close-search" >close</Link>
          
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                 value={searchText}
                name="searchText"
                 onChange={handleChange}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
            {updatedBooks.map((item)=>{
                        return (
                          <Book
                           key={item.id}
                           book={item}
                           shelf={item.shelf ? item.shelf : 'none'}
                           moveBook={props.moveBook}
                           />
                        )
                          
                        })}
            </ol>
          </div>
        </div>
        </>
    )
}
export default Search;