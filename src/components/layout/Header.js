import { Link } from 'react-router-dom';
import logo from '../../assets/logo-small.png';
import Container from './Container';
const Header = () => {
  return (
    <header>
      <Container>
        <nav className='nav'>
          <Link to='/' className='header-logo'>
            <img src={logo} alt='Little Lemon' />
          </Link>
          <ul className='nav-links'>
            <li>
              <Link to='/' className='nav-link card-title'>
                Home
              </Link>
            </li>
            <li>
              <a href='#about' className='nav-link card-title'>
                About
              </a>
            </li>
            <li>
              <a href='#menu' className='nav-link card-title'>
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
