import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import logo from '../../assets/logo-long.png';
import Container from './Container';
const Footer = () => {
  const logoStyle = {
    maxWidth: '100%',
  };
  return (
    <footer className='footer'>
      <Container className='footer-wrapper'>
        <Link to='/' className='logo'>
          <img src={logo} alt='Little Lemon' style={logoStyle} />
        </Link>
        <div>
          <h3>Doormat Navigation</h3>

          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <a href='#about'>About</a>
            </li>
            <li>
              <a href='#menu'>Menu</a>
            </li>
            <li>
              <Link to='/booking'>Reservations</Link>
            </li>
            <li>
              <Link to='/order-online'>Order Online</Link>
            </li>
            <li>
              <Link to='/'>Login</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div>
          <h3>Social Media Links</h3>
          <ul className='social-links'>
            <a href='facebook.com' target='_blank'>
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href='twitter.com' target='_blank'>
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href='instagram.com' target='_blank'>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href='youtube.com' target='_blank'>
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href='linkedin.com' target='_blank'>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </ul>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
