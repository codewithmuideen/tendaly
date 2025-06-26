import React from 'react';
import {
  AboutDropdown,
  JoinDropdown,
  ResourcesDropdown,
} from './DropdownContent';

export interface NavItem {
  id: string;
  label: string | React.ReactNode;
  href?: string;
  isDropdown: boolean;
  isMegaMenu?: boolean;
  dropdownContent?: React.ReactNode;
  dropdown?: { label: string; href: string }[];
}

export const mainNavItems: NavItem[] = [
  /* ABOUT (Dropdown) */
  {
    id: 'about',
    label: 'About',
    isDropdown: true,
    isMegaMenu: true,
    dropdownContent: <AboutDropdown />,
    dropdown: [
      { label: 'Our Mission', href: '#our-mission' },
      { label: 'Who It’s For', href: '#who-its-for' },
      { label: 'Why Tendaly', href: '#why-tendaly' },
    ],
  },

  /* FEATURES (Simple Link) */
  {
    id: 'features',
    label: 'Features',
    href: '#features',
    isDropdown: false,
  },

  /* HOW IT WORKS (Simple Link) */
  {
    id: 'how-it-works',
    label: 'How It Works',
    href: '#how-it-works',
    isDropdown: false,
  },

  /* SCREENSHOTS (Simple Link) */
  {
    id: 'screenshots',
    label: 'Screenshots',
    href: '#screenshots',
    isDropdown: false,
  },

  /* JOIN (Dropdown) */
  {
    id: 'join',
    label: 'Join',
    isDropdown: true,
    isMegaMenu: true,
    dropdownContent: <JoinDropdown />,
    dropdown: [
      { label: 'Join Waitlist', href: '#join-waitlist' },
      { label: 'Become Provider', href: '#become-provider' },
    ],
  },

  /* RESOURCES (Dropdown) */
  {
    id: 'resources',
    label: 'Resources',
    isDropdown: true,
    isMegaMenu: true,
    dropdownContent: <ResourcesDropdown />,
    dropdown: [
      { label: 'Blog', href: '#blog' },
      { label: 'Video Tutorials', href: '#video-tutorials' },
      { label: 'Tendaly Blog', href: '#capsule-blog' },
      { label: 'FAQ', href: '#faq' },
      { label: 'The Podcast', href: '#podcast' },
    ],
  },

  /* CONTACT (Simple Link) */
  {
    id: 'contact',
    label: 'Contact',
    href: '/contact',
    isDropdown: false,
  },
];
