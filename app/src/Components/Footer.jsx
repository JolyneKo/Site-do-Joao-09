import { FaFacebook } from 'react-icons/fa';
import { AiFillTwitterCircle, AiOutlineGithub } from 'react-icons/ai';

function Footer() {
  return (
    <footer className="footer">
      <div className="social_icons">
        <a href="https://facebook.com" target="_blank" title="Nossa página no Facebook">
          <FaFacebook className="icons facebook_icon"/>
        </a>

        <a href="https://github.com/JolyneKo" target="_blank" title="Github do criador">
          <AiOutlineGithub className="icons github_icon"/>
        </a>

        <a href="https://twitter.com" target="_blank" title="Nossa página no Twitter">
          <AiFillTwitterCircle className="icons twitter_icon"/>
        </a>
      </div>

      <ul class="list_aboutUs">
        <li className="item">
          <a href="#.">Info</a>
        </li>
        <li className="item">
          <a href="#.">Contacts</a>
        </li>
        <li className="item">
          <a href="#.">About Us</a>
        </li>
      </ul>

      <p className="copy">&copy; 2021 - Site do João</p>
    </footer>
  )
}

export default Footer;