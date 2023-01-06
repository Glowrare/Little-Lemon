import { Link } from 'react-router-dom';
import logo from '../../assets/logo-small.png';
const Header = () => {
  return (
    <header>
      <nav>
        <Link to='/' className='logo'>
          <img src={logo} alt='Little Lemon' />
        </Link>

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
      </nav>
    </header>
  );
};
export default Header;
