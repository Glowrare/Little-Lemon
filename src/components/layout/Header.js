import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-small.png';
import Container from './Container';
const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <header>
      <Container>
        <nav className='nav'>
          <Link to='/' className='header-logo'>
            <img src={logo} alt='Little Lemon' />
          </Link>
          <button
            className='hamburger'
            type='button'
            aria-label={`Click to ${isNavExpanded ? 'close' : 'open'} navigation menu`}
            onClick={() => setIsNavExpanded(!isNavExpanded)}
          >
            {isNavExpanded ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
          </button>
          <ul className={isNavExpanded ? 'nav-links expanded' : 'nav-links'} aria-hidden={isNavExpanded ? false : true}>
            <li>
              <Link to='/' className='nav-link card-title'>
                Home
              </Link>
            </li>
            <li>
              <a href='/#about' className='nav-link card-title'>
                About
              </a>
            </li>
            <li>
              <a href='/#menu' className='nav-link card-title'>
                Menu
              </a>
            </li>
            <li>
              <Link to='/booking' className='nav-link card-title'>
                Reservations
              </Link>
            </li>
            <li>
              <Link to='/order-online' className='nav-link card-title'>
                Order Online
              </Link>
            </li>
            <li>
              <Link to='/' className='nav-link card-title'>
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};
export default Header;
