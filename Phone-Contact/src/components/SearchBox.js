import React from 'react';
import '../css/SearchBox.css';

const SearchBox = ({ setSearchTerm, addButtonClick }) => {// SearchBox adında fonksiyonel bir component tanımladım.SetSearchTerm, addButtonClick ise porplar
  const handleChange = (e) => {// arama kutusuna bir sey yazıldıgında tetiklenecek olan fonksiyon
    setSearchTerm(e.target.value);// event onChange tarafından sağlanır. e.target.value kullanıcı tarafından girilen texti temsil eder  setSearchTerm arama texttini günceller
  };

  return (
    <div className='searchbox'>
      <input 
        className='searchtext' 
        placeholder='Search ' 
        onChange={handleChange} // arama cubuguna bir şey eklendiginde handleChange fonksiyonu tetiklenir
      />
      <button className='addbutton' onClick={addButtonClick}>
        <i className='bx bxs-plus-circle'></i>
      </button>
      {/*butona tıklandıgında addButtonClick fonksiyonu tetiklenir  */}
    </div>
  );
};

export default SearchBox;

