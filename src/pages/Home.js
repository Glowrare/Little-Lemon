import HeroImage from '../assets/hero-image-sm.jpg';
import CallToAction from '../components/layout/CallToAction';
import Chicago from '../components/layout/Chicago';
import CustomersSay from '../components/layout/CustomersSay';
// import FullBleedBackground from '../components/layout/FullBleedBackground';
import Specials from '../components/layout/Specials';
const Home = () => {
  return (
    <>
      {/* <FullBleedBackground background='var(--primary-color)'></FullBleedBackground> */}
      <CallToAction
        primaryText='Little Lemon'
        secondaryText='Chicago'
        description='We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.'
        cta={true}
        ctaText='Reserve a Table'
        ctaURL='/booking'
        image={HeroImage}
      />
      <Specials />
      <CustomersSay />
      <Chicago />
    </>
  );
};
export default Home;
