import React from 'react';

export const AboutDropdown = () => (
  <div className="w-screen max-w-6xl p-8 text-sm" style={{ marginLeft: '8%' }}>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {[
        ["Our Mission", "Empowering care through innovation", "#our-mission"],
        ["Who It's For", "Care seekers & Health providers", "#who-its-for"],
        ["Why Tendaly", "Trusted. Flexible. AI-powered.", "#why-tendaly"],
      ].map(([title, desc, link], i) => (
        <a
          key={i}
          href={link}
          className="min-w-[200px] break-words block hover:text-brand-blue"
          style={{ marginLeft: '6%' }}
        >
          <h3 className="font-semibold text-brand-dark mb-1 text-base leading-snug">{title}</h3>
          <p className="text-brand-gray-text">{desc}</p>
        </a>
      ))}
    </div>
  </div>
);

export const JoinDropdown = () => (
  <div className="w-screen max-w-6xl p-8 text-sm" style={{ marginLeft: '1%' }}>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {[
        ["Join Waitlist", "Get early access to Tendaly", "#join-waitlist"],
        ["Become a Provider", "Offer care with flexible, secure tools", "#become-provider"],
      ].map(([title, desc, link], i) => (
        <a
          key={i}
          href={link}
          className="min-w-[200px] break-words block hover:text-brand-blue"
          style={{ marginLeft: '6%' }}
        >
          <h3 className="font-semibold text-brand-dark mb-1 text-base leading-snug">{title}</h3>
          <p className="text-brand-gray-text">{desc}</p>
        </a>
      ))}
    </div>
  </div>
);

export const ResourcesDropdown = () => (
  <div className="w-screen max-w-4xl p-8 grid grid-cols-2 md:grid-cols-3 gap-6 text-sm">
    {[
      ["Blog", "Insights on caregiving & tech", "#blog"],
      ["Video Tutorials", "Step-by-step guides to Tendaly", "#video-tutorials"],
      ["Tendaly Blog", "Quick reads on care topics", "#capsule-blog"],
      ["FAQ", "Answers to common questions", "#faq"],
      ["The Podcast", "Conversations on care & innovation", "#podcast"],
    ].map(([title, desc, link], i) => (
      <a
        key={i}
        href={link}
        className="block min-w-[180px] hover:text-brand-blue"
      >
        <h3 className="font-semibold text-brand-dark mb-1 text-base leading-snug">{title}</h3>
        <p className="text-brand-gray-text">{desc}</p>
      </a>
    ))}
  </div>
);
