import React, { useState, useEffect } from 'react';

function BookTable() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const bookTitles = ['Beyaz Diş', 'Fareler ve İnsanlar','Karamozov Kardeşler','Kürk Mantolu Madonna','The Spinoza Problem','Altıncı Koğuş','Hayvan Çiftliği','Sefiller']; 
    const apiKey = 'Api key'; 

    Promise.all(
      bookTitles.map(title =>
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${title}&key=${apiKey}`)
          .then(response => response.json())
          .then(data => data.items ? data.items[1] : null)
      )
    ).then(results => {
      const formattedBooks = results
        .filter(book => book !== null)
        .map(item => ({
          id: item.id,
          title: item.volumeInfo.title,
          author: item.volumeInfo.authors ? item.volumeInfo.authors.join(', ') : '',
          price: item.saleInfo.listPrice ? item.saleInfo.listPrice.amount : '',
          imageUrl: item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : '',
        }));
      setBooks(formattedBooks);
    });
  }, []);

  return (
    <div className="book-table">
      <table className='w3-table w3-bordered'>
          <tr>
          <th>Number</th>
            <th>Title</th>
            <th>Author</th>
            
          </tr>
          {books.map((book,index) => (
            <tr key={book.id} >
              <td>{index+1}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              
            </tr>
          ))}
        
      </table>
    </div>
  );
}

export default BookTable;
