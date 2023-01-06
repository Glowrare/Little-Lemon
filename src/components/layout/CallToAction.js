import Button from '../ui/Button';
import Container from './Container';

const CallToAction = ({ primaryText, secondaryText, description, cta, ctaText, ctaURL, image }) => {
  const wrapperStyles = {
    color: 'var(--white)',
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
    padding: '50px 20px 0',
  };
  const containerStyle = {
    marginBottom: '100px',
    background: 'var(--primary-color)',
  };

  return (
    <Container customize={true} customStyles={containerStyle}>
      <div style={wrapperStyles}>
        <div className='cta-text-wrapper'>
          <div className='cta-header'>
            <h1 className='display-title'>{primaryText}</h1>
            <h2 className='subtitle'>{secondaryText}</h2>
          </div>
          <p className='cta-desc'>{description}</p>
          {cta && <Button btnText={ctaText} path={ctaURL} />}
        </div>
        <div className='cta-image'>
          <img src={image} alt='' />
        </div>
      </div>
    </Container>
  );
};
export default CallToAction;
