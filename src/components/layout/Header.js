import logo from '../../assets/logo-small.png';
const Header = () => {
  return (
    <header>
      <nav>
        <a href='/' className='logo'>
          <img src={logo} alt='Little Lemon' />
        </a>

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
      </nav>
    </header>
  );
};
export default Header;
