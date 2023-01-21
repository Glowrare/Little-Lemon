import { useCallback, useEffect, useReducer, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
import { fetchAPI, submitAPI } from '../api.js';
import CallToAction from '../components/layout/CallToAction';
import HeroImage from '../assets/book-table.jpg';
import BookingForm from '../components/form/BookingForm';

// export const init = (initialTimes) => {
//   return initialTimes.times;
// };
const ACTIONS = {
  UPDATE_TIMES: 'update_times',
  INITAILIZE_TIMES: 'initialize_times',
};

const initialState = { times: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_TIMES:
      return { ...state, times: action.payload.times };
    case ACTIONS.INITAILIZE_TIMES:
      return { ...state, times: action.payload.times };
    default:
      return state;
  }
};

const Booking = () => {
  // const [specialState, setSpecialState] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  const navigate = useNavigate();

  const updateTimes = (date) => {
    const selectedDate = new Date(date);
    console.log(date);
    const response = fetchAPI(selectedDate);
    const times = response;

    dispatch({ type: ACTIONS.UPDATE_TIMES, payload: { times: times } });
  };

  const updateTimesCallback = useCallback(updateTimes, []);

  // const time = useRef(null);
  // const guests = useRef(null);
  // const comment = useRef(null);
  // const occasion = useRef(null);
  // const date = useRef(null);

  const submitForm = (formData) => {
    console.log('clicked');
    console.log(formData);
    // const response = submitAPI(formData);

    // if (response) {
    //   navigate('/confirmation');
    // }
  };

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
        // time={time}
        // date={date}
        // guests={guests}
        // special={specialState}
        // comment={comment}
        // occasion={occasion}
        availableTimes={state.times}
        // specialSelector={specialSelector}
        reservationHandler={submitForm}
        updateTimesCallback={updateTimesCallback}
        // dateHandler={updateTimes}
      />
    </>
  );
};
export default Booking;
