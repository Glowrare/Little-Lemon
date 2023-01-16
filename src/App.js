import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout';
import HomePage from './pages/Home';
import BookingPage from './pages/Booking';
import ConfirmationPage from './pages/ConfirmedBooking';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/booking' element={<BookingPage />} />
          <Route path='/confirmation' element={<ConfirmationPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
