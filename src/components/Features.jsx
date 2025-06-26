import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './style.module.scss'; // SCSS Module
import images from '../constants/images'; // Your images object

const featuresData = [
  {
    title: 'Contact Management',
    heading: 'Build powerful customer relationships',
    description:
      'Every client interaction is available in a single view, helping your team understand client status, plan engagements, and deliver top customer experiences.',
    image: images.featureContactManagement,
    url: '#',
  },
  {
    title: 'Tasks & Calendar',
    heading: 'Your to-do list; controlled',
    description:
      "Start and end your working day knowing what tasks you've got to tackle. And if there's too much on, manually assign a task, or set up automations to delegate.",
    image: images.featureTasksCalendar,
    url: '#',
  },
  {
    title: 'Sales Pipeline',
    heading: 'Close more deals, faster',
    description:
      'Seize control of your sales pipeline, forecast more accurately, and understand deal status in one dashboard.',
    image: images.featureSalesPipeline,
    url: '#',
  },
  {
    title: 'Project Management',
    heading: 'Deliver more, on time, within scope',
    description:
      "Onboard, manage, and deliver for your customers when they say 'yes'. Smash silos, stay on track, and collaborate easily with your team.",
    image: images.featureProjectManagement,
    url: '#',
  },
  {
    title: 'Sales Analytics',
    heading: 'Game-changing insights at your fingertips',
    description:
      'Detect deals close to closure and take action. Consult customers who need support. Project pipeline to analyze business growth - all in one dashboard.',
    image: images.featureSalesAnalytics,
    url: '#',
  },
];

const Features = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  const colors = ['#fff', '#fff', '#fff', '#fff', '#fff'];

  return (
    <main ref={container} className={styles.mainContainer}>
      {featuresData.map((feature, i) => {
        const targetScale = 1 - (featuresData.length - i) * 0.05;
        return (
          <Card
            key={`feature_${i}`}
            i={i}
            title={feature.title}
            heading={feature.heading}
            description={feature.description}
            src={feature.image}
            url={feature.url}
            color={colors[i % colors.length]}
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
  src,
  url,
  color,
  progress,
  range,
  targetScale,
}) => {
  const cardContainer = useRef(null);

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
          top: `calc(-5vh + ${i * 25}px)`,
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
                      fill="white"
                    />
                  </svg>
                </span>
              </a>
            </span>
          </div>
          <div className={styles.imageContainer}>
            <motion.div className={styles.inner} style={{ scale: imageScale }}>
              <img src={src} alt={title} />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Features;
