export const weddingData = {
  couple: {
    groom: 'Ranbir',
    bride: 'Alia',
    names: 'Ranbir & Alia',
    hashtag: '#RanbirWedsAlia',
  },
  date: {
    iso: '2026-11-24T18:00:00+05:30',
    display: '24 November 2026',
    weekday: 'Tuesday',
  },
  families: {
    groom: 'The Kapoor Family',
    bride: 'The Bhatt Family',
  },
  invitation: {
    blessing: 'With the blessings of our families, we invite you to witness the beginning of our forever.',
    note: 'Your presence is the most precious gift we could ask for.',
  },
  functions: [
    {
      title: 'Mehndi',
      date: '22 November 2026',
      time: '4:00 PM onwards',
      venue: 'The Garden Courtyard',
      description: 'An afternoon of henna, marigolds, laughter and old family songs.',
    },
    {
      title: 'Sangeet Night',
      date: '23 November 2026',
      time: '7:00 PM onwards',
      venue: 'The Grand Ballroom',
      description: 'An evening of music, dance, stories and a little friendly family competition.',
    },
    {
      title: 'Wedding',
      date: '24 November 2026',
      time: '6:00 PM onwards',
      venue: 'The Temple Courtyard',
      description: 'The sacred pheras, under the mandap, surrounded by the people we love.',
    },
  ],
  story: {
    eyebrow: 'A little bit of us',
    title: 'Two lives, one beautiful story',
    body: 'Some stories are written slowly, in stolen glances, long conversations and ordinary days that become unforgettable. Ours brought two families together and gave us a reason to celebrate every little thing.',
    images: [
      { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85', alt: 'Indian wedding couple portrait' },
      { src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=85', alt: 'Wedding celebration details' },
      { src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85', alt: 'Elegant wedding ceremony' },
    ],
  },
  video: {
    eyebrow: 'Before the vows',
    title: 'A little preview of the magic',
    youtubeId: 'ScMzIvxBSi4',
  },
  thingsToKnow: [
    { title: 'Venue', text: 'The celebrations are designed as one intimate journey through the garden, ballroom and temple courtyard.' },
    { title: 'Contact', text: 'For travel, accommodation or family assistance, please reach out to the wedding desk.' },
    { title: 'A gentle reminder', text: 'Come dressed in your festive best, bring your dancing shoes, and leave plenty of room for dessert.' },
  ],
  contact: {
    phone: '+91 90000 00000',
    email: 'hello@ranbirwedsalia.example',
  },
} as const
