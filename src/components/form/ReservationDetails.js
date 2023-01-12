import Container from '../layout/Container';
import CommentBox from '../ui/CommentBox';
import Button from '../ui/Button';
import CountSelect from '../ui/CountSelect';
import DateSelector from '../ui/DateSelector';
import OccasionSelect from '../ui/OccasionSelect';
import RadioOption from '../ui/RadioOption';

const ReservationDetails = ({ date, time, guests, special, occasion, comment, specialSelector, reservationHandler }) => {
  const availableTimes = ['13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'];
  return (
    <>
      <section>
        <Container>
          <h3 className='section-title'>Reservation Details</h3>
          <div className='reservation-form'>
            <DateSelector dateRef={date} labelText='Date' />
            <CountSelect id='time' selectRef={time} labelText='Choose Time' options={availableTimes} />
            <CountSelect
              id='guests'
              selectRef={guests}
              fullSpan={true}
              labelText='No of guests'
              options={Array(10)
                .fill(1)
                .map((n, i) => (i < 9 ? `0${n + i}` : n + i))}
            />
            <div>
              <h4>Special Occasion?</h4>
              <div>
                {['Yes', 'No'].map((item, index) => (
                  <RadioOption
                    key={index}
                    name='Special'
                    labelText={item}
                    id={`${item}-${index}`}
                    inputVal={item.toLowerCase()}
                    changeHandler={specialSelector}
                  />
                ))}
              </div>
            </div>
            {special === 'yes' && <OccasionSelect id='occasion' labelText='Select Occasion Type' selectRef={occasion} />}
            <CommentBox
              fullSpan={true}
              id='special-request'
              placeholder='Enter message'
              labelText='Special Request / Accommidations / Additional Note'
              commentRef={comment}
              className='test'
            />
          </div>
          <Button btnText='Make Your reservation' button={true} clickHandler={reservationHandler} />
        </Container>
      </section>
    </>
  );
};
export default ReservationDetails;
