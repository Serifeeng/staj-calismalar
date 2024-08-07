import React, { useState } from 'react';

const AddBookForm = ({ onAddBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [thumbnail, setThumbnail] = useState('');

  const handleAddBook = (e) => {
    e.preventDefault();
    const newBook = {
      volumeInfo: {
        title,
        authors: [author],
        imageLinks: { smallThumbnail: thumbnail },
      },
      id: Math.random().toString(36).substr(2, 9), 
    };
    onAddBook(newBook);
    setTitle('');
    setAuthor('');
    setThumbnail('');
  };

  return (
    <form onSubmit={handleAddBook} className="add-book-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Kitap"
        required
      />
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Yazar"
        required
      />
      <input
        type="text"
        value={thumbnail}
        onChange={(e) => setThumbnail(e.target.value)}
        placeholder="Resim URL"
        required
      />
      <button type="submit">Kitap Ekle</button>
    </form>
  );
};

export default AddBookForm;
