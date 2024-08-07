import React, { useState, useEffect } from 'react';
import './css/BookImages.css';

function BookImages() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const bookTitles = ['Beyaz Diş', 'Fareler ve İnsanlar','Karamozov Kardeşler','Kürk Mantolu Madonna','The Spinoza Problem','Altıncı Koğuş','Hayvan Çiftliği','Sefiller']; 
    const apiKey = 'Api key'; 

    Promise.all(
      bookTitles.map(title =>
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${title}&key=${apiKey}`)
          .then(response => response.json())
          .then(data => data.items ? data.items[0] : null)
      )
    ).then(results => {
      const formattedBooks = results
        .filter(book => book !== null)
        .map(item => ({
          id: item.id,
          title: item.volumeInfo.title,
          imageUrl: item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : '',
          author: item.volumeInfo.authors ? item.volumeInfo.authors.join(', ') : '',
        }));
      setBooks(formattedBooks);
    }).catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="book-images">
      {books.length > 0 ? (
        books.map(book => (
          <div key={book.id} className="book">
            <img className='image' src={book.imageUrl} alt={book.title} />
            <div className='card'>
            <h2>{book.title}</h2>
            <h6>{book.author}</h6> 
            </div>
          </div>
        ))
      ) : (
        <p>No books found.</p>
      )}
    </div>
  );
}

export default BookImages;
