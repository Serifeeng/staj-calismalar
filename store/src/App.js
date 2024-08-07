// import React, { useState } from 'react';
// import './css/App.css';
// import BookTable from './BookTable';
// import BookImages from './BookImages';

// function App() {
//   const [theme, setTheme] = useState('dark');

//   const toggleTheme = () => {
//     setTheme(theme === 'dark' ? 'light' : 'dark');
//   };

//   return (
//     <div className={`App ${theme}`}>
    
//       <div className='title'><h1>BOOK STORE</h1></div>
//       <div>
//       <button className='toggle-button' onClick={toggleTheme}>Dark Mod On</button>
//       </div>

//       <BookImages />
//       <BookTable />
//     </div>
//   );
// }

// export default App;

import React, { useEffect,useState} from 'react';
import './css/App.css';
import BookTable from './BookImages';
import BookImages from './BookTable';

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="App">
      <div className='title'><h1>BOOK STORE</h1></div>
      
      <div>
        <button className='toggle-button' onClick={toggleTheme}>
          {theme === 'dark' ? 'Light Mode On' : 'Dark Mode On'}
        </button>
      </div>
      <BookTable />

      <BookImages />

      
    </div>
  );
}

export default App;
