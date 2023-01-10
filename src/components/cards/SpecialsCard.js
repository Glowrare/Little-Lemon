import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const SpecialsCard = ({ meal }) => {
  return (
    <li className='specials-list-item'>
      <img src={meal.image} alt={meal.name} />
      {/* <div> */}
      <div className='card-header'>
        <h3 className='card-title'>{meal.name}</h3>
        <span>${meal.price}</span>
      </div>
      <p>{meal.description}</p>
      {/* </div> */}
      <Link to={meal.link}>
        Order a delivery <FontAwesomeIcon icon={faMotorcycle} />
      </Link>
    </li>
  );
};
export default SpecialsCard;
