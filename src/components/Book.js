import React from 'react';
//import BookshelfChanger from './BookshelfChanger';
import { useState } from "react";
function  Book({ book, shelf, moveBook }){
const [value,setValue]= useState(shelf);
console.log(value)
function handleChange(e){
  const newValue=e.target.value;
   setValue(newValue); 
   moveBook(book,newValue)
}
return (
    
  <li>
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${
              book.imageLinks
                ? book.imageLinks.thumbnail
                : 'icons/book-placeholder.svg'
            })`
          }}
        />
         <div className="book-shelf-changer">
        <select value={value} onChange={handleChange}>
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">
        {book.authors ? book.authors.join(', ') : 'Unknown Author'}
      </div>
    </div>
  </li>
);
        }
export default Book;
