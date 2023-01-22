import CallToAction from '../components/layout/CallToAction';
import HeroImage from '../assets/mediterranean-cuisine-g01db17309_1280.jpg';
import Specials from '../components/layout/Specials';

const OrderOnline = () => {
  return (
    <>
      <CallToAction primaryText='Order Online' secondaryText='Browse through our menu' description='' image={HeroImage} />
      <Specials header={false} />
    </>
  );
};
export default OrderOnline;
