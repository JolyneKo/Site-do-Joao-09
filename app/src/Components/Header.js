import logo from '../Images/logo.png';
import InputsPesquisar from './InputsPesquisar';

function Header() {
  return (
    <header className="barra-superior">
      <img src={logo} alt="logo" className="nav_logo"/>      

      <ul className="nav_links">
        <li className="link">
          <a href="#.">Home</a>
        </li>
        <li className="link">
          <a href="#.">Tutoriais</a>
        </li>
        <li className="link">
          <a href="#.">Contacts</a>
        </li>
        <li className="link">
          <a href="#.">About Us</a>
        </li>
        <li className="link">
          <a href="#.">Terms</a>
        </li>
      </ul>

      <div className="menu-icon">
        <div className="linha"></div>
        <div className="linha"></div>
        <div className="linha"></div>
      </div>

      <InputsPesquisar/>
    </header>
  )
}

export default Header;