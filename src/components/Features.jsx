import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './style.module.scss';

// --- Data Section ---
// Using placeholder images as the original 'images' object was not provided.
// Added unique URLs for each placeholder.
const featuresData = [
  {
    title: 'AI-Powered Matching',
    heading: 'Smart caregiver matching with Tendaly',
    description:
      'Our intelligent system matches care seekers with the most suitable providers based on needs, availability, and preferences — ensuring the right fit every time.',
    image: 'https://placehold.co/800x600/3B82F6/FFFFFF?text=AI+Matching',
    url: '#',
  },
  {
    title: 'Secure Messaging',
    heading: 'Private, secure conversations',
    description:
      'Communicate safely within Tendaly. Our encrypted messaging keeps discussions confidential and compliant.',
    image: 'https://placehold.co/800x600/10B981/FFFFFF?text=Messaging',
    url: '#',
  },
  {
    title: 'Background-Checked Providers',
    heading: 'Trusted professionals, every time',
    description:
      'Every caregiver on Tendaly is thoroughly vetted, so families can feel confident in their choice of care.',
    image: 'https://placehold.co/800x600/8B5CF6/FFFFFF?text=Vetting',
    url: '#',
  },
  {
    title: 'Booking & Payments',
    heading: 'Simple, flexible scheduling',
    description:
      'Book care with just a few taps. Tendaly makes it easy to manage appointments and pay securely through the app.',
    image: 'https://placehold.co/800x600/F97316/FFFFFF?text=Booking',
    url: '#',
  },
  {
    title: 'Ratings & Reviews',
    heading: 'Build trust through feedback',
    description:
      'Care seekers can read verified reviews and ratings, helping everyone make informed decisions.',
    image: 'https://placehold.co/800x600/EC4899/FFFFFF?text=Reviews',
    url: '#',
  },
  {
    title: 'Emergency & Backup Care',
    heading: 'Support when you need it most',
    description:
      'Unexpected situation? Tendaly helps you find urgent care providers in your area, fast.',
    image: 'https://placehold.co/800x600/EF4444/FFFFFF?text=Emergency',
    url: '#',
  },
  {
    title: 'Location-Based Search',
    heading: 'Find nearby providers in seconds',
    description:
      'Use Tendaly’s GPS-enabled search to connect with caregivers near your home or loved one’s location.',
    image: 'https://placehold.co/800x600/06B6D4/FFFFFF?text=Location',
    url: '#',
  },
];

const Features = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  // A more vibrant and varied color palette for the cards.
  const colors = ['#eff6ff', '#f0fdf4', '#f5f3ff', '#fff7ed', '#fdf2f8', '#fef2f2', '#ecfeff'];

  return (
    // It's good practice to add a className for the main wrapper for styling.
    <main ref={container} className={styles.mainContainer}>
      {featuresData.map((feature, i) => {
        // This calculates the scale of the card when it's "at rest" in the stack.
        const targetScale = 1 - (featuresData.length - i) * 0.05;
        
        return (
          <Card
            key={`feature_${i}`}
            i={i}
            {...feature} // Use spread operator for cleaner prop passing
            color={colors[i % colors.length]} // Safely cycle through colors
            progress={scrollYProgress}
            range={[i / featuresData.length, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </main>
  );
};

const Card = ({
  i,
  title,
  heading,
  description,
  image, // Renamed from 'src' for clarity
  url,
  color,
  progress,
  range,
  targetScale,
}) => {
  const cardContainer = useRef(null);

  // This hook creates a parallax effect for the image as the card scrolls into view.
  const { scrollYProgress: cardScrollYProgress } = useScroll({
    target: cardContainer,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(cardScrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={cardContainer} className={styles.cardContainer}>
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`, // Stacks cards with a 25px offset
        }}
        className={styles.card}
      >
        <p>{title}</p>
        <h2>{heading}</h2>
        <div className={styles.body}>
          <div className={styles.description}>
            <p>{description}</p>
            <span>
              <a href={url} target="_blank" rel="noopener noreferrer">
                <span>
                  See more
                  <svg
                    width="34"
                    height="12"
                    viewBox="0 0 22 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                      // Use a contrasting color instead of white for visibility.
                      // 'currentColor' is often a good choice as it can be set via CSS.
                      fill="currentColor" 
                    />
                  </svg>
                </span>
              </a>
            </span>
          </div>
          <div className={styles.imageContainer}>
            <motion.div className={styles.inner} style={{ scale: imageScale }}>
              {/* Use the 'image' prop and ensure 'alt' text is descriptive */}
              <img src={image} alt={`Visual representation of ${title}`} />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Features;