import HeroImage from '../assets/hero-image-sm.jpg';
const Home = () => {
  return (
    <>
      <section>
        <div className=''>
          <div>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          </div>
          <a href='#reserve-a-table' className='btn-primary'>
            Reserve a table
          </a>
        </div>
        <div>
          <img src={HeroImage} alt='' />
        </div>
      </section>
    </>
  );
};
export default Home;
