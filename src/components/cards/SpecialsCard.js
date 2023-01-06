import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SpecialsCard = ({ meal }) => {
  return (
    <article>
      <div>
        <img src={meal.image} alt={meal.name} />
      </div>
      <div>
        <h3 className='card-title'>{meal.name}</h3>
        <span>{meal.price}</span>
      </div>
      <p>{meal.description}</p>
      <a href={meal.link}>
        Order a delivery <FontAwesomeIcon icon={faMotorcycle} />
      </a>
    </article>
  );
};
export default SpecialsCard;
