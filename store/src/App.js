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
