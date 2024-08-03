import React from 'react';
import Rehber from './Rehber';

const RehberList = ({ contacts, onDelete, onUpdate }) => {
  return (
    <div className="rehber-list">
      {contacts.map(contact => (// contacts dizisini döngüye alır ve her bir contact nesnesi icin Rehber componenti olusturur
        <Rehber 
          key={contact.id} // her bir bileseni benzersiz tanımlamak icin
          contact={contact} 
          onDelete={onDelete} // rehber componentinin bir ögesini silmek icin
          onUpdate={onUpdate} // rehber componentinin bir ögesini güncellemk icin
        />
      ))}
    </div>
  );
};

export default RehberList;

