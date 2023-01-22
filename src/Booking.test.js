import { MemoryRouter } from 'react-router-dom';
import { cleanup, screen, render, fireEvent } from '@testing-library/react';
import Booking from './pages/Booking';

describe('Booking', () => {
  afterEach(cleanup);

  test('initializeTimes returns non-empty array', async () => {
    render(
      <MemoryRouter>
        <Booking />
      </MemoryRouter>
    );
    await screen.findByTestId('time');
    const availableTimes = screen.getByTestId('time');
    expect(availableTimes.options.length).toBeGreaterThan(0);
  });

  test('updateTimes sends payload.times that updates reducer state', async () => {
    render(
      <MemoryRouter>
        <Booking />
      </MemoryRouter>
    );
    const dateInput = screen.getByTestId('date');
    fireEvent.change(dateInput, { target: { value: '2023-12-25' } });
    fireEvent.blur(dateInput);
    await screen.findByTestId('time');
    const availableTimes = screen.getByTestId('time');
    expect(availableTimes.options.length).toBeGreaterThan(0);
    expect(availableTimes.options[0].value).toBe('');
    expect(availableTimes.options[1].value).toBe('17:00');
  });
  // });
});
