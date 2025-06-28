import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

// --- Data for the Testimonials (Using online images from Unsplash) ---
// --- CORRECTED: Data for the Testimonials (Using new, working online images) ---
const testimonials = [
  {
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
    name: 'Amina Okoro',
    role: 'Daughter of a Client',
    rating: 5,
    review: 'Finding reliable care for my mother from miles away felt impossible until I found Tendaly. The app is so intuitive, and the caregiver they matched us with, Grace, is an absolute gem. I have peace of mind I never thought possible.',
  },
  {
    // ✨ FIXED IMAGE URL
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
    name: 'David Chen',
    role: 'Certified Caregiver',
    rating: 5,
    review: 'Tendaly respects caregivers. I set my own hours, my rates are fair, and I get paid weekly without any hassle. The platform makes it easy to connect with families who truly appreciate my skills. It’s the best career move I’ve made.',
  },
  {
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
    name: 'Fatima Al-Jamil',
    role: 'Seeking Post-Operative Care',
    rating: 5,
    review: 'After my surgery, I needed short-term help at home. Tendaly connected me with a compassionate professional within hours. The entire process was seamless, secure, and so much less stressful than I anticipated.',
  },
   {
    // ✨ FIXED IMAGE URL
    image: 'https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
    name: 'Samuel Adebayo',
    role: 'Son of a Client',
    rating: 5,
    review: 'The transparency is what sold me. I can see visit logs, communicate directly with my father\'s caregiver, and handle payments all in one place. It’s an incredible service for the diaspora community.',
  },
];


// --- Reusable Testimonial Card Component ---
const TestimonialCard = ({ image, name, role, rating, review }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <motion.div
      variants={cardVariants}
      className="flex h-full flex-col rounded-xl bg-white p-6 shadow-lg"
    >
      <div className="flex-shrink-0">
        <FaQuoteLeft className="h-8 w-8 text-indigo-200" />
      </div>
      <div className="flex-grow pt-4">
        <p className="text-base text-slate-600">{review}</p>
      </div>
      <div className="mt-6 border-t border-slate-200 pt-6">
        <div className="flex items-center">
          <img className="h-12 w-12 flex-shrink-0 rounded-full object-cover" src={image} alt={name} />
          <div className="ml-4">
            <h4 className="text-base font-bold text-slate-900">{name}</h4>
            <p className="text-sm text-slate-500">{role}</p>
          </div>
          <div className="ml-auto flex items-center">
            {[...Array(rating)].map((_, i) => (
              <FaStar key={i} className="h-5 w-5 text-amber-400" />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};


// --- Main Testimonials Page Component ---
const Testimonials = () => {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  return (
    <section className="bg-slate-50 font-sans py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-4xl font-bold tracking-tight text-indigo-900 sm:text-5xl"  style={{fontFamily:'Nunito'}}>
            Trusted by Our Community
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Hear from families and caregivers who have found peace of mind and meaningful work through Tendaly.
          </p>
        </div>

        {/* Masonry-style Grid with Staggered Animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;