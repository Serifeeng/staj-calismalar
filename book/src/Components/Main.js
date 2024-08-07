import React, { useState } from 'react';
import './style.css';
import Card from './Card';
import AddBookForm from './AddBookForm';
import axios from 'axios';

const Main = () => {
  const [search, setSearch] = useState("");
  const [bookData, setBookData] = useState([]);
  const [showAddBookForm, setShowAddBookForm] = useState(false);

  const searchBook = (evt) => {
    if (evt.key === "Enter") {
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=Api_key&maxResults=40`)
        .then(res => setBookData(res.data.items))
        .catch(err => console.log(err));
    }
  }

  const handleAddBook = (book) => {
    setBookData([book, ...bookData]); 
    setShowAddBookForm(false);
  };

  return (
    <>
      <div className='header'>
        <div className='row1'>
          
        </div>
        <div className='row2'>
          <h2>find your book</h2>
          <div className='search'>
            <input type='text' placeholder='Enter your book name'
              value={search} onChange={e => setSearch(e.target.value)}
              onKeyDown={searchBook} />
            <button className="Addbtn" type='button' onClick={() => setShowAddBookForm(true)}>Add</button>
          </div >
          <div className='Addpage'>  {showAddBookForm && <AddBookForm onAddBook={handleAddBook} />}</div>
        
        </div>
      </div>
      <div className='container'>
        <Card book={bookData} />
      </div>
    </>
  );
}

export default Main;
