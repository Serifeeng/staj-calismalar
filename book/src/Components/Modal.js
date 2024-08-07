import React from 'react';


const Modal = ({ show, onClose, book }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title">{book.volumeInfo.title}</h4>
        </div>
        <div className="modal-body">
          <img src={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail} alt="book"/>
          <p>{book.volumeInfo.description}</p>
          <p>Authors: {book.volumeInfo.authors && book.volumeInfo.authors.join(', ')}</p>
          <p>Publisher: {book.volumeInfo.publisher}</p>
          <p>Published Date: {book.volumeInfo.publishedDate}</p>
          <p>Page Count: {book.volumeInfo.pageCount}</p>
        </div>
        <div className="modal-footer">
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
