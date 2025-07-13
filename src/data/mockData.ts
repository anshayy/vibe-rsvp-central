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
  // Online Events
  {
    id: '11',
    title: 'Global Virtual Tech Summit 2024',
    description: 'Connect with tech leaders worldwide in this comprehensive online summit covering AI, blockchain, cybersecurity, and future technologies.',
    date: '2024-09-20',
    time: '09:00',
    location: 'Online Event',
    maxAttendees: 10000,
    currentAttendees: 7834,
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=400&fit=crop',
    organizer: 'Tech Summit Global',
    category: 'conference',
    isPublic: true,
    rsvpDeadline: '2024-09-18',
    price: 0,
    contactInfo: {
      email: 'info@techsummitglobal.com',
      phone: '+1-888-TECH-001',
      website: 'https://techsummitglobal.com',
      socialMedia: {
        twitter: '@techsummitglobal',
        linkedin: 'tech-summit-global',
        instagram: '@techsummitglobal'
      }
    },
    venue: {
      name: 'Virtual Platform',
      address: 'Online',
      city: 'Global',
      state: 'Online',
      zipCode: '00000',
      capacity: 15000
    },
    tags: ['Technology', 'AI', 'Blockchain', 'Cybersecurity', 'Virtual', 'Global'],
    speakers: ['Tech CEOs', 'AI Researchers', 'Blockchain Experts', 'Security Leaders'],
    agenda: ['AI Revolution Keynote', 'Blockchain Workshop', 'Cybersecurity Panel', 'Networking Sessions'],
    requirements: ['Stable internet connection', 'Computer or mobile device'],
    benefits: ['All session recordings', 'Digital certificates', 'Networking platform access', 'Resource downloads']
  },
  {
    id: '12',
    title: 'Remote Work Mastery Workshop',
    description: 'Learn essential skills for remote work success including productivity techniques, communication strategies, and work-life balance.',
    date: '2024-08-25',
    time: '14:00',
    location: 'Online Event',
    maxAttendees: 500,
    currentAttendees: 387,
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=400&fit=crop',
    organizer: 'Remote Work Institute',
    category: 'workshop',
    isPublic: true,
    rsvpDeadline: '2024-08-23',
    price: 149,
    contactInfo: {
      email: 'workshops@remoteworkinstitute.com',
      phone: '+1-555-REMOTE-1',
      website: 'https://remoteworkinstitute.com',
      socialMedia: {
        linkedin: 'remote-work-institute',
        twitter: '@remoteworkinst'
      }
    },
    venue: {
      name: 'Zoom Platform',
      address: 'Online',
      city: 'Virtual',
      state: 'Online',
      zipCode: '00000',
      capacity: 500
    },
    tags: ['Remote Work', 'Productivity', 'Work-Life Balance', 'Professional Development'],
    speakers: ['Remote Work Expert Sarah Chen', 'Productivity Coach Mike Ross'],
    agenda: ['Remote Work Fundamentals', 'Productivity Tools', 'Communication Skills', 'Q&A Session'],
    requirements: ['Zoom application', 'Notebook for taking notes'],
    benefits: ['Workshop materials', 'Certificate of completion', '30-day email support', 'Template downloads']
  },
  {
    id: '13',
    title: 'International Online Film Festival',
    description: 'Experience cinema from around the world in this virtual film festival featuring independent films, documentaries, and short films.',
    date: '2024-09-10',
    time: '18:00',
    location: 'Online Event',
    maxAttendees: 2000,
    currentAttendees: 1567,
    image: 'https://images.unsplash.com/photo-1489599510139-06b6692c9915?w=800&h=400&fit=crop',
    organizer: 'Global Cinema Collective',
    category: 'art',
    isPublic: true,
    rsvpDeadline: '2024-09-08',
    price: 25,
    contactInfo: {
      email: 'festival@globalcinema.org',
      phone: '+1-555-FILM-001',
      website: 'https://globalcinemaonline.org',
      socialMedia: {
        instagram: '@globalcinema',
        facebook: 'globalcinemaonline',
        twitter: '@globalcinema'
      }
    },
    venue: {
      name: 'Virtual Cinema Platform',
      address: 'Online',
      city: 'Global',
      state: 'Online',
      zipCode: '00000',
      capacity: 2500
    },
    tags: ['Film', 'Cinema', 'Art', 'Culture', 'International', 'Virtual'],
    speakers: ['Film Directors', 'Critics', 'Industry Professionals'],
    agenda: ['Opening Ceremony', 'Film Screenings', 'Director Q&As', 'Awards Ceremony'],
    requirements: ['High-speed internet', 'Large screen recommended'],
    benefits: ['Access to all films', 'Director interviews', 'Digital program', 'Voting access']
  },
  // India Events
  {
    id: '14',
    title: 'India Tech Week 2024',
    description: 'India\'s largest technology conference bringing together startups, enterprises, and tech enthusiasts to explore the future of technology in India.',
    date: '2024-10-15',
    time: '09:00',
    location: 'Bengaluru International Exhibition Centre',
    maxAttendees: 5000,
    currentAttendees: 3456,
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop',
    organizer: 'Tech India Foundation',
    category: 'conference',
    isPublic: true,
    rsvpDeadline: '2024-10-10',
    price: 2500,
    contactInfo: {
      email: 'info@indiatechweek.com',
      phone: '+91-80-4567-8901',
      website: 'https://indiatechweek.com',
      socialMedia: {
        twitter: '@indiatechweek',
        linkedin: 'india-tech-week',
        instagram: '@indiatechweek'
      }
    },
    venue: {
      name: 'Bengaluru International Exhibition Centre',
      address: '10th Mile, Tumkur Road',
      city: 'Bengaluru',
      state: 'Karnataka',
      zipCode: '560073',
      capacity: 6000
    },
    tags: ['Technology', 'Startups', 'Innovation', 'India', 'AI', 'Digital Transformation'],
    speakers: ['Indian Tech CEOs', 'Government Officials', 'International Speakers'],
    agenda: ['Keynote: Digital India', 'Startup Pitch Competition', 'AI Workshop', 'Networking Dinner'],
    requirements: ['Valid ID proof', 'Business cards'],
    benefits: ['Conference materials', 'Networking opportunities', 'Startup expo access', 'Certificate']
  },
  {
    id: '15',
    title: 'Mumbai Financial Summit 2024',
    description: 'Premier financial conference in Mumbai covering fintech, digital banking, cryptocurrency, and investment strategies in the Indian market.',
    date: '2024-09-28',
    time: '10:00',
    location: 'Trident Bandra Kurla',
    maxAttendees: 800,
    currentAttendees: 634,
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&h=400&fit=crop',
    organizer: 'Finance India Association',
    category: 'business',
    isPublic: true,
    rsvpDeadline: '2024-09-25',
    price: 5000,
    contactInfo: {
      email: 'summit@financeindia.org',
      phone: '+91-22-6789-0123',
      website: 'https://mumbaifinancesummit.com',
      socialMedia: {
        linkedin: 'mumbai-finance-summit',
        twitter: '@mumbaifinance'
      }
    },
    venue: {
      name: 'Trident Bandra Kurla',
      address: 'C-56, G Block, Bandra Kurla Complex',
      city: 'Mumbai',
      state: 'Maharashtra',
      zipCode: '400051',
      capacity: 1000
    },
    tags: ['Finance', 'Fintech', 'Banking', 'Investment', 'Mumbai', 'India'],
    speakers: ['RBI Officials', 'Bank CEOs', 'Fintech Leaders', 'Investment Experts'],
    agenda: ['Digital Banking Panel', 'Fintech Innovation', 'Investment Strategies', 'Regulatory Updates'],
    requirements: ['Business attire', 'KYC documents for some sessions'],
    benefits: ['Industry reports', 'Networking lunch', 'Expert consultations', 'Digital resources']
  },
  {
    id: '16',
    title: 'Delhi Startup Conclave 2024',
    description: 'Connect with India\'s startup ecosystem in Delhi. Meet investors, mentors, and fellow entrepreneurs in this comprehensive startup event.',
    date: '2024-09-18',
    time: '09:30',
    location: 'India Habitat Centre',
    maxAttendees: 1200,
    currentAttendees: 945,
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=400&fit=crop',
    organizer: 'Startup India Hub',
    category: 'business',
    isPublic: true,
    rsvpDeadline: '2024-09-15',
    price: 1500,
    contactInfo: {
      email: 'conclave@startupindiahub.com',
      phone: '+91-11-4567-8901',
      website: 'https://delhistartupconclave.com',
      socialMedia: {
        twitter: '@startupdelhi',
        linkedin: 'delhi-startup-conclave',
        instagram: '@delhistartups'
      }
    },
    venue: {
      name: 'India Habitat Centre',
      address: 'Lodhi Road',
      city: 'New Delhi',
      state: 'Delhi',
      zipCode: '110003',
      capacity: 1500
    },
    tags: ['Startups', 'Entrepreneurship', 'Investment', 'Delhi', 'Innovation', 'Networking'],
    speakers: ['Venture Capitalists', 'Successful Entrepreneurs', 'Government Officials'],
    agenda: ['Startup Pitches', 'Investor Panel', 'Mentorship Sessions', 'Networking Tea'],
    requirements: ['Startup pitch deck (for participants)', 'Business plan'],
    benefits: ['Investor meetings', 'Mentorship access', 'Startup toolkit', 'Follow-up support']
  },
  {
    id: '17',
    title: 'Chennai Healthcare Innovation Summit',
    description: 'Explore healthcare technology innovations, telemedicine, and medical device developments in India\'s healthcare capital.',
    date: '2024-10-05',
    time: '08:30',
    location: 'ITC Grand Chola',
    maxAttendees: 600,
    currentAttendees: 423,
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop',
    organizer: 'Healthcare Innovation India',
    category: 'health',
    isPublic: true,
    rsvpDeadline: '2024-10-02',
    price: 3500,
    contactInfo: {
      email: 'summit@healthcareinnovation.in',
      phone: '+91-44-2345-6789',
      website: 'https://chennaihealthsummit.com',
      socialMedia: {
        linkedin: 'chennai-healthcare-summit',
        twitter: '@chennaihealthtech'
      }
    },
    venue: {
      name: 'ITC Grand Chola',
      address: '63, Mount Road, Guindy',
      city: 'Chennai',
      state: 'Tamil Nadu',
      zipCode: '600032',
      capacity: 800
    },
    tags: ['Healthcare', 'Medical Technology', 'Telemedicine', 'Innovation', 'Chennai'],
    speakers: ['Medical Professionals', 'Healthcare CIOs', 'MedTech Entrepreneurs'],
    agenda: ['Telemedicine Revolution', 'AI in Healthcare', 'Medical Devices', 'Regulatory Framework'],
    requirements: ['Medical/Healthcare background preferred', 'Valid medical license for some sessions'],
    benefits: ['CME credits', 'Healthcare reports', 'Technology demos', 'Professional networking']
  },
  {
    id: '18',
    title: 'Kolkata Cultural Festival 2024',
    description: 'Celebrate Bengal\'s rich cultural heritage with traditional music, dance, art exhibitions, and literary discussions in the cultural capital of India.',
    date: '2024-11-12',
    time: '16:00',
    location: 'Science City Auditorium',
    maxAttendees: 2000,
    currentAttendees: 1234,
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=400&fit=crop',
    organizer: 'Bengal Cultural Society',
    category: 'art',
    isPublic: true,
    rsvpDeadline: '2024-11-08',
    price: 500,
    contactInfo: {
      email: 'festival@bengalculture.org',
      phone: '+91-33-2345-6789',
      website: 'https://kolkataculturalFest.com',
      socialMedia: {
        facebook: 'kolkataculturalFest',
        instagram: '@kolkataculture',
        twitter: '@bengalculture'
      }
    },
    venue: {
      name: 'Science City Auditorium',
      address: 'JBS Haldane Avenue',
      city: 'Kolkata',
      state: 'West Bengal',
      zipCode: '700046',
      capacity: 2500
    },
    tags: ['Culture', 'Art', 'Music', 'Dance', 'Literature', 'Bengal', 'Traditional'],
    speakers: ['Renowned Artists', 'Authors', 'Cultural Historians', 'Musicians'],
    agenda: ['Cultural Performances', 'Art Exhibition', 'Literary Sessions', 'Traditional Music'],
    requirements: ['Cultural interest', 'No specific requirements'],
    benefits: ['Cultural programs', 'Art exhibition access', 'Traditional snacks', 'Cultural merchandise']
  },
  {
    id: '19',
    title: 'Hyderabad EdTech Conference 2024',
    description: 'Discover the future of education technology, online learning platforms, and digital transformation in education sector.',
    date: '2024-09-22',
    time: '09:00',
    location: 'HITEC City Convention Centre',
    maxAttendees: 1000,
    currentAttendees: 756,
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=400&fit=crop',
    organizer: 'EdTech India Alliance',
    category: 'education',
    isPublic: true,
    rsvpDeadline: '2024-09-19',
    price: 2000,
    contactInfo: {
      email: 'conference@edtechindia.org',
      phone: '+91-40-4567-8901',
      website: 'https://hyderabadedtech.com',
      socialMedia: {
        linkedin: 'edtech-india-alliance',
        twitter: '@edtechindia'
      }
    },
    venue: {
      name: 'HITEC City Convention Centre',
      address: 'Madhapur, HITEC City',
      city: 'Hyderabad',
      state: 'Telangana',
      zipCode: '500081',
      capacity: 1200
    },
    tags: ['Education', 'Technology', 'EdTech', 'Online Learning', 'Digital Education'],
    speakers: ['EdTech CEOs', 'Education Ministers', 'University Leaders', 'Learning Experts'],
    agenda: ['Future of Learning', 'EdTech Innovations', 'Policy Discussions', 'Product Demos'],
    requirements: ['Education sector involvement preferred'],
    benefits: ['EdTech resources', 'Policy documents', 'Networking opportunities', 'Product trials']
  },
  {
    id: '20',
    title: 'Goa Food & Wine Festival 2024',
    description: 'Experience Goa\'s culinary heritage and contemporary cuisine with renowned chefs, wine tastings, and beachside dining experiences.',
    date: '2024-12-08',
    time: '17:00',
    location: 'Grand Hyatt Goa',
    maxAttendees: 400,
    currentAttendees: 287,
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=400&fit=crop',
    organizer: 'Goa Tourism Board',
    category: 'food',
    isPublic: true,
    rsvpDeadline: '2024-12-05',
    price: 4500,
    contactInfo: {
      email: 'foodfest@goatourism.gov.in',
      phone: '+91-832-245-6789',
      website: 'https://goafoodwinefest.com',
      socialMedia: {
        instagram: '@goafoodwine',
        facebook: 'goafoodwinefest',
        twitter: '@goafoodfest'
      }
    },
    venue: {
      name: 'Grand Hyatt Goa',
      address: 'P.O. Goa University, Bambolim',
      city: 'Goa',
      state: 'Goa',
      zipCode: '403206',
      capacity: 500
    },
    tags: ['Food', 'Wine', 'Goan Cuisine', 'Culinary', 'Beach', 'Festival'],
    speakers: ['Celebrity Chefs', 'Sommeliers', 'Food Critics', 'Local Chefs'],
    agenda: ['Cooking Demonstrations', 'Wine Tastings', 'Goan Food History', 'Beachside Dinner'],
    requirements: ['Age 21+ for wine events', 'Smart casual attire'],
    benefits: ['All tastings included', 'Recipe booklet', 'Wine discounts', 'Chef interactions']
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
