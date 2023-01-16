import CallToAction from '../components/layout/CallToAction';
import HeroImage from '../assets/book-table.jpg';
import BookingForm from '../components/form/BookingForm';
import { useEffect, useReducer, useRef, useState } from 'react';
import { fetchAPI, submitAPI } from '../api.js';
import { useNavigate } from 'react-router-dom';

// export const init = (initialTimes) => {
//   return initialTimes.times;
// };
const ACTIONS = {
  UPDATE_TIMES: 'update_times',
  INITAILIZE_TIMES: 'initialize_times',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_TIMES:
      return action.payload.times;
    case ACTIONS.INITAILIZE_TIMES:
      return action.payload.times;
    default:
      return state;
  }
};

const Booking = () => {
  const [specialState, setSpecialState] = useState(false);
  const [availableTimes, dispatch] = useReducer(reducer, []);

  const navigate = useNavigate();

  const updateTimes = () => {
    const selectedDate = new Date(date.current.value);
    const response = fetchAPI(selectedDate);
    const times = response;

    dispatch({ type: ACTIONS.UPDATE_TIMES, payload: { times: times } });
  };

  const time = useRef(null);
  const guests = useRef(null);
  const comment = useRef(null);
  const occasion = useRef(null);
  const date = useRef(null);
  const specialSelector = (val) => {
    setSpecialState(val);
  };
  const submitForm = () => {
    console.log('clicked');
    console.log(time.current.value);
    console.log(date.current.value);
    console.log(guests.current.value);
    console.log(specialState);
    console.log(comment.current.value);
    console.log(occasion.current?.value);

    const formData = {
      time: time.current.value,
      date: date.current.value,
      guests: guests.current.value,
      specialOccasion: specialState,
      occasion: specialState ? occasion.current.value : 'No Special Occasion',
      specialNote: comment.current.value,
    };

    const response = submitAPI(formData);

    if (response) {
      navigate('/confirmation');
    }
  };
  // function initializeTimes() {
  //   const dateToday = new Date();

  //   const response = fetchAPI(dateToday);
  //   const times = response;

  //   dispatch({ type: ACTIONS.INITAILIZE_TIMES, payload: { times: times } });
  // }

  useEffect(() => {
    function initializeTimes() {
      const dateToday = new Date();

      const response = fetchAPI(dateToday);
      const times = response;

      dispatch({ type: ACTIONS.INITAILIZE_TIMES, payload: { times: times } });
    }
    initializeTimes();
  }, []);
  return (
    <>
      <CallToAction primaryText='Reserve a Table' secondaryText='Dine with us!' description='' image={HeroImage} />
      {/* <form></form> */}
      <BookingForm
        time={time}
        date={date}
        guests={guests}
        special={specialState}
        comment={comment}
        occasion={occasion}
        availableTimes={availableTimes}
        // availableTimes={['13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00']}
        specialSelector={specialSelector}
        reservationHandler={submitForm}
        dateHandler={updateTimes}
      />
    </>
  );
};
export default Booking;
