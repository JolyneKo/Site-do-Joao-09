import { useState } from 'react';

import Header from './Components/Header';
import Menu from './Components/Menu';
import Main from './Components/Main';

import './CSS/Header.css';
import './CSS/Menu.css';
import './CSS/Main.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(() => false);

  function onIconClick() {
    setIsMenuOpen(prevValue => !prevValue);
  }

  return (
    <>
      <Header onIconClick={onIconClick}/>
      {isMenuOpen && <Menu/>}
      <Main/>
    </>
  )
}

export default App;