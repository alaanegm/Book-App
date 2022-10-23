
import React from 'react';
import Book from './Book';

function  Bookshelf (props)  {
  const { shelf, books, moveBook } = props;
  const bookShelfFilter = books.filter(book => book.shelf === shelf.key);
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf.name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {bookShelfFilter.map(book => (
            <Book key={book.id} book={book} shelf={shelf.key} moveBook={moveBook} />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Bookshelf;
