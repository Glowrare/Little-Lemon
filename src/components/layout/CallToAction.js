import Button from '../ui/Button';

const CallToAction = ({ primaryText, secondaryText, description, cta, ctaText, ctaURL, image }) => {
  return (
    <section>
      <div className='cta-text-wrapper'>
        <div className='cta-header'>
          <h1 className='display-title'>{primaryText}</h1>
          <h2 className='subtitle'>{secondaryText}</h2>
        </div>
        <p className='description cta-desc'>{description}</p>
        {cta && <Button btnText={ctaText} path={ctaURL} />}
      </div>
      <div className='cta-image'>
        <img src={image} alt='' />
      </div>
    </section>
  );
};
export default CallToAction;
