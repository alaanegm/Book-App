
import './App.css';
import { useState,useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import {getAll,update,search} from  "./BookAPI.js"
import Books from  "./components/Books"
import Search from  "./components/Search"
//import UpdateBook from  "./components/Search"

function App() {
  const [searchBooks, setSearchBooks] = useState([]);
  const bookshelves = [
    { key: "currentlyReading", name: "Currently Reading" },
    { key: "wantToRead", name: "Want to Read" },
    { key: "read", name: "Read" }
  ];
  const [bookData,setBookData]=useState([])
  //console.log(bookData)
 // console.log(searchText)
  useEffect(()=>{
      getAll().then((data)=>{
        setBookData(data)
      })
  } ,[]);
 
   function moveBook (book, shelf){
    update(book, shelf)
    if (shelf === 'none') {
       let data=bookData.filter(b => b.id !== book.id)
       setBookData(data);
    }
     else {
      book.shelf = shelf;
      setBookData(bookData.filter(b => b.id !== book.id));
    }
    console.log(bookData)
  }
  
  function searchForBooks (query) {
    if (query.length > 0) {
      search(query).then(books => {
        if (books.error) {
          setSearchBooks( [ ] );
        } else {
          setSearchBooks(books);
        }
      });
    } else {
      setSearchBooks( [] );
    }
  }
  function closeSearch () {
    setSearchBooks([]);
  }
  return (
    <div className="app">

    <Routes>
        <Route path="/" element={<Books books={bookData} moveBook={moveBook} bookshelves={bookshelves}/>} />
        <Route path="search" element={(<Search  books={bookData} 
        searchBooks={searchBooks}
        searchForBooks={searchForBooks}
        moveBook={moveBook}
        closeSearch={closeSearch}
         /> )} />
      </Routes>
      
    </div>
  );
}

export default App;
