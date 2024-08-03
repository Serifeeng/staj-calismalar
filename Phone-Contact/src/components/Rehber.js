import React, { useState } from 'react';
import '../css/Rehber.css';

const Rehber = ({ contact, onDelete, onUpdate }) => {// Rehber adında bir component oluşturdum icerisinde contact,onDelete,onUpdate adında 3 tane prop var
  const [isEditing, setIsEditing] = useState(false);// düzenleme modunda olup olmadığını kontrol etmek icin 
  const [name, setName] = useState(contact.name);// isim bilgisini tutmak icin
  const [text, setText] = useState(contact.text);// text bilgisini tutmak icin 
  const [showButtons, setShowButtons] = useState(false);// düzenleme ve silme butonlarının görünürlük durumunu ayarlamak icin
// yukarıdaki herbirinin state durumu oluşturdum UseState icerisinde default değerleri var
  const handleUpdate = () => {
    onUpdate(contact.id, name, text);
    setIsEditing(false);
  };
// handleUpdate butonu onUpdate fonksiyonunu cagırarak mevcut kisinin name ve text bilgisini günceller
// contact rehbere gecirilen prop olarak gecilen bir nesnedir. bir girisin bilgilerini tutar
// id ise her girisi benzersiz kılmak icin verilir 
// son olarak düzenleme modu kapatılır
  return (
    <div>
      {isEditing ? (// eger state durumu tanımlanan isEditing true ise bu edit divi calısır
        <div className='edit'> 
          <input className='intput' value={name} onChange={(e) => setName(e.target.value)} />
          <input className='intput' value={text} onChange={(e) => setText(e.target.value)} />
          <button className='update' onClick={handleUpdate}>Update</button>
          <button className='cancel' onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
        //e.target (target olayın tetiklendiği dom elementi ) olayın hangi element uzerinde olduğunu belirlemek icin kullanılır value ise targeten icindeki degeri temsil eder
     
      ) :// isEditing false ise rehber divi calısır
       (
        <div className='rehber'>
          <div className='rehberText'>
            <p>{contact.name}</p>
            <button className='Cnttxt' onClick={() => setShowButtons(!showButtons)}>{contact.text} </button>
          </div>
          {showButtons && (
            <div className='rehberEdit'>
              <button onClick={() => setIsEditing(true)}>Edit</button>
              <button className='delete' onClick={() => onDelete(contact.id)}>Delete</button>
            </div>
          )} {/* showButtons butonu true ise rehberEdit render edilir false ise edilmez*/ }
          <div className='icon'>
            <button className='tel-button'><i className='bx bx-phone'></i></button>
            <button className='msg-button'><i className='bx bx-message-dots'></i></button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Rehber;

