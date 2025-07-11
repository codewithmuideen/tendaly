import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

// --- Data for the Testimonials (Using online images from Unsplash) ---
// --- CORRECTED: Data for the Testimonials (Using new, working online images) ---
// --- Updated Testimonials with Grayscale Silhouette Images ---
const testimonials = [
  {
    image: 'https://media.istockphoto.com/id/1934800192/vector/vector-illustration-depicting-female-face-silhouettes-or-icons-serving-as-avatars-or.jpg?s=612x612&w=0&k=20&c=RNKS7ZquP3reGRiVjepLcwioEtjK-sHniSQX9IDYyL4=',
    name: 'Abby Kilpatrick',
    role: 'Daughter of a Client',
    rating: 5,
    review: 'Finding reliable care for my mother from miles away felt impossible until I found Tendaly. The app is so intuitive, and the caregiver they matched us with, Grace, is an absolute gem. I have peace of mind I never thought possible.',
  },
  {
    image: 'https://media.istockphoto.com/id/2074983548/vector/default-placeholder-doctor-portrait-photo-avatar-on-gray-background-greyscale-female.jpg?s=612x612&w=0&k=20&c=kRx9BZpeg3WruAKBRDfBrd03P6sWyLW2PzLRUaQnueE=',
    name: 'Cindy Chen',
    role: 'Certified Caregiver',
    rating: 5,
    review: 'Tendaly respects caregivers. I set my own hours, my rates are fair, and I get paid weekly without any hassle. The platform makes it easy to connect with families who truly appreciate my skills. It’s the best career move I’ve made.',
  },
  {
    image: 'https://media.istockphoto.com/id/1133765594/vector/person-gray-photo-placeholder-woman.jpg?s=612x612&w=0&k=20&c=3s8E3J67u8BQVb1Jp_emX5e8hgYHlymfH5yIwxJ-1NA=',
    name: 'Fatima Al-Jamil',
    role: 'Seeking Post-Operative Care',
    rating: 5,
    review: 'After my surgery, I needed short-term help at home. Tendaly connected me with a compassionate professional within minutes. The entire process was seamless, secure, and so much less stressful than I anticipated.',
  },
  {
    image: 'https://media.istockphoto.com/id/1934800193/vector/vector-flat-illustration-in-grayscale-avatar-user-profile-person-icon-profile-picture.jpg?s=612x612&w=0&k=20&c=5o2yrnnzcPhf3N9365ybBflA7TptD9WYAe_66_mJyIY=',
    name: 'Aman Bhardwaj',
    role: 'Son of a Client',
    rating: 5,
    review: 'The transparency is what sold me. I can see visit logs, communicate directly with my father\'s caregiver, and handle payments all in one place. It’s an incredible service for the diaspora community.',
  },
  {
    image: 'https://media.istockphoto.com/id/1934800192/vector/vector-illustration-depicting-female-face-silhouettes-or-icons-serving-as-avatars-or.jpg?s=612x612&w=0&k=20&c=RNKS7ZquP3reGRiVjepLcwioEtjK-sHniSQX9IDYyL4=',
    name: 'Elena R.',
    role: 'Retired Nurse',
    rating: 5,
    review: 'Tendaly allowed me to continue helping others on my own terms after retirement. The platform is respectful, and I feel valued again.',
  },
  {
    image: 'https://media.istockphoto.com/id/1127533460/vector/person-gray-photo-placeholder-man.jpg?s=612x612&w=0&k=20&c=LQxy_IP8l6qtbkSZrw3eHdHOejtzLSkDNRrxJ6rafb8=',
    name: 'Marcus D.',
    role: 'Grandson of a Veteran',
    rating: 5,
    review: 'My grandfather was paired with a caregiver who actually listens. It’s restored his dignity, and I couldn’t be more thankful.',
  },
  {
    image: 'https://media.istockphoto.com/id/2060008471/vector/avatar-man-icon-profile-placeholder-anonymous-user-male-no-photo-web-template-default-user.jpg?s=612x612&w=0&k=20&c=D7X35MNlHIY5bSLOYhHvifEHJPu3Z9ydAKP3v1mjybI=',
    name: 'Priya Menon',
    role: 'Home Health Aide',
    rating: 5,
    review: 'I work part-time through Tendaly while studying. The flexibility is amazing, and I love how easy it is to find trusted clients.',
  },
  {
    image: 'https://media.istockphoto.com/id/1074273362/vector/person-gray-photo-placeholder-man.jpg?s=612x612&w=0&k=20&c=HLhcJFB5Rip8GYryRrp-3vJgwc0tqYUPG7HfPNWBOhg=',
    name: 'George Lee',
    role: 'Client with Chronic Illness',
    rating: 5,
    review: 'Tendaly matched me with someone who understands my medical needs and routines. It’s made a big difference in my daily life.',
  },
];



// --- Reusable Testimonial Card Component ---
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
        <p className="text-base text-slate-600"><i>{review}</i></p>
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
        {/* Mock disclaimer */}
        <p className="mt-4 text-xs italic text-slate-400">
        —Mock testimonial to illustrate expected user experience._
        </p>
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