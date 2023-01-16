import { render, screen } from '@testing-library/react';
import BookingForm from './components/form/BookingForm';
// import Booking from './pages/Booking';

describe('Booking Form', () => {
  test('Renders the Booking Form heading', () => {
    render(<BookingForm availableTimes={['17:00', '20:00']} />);
    const headingElement = screen.getByText('Reservation Details');
    expect(headingElement).toBeInTheDocument();
  });
});
