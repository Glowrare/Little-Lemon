import CallToAction from '../components/layout/CallToAction';
import HeroImage from '../assets/book-table.jpg';
// import OccasionSelect from '../components/ui/OccasionSelect';
// import UncontrolledInputField from '../components/ui/UncontrolledInputField';
import ReservationDetails from '../components/form/ReservationDetails';
import { useRef, useState } from 'react';

const Booking = () => {
  const [specialState, setSpecialState] = useState(false);

  const time = useRef(null);
  const guests = useRef(null);
  const comment = useRef(null);
  const occasion = useRef(null);
  const date = useRef(null);
  const specialSelector = (val) => {
    setSpecialState(val);
  };
  const reservationHandler = () => {
    console.log('clicked');
    console.log(time.current.value);
    console.log(date.current.value);
    console.log(guests.current.value);
    console.log(specialState);
    console.log(comment.current.value);
    console.log(occasion.current?.value);
  };
  return (
    <>
      <CallToAction primaryText='Reserve a Table' secondaryText='Dine with us!' description='' image={HeroImage} />
      {/* <form></form> */}
      <ReservationDetails
        time={time}
        date={date}
        guests={guests}
        special={specialState}
        comment={comment}
        occasion={occasion}
        specialSelector={specialSelector}
        reservationHandler={reservationHandler}
      />
    </>
  );
};
export default Booking;
