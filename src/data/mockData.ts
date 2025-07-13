
import { Event, RSVP } from '../types/event';

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Google I/O 2024: Developer Conference',
    description: 'Join us for Google\'s annual developer conference featuring the latest in AI, Android, Chrome, and more. Connect with fellow developers and learn about cutting-edge technologies.',
    date: '2024-08-15',
    time: '09:00',
    location: 'Shoreline Amphitheatre',
    maxAttendees: 7000,
    currentAttendees: 5642,
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop',
    organizer: 'Google LLC',
    category: 'conference',
    isPublic: true,
    rsvpDeadline: '2024-08-10',
    price: 0,
    contactInfo: {
      email: 'io-support@google.com',
      phone: '+1-650-253-0000',
      website: 'https://io.google/2024/',
      socialMedia: {
        twitter: '@googledevs',
        linkedin: 'google-developers',
        instagram: '@googledevs'
      }
    },
    venue: {
      name: 'Shoreline Amphitheatre',
      address: '1 Amphitheatre Parkway',
      city: 'Mountain View',
      state: 'CA',
      zipCode: '94043',
      capacity: 22500
    },
    tags: ['Technology', 'AI', 'Android', 'Chrome', 'Developers', 'Innovation'],
    speakers: ['Sundar Pichai', 'Jeff Dean', 'Hiroshi Lockheimer'],
    agenda: ['Keynote: The Future of AI', 'Android 15 Deep Dive', 'Chrome OS Updates', 'Firebase Workshop'],
    requirements: ['Laptop for hands-on sessions', 'Basic programming knowledge'],
    benefits: ['Free swag bag', 'Networking opportunities', '3 meals included', 'Certificate of attendance']
  },
  {
    id: '2',
    title: 'React Summit 2024',
    description: 'The biggest React conference in the universe! Two days of React, tools, practices, and trends with the most renowned speakers in the React community.',
    date: '2024-08-22',
    time: '10:00',
    location: 'RAI Amsterdam',
    maxAttendees: 1500,
    currentAttendees: 1287,
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=400&fit=crop',
    organizer: 'GitNation',
    category: 'conference',
    isPublic: true,
    rsvpDeadline: '2024-08-18',
    price: 599,
    contactInfo: {
      email: 'hello@reactsummit.com',
      phone: '+31-20-123-4567',
      website: 'https://reactsummit.com',
      socialMedia: {
        twitter: '@reactsummit',
        linkedin: 'react-summit'
      }
    },
    venue: {
      name: 'RAI Amsterdam',
      address: 'Europaplein 24',
      city: 'Amsterdam',
      state: 'NH',
      zipCode: '1078 GZ',
      capacity: 2000
    },
    tags: ['React', 'JavaScript', 'Frontend', 'Web Development', 'JSX'],
    speakers: ['Dan Abramov', 'Sophie Alpert', 'Kent C. Dodds', 'Emma Bostian'],
    agenda: ['React 19 Features', 'State Management Patterns', 'Performance Optimization', 'Testing Strategies'],
    requirements: ['JavaScript knowledge', 'Laptop with Node.js'],
    benefits: ['Conference recordings', 'Networking dinner', 'Workshop materials', 'Job board access']
  },
  {
    id: '3',
    title: 'Summer Music Festival 2024',
    description: 'Three days of incredible music featuring top artists from around the world. Food trucks, art installations, and unforgettable performances await!',
    date: '2024-08-25',
    time: '14:00',
    location: 'Golden Gate Park',
    maxAttendees: 75000,
    currentAttendees: 68234,
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=400&fit=crop',
    organizer: 'Live Nation Entertainment',
    category: 'music',
    isPublic: true,
    rsvpDeadline: '2024-08-20',
    price: 299,
    contactInfo: {
      email: 'info@summermusicfest.com',
      phone: '+1-415-555-0123',
      website: 'https://summermusicfest.com',
      socialMedia: {
        twitter: '@summermusicfest',
        instagram: '@summermusicfest',
        facebook: 'summermusicfestival'
      }
    },
    venue: {
      name: 'Golden Gate Park',
      address: '1 John F Kennedy Dr',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94117',
      capacity: 80000
    },
    tags: ['Music', 'Festival', 'Outdoor', 'Food', 'Art', 'Entertainment'],
    speakers: ['The Weeknd', 'Billie Eilish', 'Kendrick Lamar', 'Taylor Swift'],
    agenda: ['Day 1: Pop & Electronic', 'Day 2: Hip-Hop & R&B', 'Day 3: Alternative & Indie'],
    requirements: ['Valid ID', 'Weather-appropriate clothing'],
    benefits: ['3-day pass', 'Food vendor access', 'VIP lounge access', 'Merchandise discount']
  },
  {
    id: '4',
    title: 'New York Marathon 2024',
    description: 'Join 50,000+ runners from around the world in the most iconic marathon. Experience the energy of NYC as you run through all five boroughs.',
    date: '2024-11-03',
    time: '08:00',
    location: 'Staten Island - Central Park',
    maxAttendees: 50000,
    currentAttendees: 47856,
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=400&fit=crop',
    organizer: 'New York Road Runners',
    category: 'sports',
    isPublic: true,
    rsvpDeadline: '2024-09-15',
    price: 358,
    contactInfo: {
      email: 'marathon@nyrr.org',
      phone: '+1-212-860-4455',
      website: 'https://tcsnycmarathon.org',
      socialMedia: {
        twitter: '@nycmarathon',
        instagram: '@nycmarathon',
        facebook: 'tcsnycmarathon'
      }
    },
    venue: {
      name: 'NYC Marathon Course',
      address: 'Staten Island to Central Park',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      capacity: 50000
    },
    tags: ['Running', 'Marathon', 'Sports', 'NYC', 'Charity', 'Fitness'],
    agenda: ['Start: Staten Island', 'Brooklyn Miles 3-13', 'Queens Miles 14-15', 'Bronx Miles 20-21', 'Finish: Central Park'],
    requirements: ['Training plan completion', 'Medical clearance', 'Running gear'],
    benefits: ['Finisher medal', 'Official photos', 'Recovery bag', 'Post-race celebration']
  },
  {
    id: '5',
    title: 'Culinary Arts Workshop: French Pastries',
    description: 'Learn the art of French pastry making with renowned chef Pierre Dubois. Master croissants, macarons, and classic French desserts in this hands-on workshop.',
    date: '2024-08-18',
    time: '10:00',
    location: 'Le Cordon Bleu College of Culinary Arts',
    maxAttendees: 20,
    currentAttendees: 16,
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=400&fit=crop',
    organizer: 'Le Cordon Bleu',
    category: 'workshop',
    isPublic: true,
    rsvpDeadline: '2024-08-15',
    price: 185,
    contactInfo: {
      email: 'workshops@cordonbleu.edu',
      phone: '+1-213-895-8895',
      website: 'https://cordonbleu.edu/workshops',
      socialMedia: {
        instagram: '@cordonbleu',
        facebook: 'lecordonbleu'
      }
    },
    venue: {
      name: 'Le Cordon Bleu College',
      address: '521 E Green St',
      city: 'Pasadena',
      state: 'CA',
      zipCode: '91101',
      capacity: 24
    },
    tags: ['Cooking', 'Pastry', 'French Cuisine', 'Workshop', 'Hands-on', 'Professional'],
    speakers: ['Chef Pierre Dubois', 'Pastry Chef Marie Laurent'],
    agenda: ['Introduction to French Pastry', 'Croissant Making', 'Macaron Techniques', 'Tasting & Q&A'],
    requirements: ['Apron provided', 'Comfortable shoes', 'Hair tie if needed'],
    benefits: ['Recipe booklet', 'Take-home pastries', 'Certificate', 'Professional photos']
  },
  {
    id: '6',
    title: 'Contemporary Art Exhibition Opening',
    description: 'Experience groundbreaking contemporary art from emerging and established artists. Wine reception, artist talks, and exclusive preview of new installations.',
    date: '2024-08-20',
    time: '18:00',
    location: 'Museum of Modern Art',
    maxAttendees: 500,
    currentAttendees: 387,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop',
    organizer: 'MoMA',
    category: 'art',
    isPublic: true,
    rsvpDeadline: '2024-08-18',
    price: 35,
    contactInfo: {
      email: 'events@moma.org',
      phone: '+1-212-708-9400',
      website: 'https://moma.org/events',
      socialMedia: {
        twitter: '@MuseumModernArt',
        instagram: '@themuseumofmodernart',
        facebook: 'MuseumofModernArt'
      }
    },
    venue: {
      name: 'Museum of Modern Art',
      address: '11 W 53rd St',
      city: 'New York',
      state: 'NY',
      zipCode: '10019',
      capacity: 800
    },
    tags: ['Art', 'Exhibition', 'Contemporary', 'Culture', 'Wine', 'Networking'],
    speakers: ['Curator Sarah Johnson', 'Artist Maya Chen', 'Art Critic Robert Williams'],
    agenda: ['Welcome Reception', 'Curator Talk', 'Artist Panel', 'Gallery Walk', 'Wine & Networking'],
    requirements: ['Business casual attire', 'Valid ID'],
    benefits: ['Exhibition catalog', 'Wine reception', 'Artist meet & greet', 'Member discount']
  },
  {
    id: '7',
    title: 'Startup Pitch Competition & Networking',
    description: 'Watch innovative startups pitch to top VCs and angel investors. Network with entrepreneurs, investors, and industry leaders. $100K prize pool!',
    date: '2024-08-28',
    time: '17:00',
    location: 'TechCrunch HQ',
    maxAttendees: 300,
    currentAttendees: 267,
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=400&fit=crop',
    organizer: 'TechCrunch',
    category: 'business',
    isPublic: true,
    rsvpDeadline: '2024-08-25',
    price: 75,
    contactInfo: {
      email: 'events@techcrunch.com',
      phone: '+1-415-231-7123',
      website: 'https://techcrunch.com/events',
      socialMedia: {
        twitter: '@TechCrunch',
        linkedin: 'techcrunch',
        instagram: '@techcrunch'
      }
    },
    venue: {
      name: 'TechCrunch Headquarters',
      address: '410 Townsend St',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94107',
      capacity: 350
    },
    tags: ['Startup', 'Pitch', 'Venture Capital', 'Networking', 'Innovation', 'Investment'],
    speakers: ['Sequoia Capital Partner', 'Y Combinator CEO', 'Former Unicorn Founders'],
    agenda: ['Registration & Networking', '10 Startup Pitches', 'VC Panel Discussion', 'Awards Ceremony', 'After Party'],
    requirements: ['Business cards', 'Professional attire'],
    benefits: ['Investor contacts', 'Pitch deck templates', 'Networking opportunities', 'Event recordings']
  },
  {
    id: '8',
    title: 'Yoga & Wellness Retreat Weekend',
    description: 'Rejuvenate your mind, body, and soul with a weekend of yoga, meditation, healthy cuisine, and wellness workshops in a beautiful natural setting.',
    date: '2024-09-14',
    time: '09:00',
    location: 'Miraval Arizona Resort',
    maxAttendees: 60,
    currentAttendees: 45,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=400&fit=crop',
    organizer: 'Mindful Living Institute',
    category: 'health',
    isPublic: true,
    rsvpDeadline: '2024-09-07',
    price: 450,
    contactInfo: {
      email: 'retreats@mindfuliving.com',
      phone: '+1-520-825-4000',
      website: 'https://mindfuliving.com/retreats',
      socialMedia: {
        instagram: '@mindfuliving',
        facebook: 'mindfulivinginstitute'
      }
    },
    venue: {
      name: 'Miraval Arizona Resort',
      address: '5000 E Via Estancia Miraval',
      city: 'Tucson',
      state: 'AZ',
      zipCode: '85739',
      capacity: 80
    },
    tags: ['Yoga', 'Wellness', 'Meditation', 'Health', 'Retreat', 'Mindfulness'],
    speakers: ['Yoga Master Krishna Patel', 'Meditation Teacher Lisa Wong', 'Nutritionist Dr. Green'],
    agenda: ['Morning Yoga', 'Meditation Sessions', 'Wellness Workshops', 'Healthy Meals', 'Nature Walks'],
    requirements: ['Yoga mat', 'Comfortable clothing', 'Water bottle'],
    benefits: ['All meals included', 'Yoga materials', 'Wellness guide', 'Relaxation techniques']
  },
  {
    id: '9',
    title: 'Digital Marketing Masterclass',
    description: 'Master the latest digital marketing strategies from SEO to social media advertising. Learn from industry experts and get hands-on experience with real campaigns.',
    date: '2024-08-30',
    time: '09:00',
    location: 'Digital Marketing Institute',
    maxAttendees: 150,
    currentAttendees: 127,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
    organizer: 'Digital Marketing Institute',
    category: 'education',
    isPublic: true,
    rsvpDeadline: '2024-08-27',
    price: 299,
    contactInfo: {
      email: 'courses@digitalmarketing.edu',
      phone: '+1-312-555-0199',
      website: 'https://digitalmarketing.edu/masterclass',
      socialMedia: {
        linkedin: 'digital-marketing-institute',
        twitter: '@DigiMarketEdu'
      }
    },
    venue: {
      name: 'Digital Marketing Institute',
      address: '150 N Michigan Ave',
      city: 'Chicago',
      state: 'IL',
      zipCode: '60601',
      capacity: 200
    },
    tags: ['Digital Marketing', 'SEO', 'Social Media', 'Education', 'Professional Development'],
    speakers: ['SEO Expert John Smith', 'Social Media Strategist Anna Davis', 'PPC Specialist Mike Johnson'],
    agenda: ['SEO Fundamentals', 'Social Media Strategy', 'PPC Campaigns', 'Analytics & Reporting', 'Case Studies'],
    requirements: ['Laptop with internet', 'Basic marketing knowledge'],
    benefits: ['Course materials', 'Certificate', 'Marketing tools access', '6-month support']
  },
  {
    id: '10',
    title: 'Wine Tasting & Food Pairing Experience',
    description: 'Discover exquisite wines paired with gourmet cuisine. Led by certified sommeliers, learn about wine regions, tasting techniques, and perfect food pairings.',
    date: '2024-09-05',
    time: '19:00',
    location: 'Napa Valley Wine Estate',
    maxAttendees: 40,
    currentAttendees: 32,
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&h=400&fit=crop',
    organizer: 'Napa Valley Wine Experience',
    category: 'food',
    isPublic: true,
    rsvpDeadline: '2024-09-02',
    price: 125,
    contactInfo: {
      email: 'tastings@napaexperience.com',
      phone: '+1-707-555-0145',
      website: 'https://napaexperience.com',
      socialMedia: {
        instagram: '@napaexperience',
        facebook: 'napavalleyexperience'
      }
    },
    venue: {
      name: 'Silverado Wine Estate',
      address: '1600 Atlas Peak Rd',
      city: 'Napa',
      state: 'CA',
      zipCode: '94558',
      capacity: 50
    },
    tags: ['Wine', 'Food Pairing', 'Tasting', 'Gourmet', 'Sommelier', 'Napa Valley'],
    speakers: ['Master Sommelier Robert Parker', 'Chef Isabella Martinez'],
    agenda: ['Welcome Reception', 'Wine Education', '5-Course Tasting Menu', 'Vineyard Tour', 'Wine Purchase'],
    requirements: ['Must be 21+', 'Valid ID required'],
    benefits: ['Wine tastings', 'Gourmet dinner', 'Wine discounts', 'Tasting notes']
  }
];

export const mockRSVPs: RSVP[] = [
  {
    id: '1',
    eventId: '1',
    userName: 'John Doe',
    userEmail: 'john@example.com',
    status: 'attending',
    createdAt: '2024-07-10T10:00:00Z'
  },
  {
    id: '2',
    eventId: '1',
    userName: 'Jane Smith',
    userEmail: 'jane@example.com',
    status: 'maybe',
    createdAt: '2024-07-11T14:30:00Z'
  },
  {
    id: '3',
    eventId: '3',
    userName: 'Mike Johnson',
    userEmail: 'mike@example.com',
    status: 'attending',
    createdAt: '2024-07-12T16:00:00Z'
  }
];
