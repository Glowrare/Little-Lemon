import CustomerOne from '../../assets/customer1.png';
import CustomerTwo from '../../assets/customer2.png';
import CustomerThree from '../../assets/customer3.png';
import TestimonialCard from '../cards/TestimonialCard';

const CustomersSay = () => {
  const testimonials = [
    {
      name: 'Jane Doe',
      image: CustomerOne,
      rating: '⭐⭐⭐⭐⭐',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet nec in ornare.',
      link: '#',
    },
    {
      name: 'John Doe',
      image: CustomerTwo,
      rating: '⭐⭐⭐⭐',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet nec in ornare.',
      link: '#',
    },
    {
      name: 'Janet Doe',
      image: CustomerThree,
      rating: '⭐⭐⭐⭐⭐',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet nec in ornare.',
      link: '#',
    },
  ];
  return (
    <ul>
      {testimonials.map((testimonial, idx) => (
        <TestimonialCard testimonial={testimonial} key={idx} />
      ))}
    </ul>
  );
};
export default CustomersSay;
