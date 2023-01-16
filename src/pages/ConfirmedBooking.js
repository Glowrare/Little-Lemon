import SuccessIcon from '../assets/mdi_success-circle.png';
import Container from '../components/layout/Container';
import Button from '../components/ui/Button';

const ConfirmedBooking = () => {
  return (
    <Container customize={true} customStyles={{ textAlign: 'center', marginBottom: '80px' }}>
      <div>
        <img src={SuccessIcon} alt='' />

        <p className='lead-text' style={{ margin: '20px 0 30px' }}>
          Reservation Successful
        </p>

        <Button btnText='Visit Home' path='/' />
      </div>
    </Container>
  );
};
export default ConfirmedBooking;
