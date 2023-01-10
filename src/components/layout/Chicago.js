import chefOne from '../../assets/chef-3975835_1280.jpg';
import chefTwo from '../../assets/chef-5993951_1280.jpg';
import Container from './Container';
const Chicago = () => {
  return (
    <section id='about'>
      <Container>
        {/* <div className='about-content'> */}
        <div className='about-header'>
          <h2 className='display-title'>Little Lemon</h2>
          <h3 className='subtitle'>Chicago</h3>
        </div>
        <div className='about-content'>
          <p className='about-desc'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla odio enim vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla odio
            enim vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla odio enim vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nulla odio enim vitae.
          </p>
          <div className='about-images'>
            <img src={chefOne} alt='' />
            <img src={chefTwo} alt='' />
          </div>
        </div>
        {/* </div> */}
      </Container>
    </section>
  );
};
export default Chicago;
