import { Link } from "react-router-dom";
// import {update,get} from  "../BookAPI.js"
// import { useState } from "react";
import Bookshelf from  "../components/Bookshelf"
function Book(props){
    

    return(
        <>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
            {props.bookshelves.map(shelf => (
              <Bookshelf
                key={shelf.key}
                shelf={shelf}
                books={props.books}
                moveBook={props.moveBook}
              />
            ))}
            </div>
          </div>
          <div className="open-search">
                <Link type="button "  to={'search'} >Add a book</Link>
          </div>
        </div>
        </>
        
    )
}
export default Book;


/*
<div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {props.books.filter((book)=>{
                       return book.shelf === "currentlyReading"}).map((item)=>{
                        return (
                          <li key={item.id}>
                      <div className="book" key={item.id}>
                        <div className="book-top">
                          <div  
                            className="book-cover"
                            style={{
                              width: 128,
                              height: 193,
                              backgroundImage:
                                `url(${item.imageLinks.thumbnail})`
                            }}
                          ></div>
                          <div className="book-shelf-changer" key={item.id}>
                            <select onChange={handleChange} value={value}>
                              <option value="none" disabled>
                                Move to...
                              </option>
                              <option value="currentlyReading">
                                Currently Reading
                              </option>
                              <option value="wantToRead" >want To Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>
                          </div>
                        </div>
                        <div className="book-title">{item.title}</div>
                        <div className="book-authors">{item.authors}</div>
                      </div>
                    </li>
                        )
                          
                        })}
                    
                  </ol>
                </div>
              </div>
             
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                  {props.books.filter((book)=>{
                       return book.shelf === "wantToRead"}).map((item)=>{
                        return (
                          <li key={item.id}>
                      <div className="book" key={item.id}>
                        <div className="book-top">
                          <div
                            className="book-cover"
                            style={{
                              width: 128,
                              height: 193,
                              backgroundImage:
                                `url(${item.imageLinks.thumbnail})`
                            }}
                          ></div>
                          <div className="book-shelf-changer">
                            <select onChange={handleChange}>
                              <option value="none" disabled>
                                Move to...
                              </option>
                              <option value="currentlyReading">
                                Currently Reading
                              </option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>
                          </div>
                        </div>
                        <div className="book-title">{item.title}</div>
                        <div className="book-authors">{item.authors}</div>
                      </div>
                    </li>
                        )
                          
                        })}
                  </ol>
                </div>
              </div>
            
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                  {props.books.filter((book)=>{
                       return book.shelf === "read"}).map((item)=>{
                        return (
                          <li key={item.id}>
                      <div className="book" key={item.id}>
                        <div className="book-top">
                          <div
                            className="book-cover"
                            style={{
                              width: 128,
                              height: 193,
                              backgroundImage:
                                `url(${item.imageLinks.thumbnail})`
                            }}
                          ></div>
                          <div className="book-shelf-changer">
                            <select onChange={handleChange}>
                              <option value="none" disabled>
                                Move to...
                              </option>
                              <option value="currentlyReading">
                                Currently Reading
                              </option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>
                          </div>
                        </div>
                        <div className="book-title">{item.title}</div>
                        <div className="book-authors">{item.authors}</div>
                      </div>
                    </li>
                        )
                          
                        })}
                  </ol>
                </div>
              </div>
             
              */