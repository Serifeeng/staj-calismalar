import React, { useState } from 'react';
import AddContact from './AddContact';
import RehberList from './RehberList';
import SearchBox from './SearchBox';
import '../css/App.css';

const App = () => {
  const [contacts, setContacts] = useState([]);// rehberdeki kisileri saklar
  const [searchTerm, setSearchTerm] = useState('');// arama cubuguna yazılan texti saklar
  const [isAdding, setIsAdding] = useState(false);// ekleme componentinin görünüp görünmediğini kontrol eder

  const handleAddContact = (name, text) => {// Date.now = milisaniye cinsinden zaman, id olarak tanımlanır
    setContacts([...contacts, { id: Date.now(), name, text }]); // ...contacts dizisinin tüm öğelerini genişletir ve yeni bir diziye kopyalar.(spread operator)
    setIsAdding(false);// ekleme componentinin görünüp görünmediğini kontrol eder
  };

  const handleDeleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));// dizideki elemanlardan aranan elemanın id'sine esit olup olmadığı kontrol edilir esit olan silinir 
  };

  const handleUpdateContact = (id, updatedName, updatedText) => {
    setContacts(contacts.map(contact => 
      contact.id === id ? { ...contact, name: updatedName, text: updatedText } : contact// Aranan id ile eslesen nesne guncellenir
    ));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddButtonClick = () => {
    setIsAdding(true);
  };

  const handleCancel = () => {
    setIsAdding(false); // Ekleme bileşenini kapatır
  };

  return (
    <div className="app">
      <SearchBox setSearchTerm={setSearchTerm} addButtonClick={handleAddButtonClick} />
      <RehberList 
        contacts={filteredContacts} 
        onDelete={handleDeleteContact} 
        onUpdate={handleUpdateContact} 
      />

   {isAdding && <AddContact  onSubmit={handleAddContact} onCancel={handleCancel} />} 
    </div>
  );
};

export default App;

