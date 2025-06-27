// src/constants/index.js
import images from './images'; // ✅ import the image object

export const links = [
  { id: 1, text: 'About',        url: '/about' },
  { id: 2, text: 'Features',     url: '/features' },
  { id: 3, text: 'How It Works', url: '/how-it-works' },
  { id: 4, text: 'Join',         url: '/join' },
  { id: 5, text: 'Contact',      url: '/contact' },
];

export const aboutLinks = [
  { id: 1, name: 'Our Mission',   url: '/our-mission' },
  { id: 2, name: 'Our Vision',    url: '/our-vision' },
  { id: 3, name: 'Who It’s For',  url: '/who-it-is-for' },
  { id: 4, name: 'Why Tendaly',   url: '/why-tendaly' },
  { id: 5, name: 'Screenshots',   url: '/screenshots' },
];

export const joinLinks = [
  { id: 1, title: 'Become a Provider', url: '/providers' },
  { id: 2, title: 'Join Waitlist',     url: '/join-waitlist' },
];

export { images }; // ✅ now images can be imported
