const TestimonialCard = ({ testimonial }) => {
  return (
    <article>
      <h3>{testimonial.rating}</h3>
      <div>
        <img src={testimonial.image} alt='' />
        <p>{testimonial.name}</p>
      </div>
      <p>{testimonial.review}</p>
    </article>
  );
};
export default TestimonialCard;
