import { useState } from 'react';

import Header from './Components/Header';
import Menu from './Components/Menu';

import './CSS/Header.css';
import './CSS/Menu.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(() => false);

  function onIconClick() {
    setIsMenuOpen(prevValue => !prevValue);
  }

  return (
    <>
      <Header onIconClick={onIconClick}/>
      {isMenuOpen && <Menu/>}
    </>
  )
}

export default App;