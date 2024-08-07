import React, { useState } from 'react';
import Modal from './Modal';

const Card = ({ book }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleDetailsClick = (item) => {
    setSelectedBook(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedBook(null);
  };

  return (
    <>
      {book.map((item) => {
        let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
        let amount = item.saleInfo && item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
        if (thumbnail !== undefined) {
          return (
            <div className="card" key={item.id}>
              <img src={thumbnail} alt="book" />
              <div className="bottom">
                <h3 className="title">{item.volumeInfo.title}</h3>
                {amount !== undefined ? (
                  <p className="amount">&#8377;{amount}</p>
                ) : (
                  <p className="amount">Price not available</p>
                )}
                <button type="button" onClick={() => handleDetailsClick(item)}>Details</button>
              </div>
            </div>
          );
        }
        return null;
      })}
      {selectedBook && <Modal show={showModal} onClose={handleCloseModal} book={selectedBook} />}
    </>
  );
}

export default Card;
