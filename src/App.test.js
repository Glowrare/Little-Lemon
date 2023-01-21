import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import BookingForm from './components/form/BookingForm';
import Booking from './pages/Booking';
import { act } from 'react-test-renderer';
import TestRenderer from 'react-test-renderer';

describe('Booking Form', () => {
  test('Renders the Booking Form heading', () => {
    render(<BookingForm availableTimes={['17:00', '20:00']} />);
    const headingElement = screen.getByText('Reservation Details');
    expect(headingElement).toBeInTheDocument();
  });
});

describe('Booking', () => {
  it('should call initializeTimes in useEffect and dispatch an action to update lenght of state', async () => {
    let testRenderer;
    act(() => {
      testRenderer = TestRenderer.create(
        <Router>
          <Booking />
        </Router>
      );
    });

    const instance = await testRenderer.root.findByType(Booking);
    expect(instance.props.state.times).toHaveLength(0);
  });
});
