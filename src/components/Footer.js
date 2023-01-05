import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/logo-long.png';
const Footer = () => {
  const logoStyle = {
    maxWidth: '100%',
  };
  return (
    <footer>
      <a href='/' className='logo'>
        <img src={logo} alt='Little Lemon' style={logoStyle} />
      </a>
      <div>
        <h3>Doormat Navigation</h3>
        <ul>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>About</a>
          </li>
          <li>
            <a href='#'>Menu</a>
          </li>
          <li>
            <a href='#'>Reservations</a>
          </li>
          <li>
            <a href='#'>Order Online</a>
          </li>
          <li>
            <a href='#'>Login</a>
          </li>
        </ul>
      </div>
      <div>
        <h3>Contact</h3>
        <p>address</p>
      </div>
      <div>
        <h3>Social Media Links</h3>
        <ul className='social-links'>
          <a href='#'>
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href='#'>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href='#'>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href='#'>
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href='#'>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
