import { Link } from 'react-router-dom';

const Button = ({ btnText, path }) => {
  return (
    <Link className='btn-primary' to={path}>
      {btnText}
    </Link>
  );
};
export default Button;
