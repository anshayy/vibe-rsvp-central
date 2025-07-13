
import { Event, RSVP } from '../types/event';

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Tech Innovation Summit 2024',
    description: 'Join us for an exciting day of tech talks, networking, and innovation. Featuring industry leaders discussing the future of technology.',
    date: '2024-08-15',
    time: '09:00',
    location: 'San Francisco Convention Center',
    maxAttendees: 500,
    currentAttendees: 342,
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop',
    organizer: 'TechCorp Events',
    category: 'conference',
    isPublic: true,
    rsvpDeadline: '2024-08-10'
  },
  {
    id: '2',
    title: 'UI/UX Design Workshop',
    description: 'Hands-on workshop covering modern design principles, user research, and prototyping techniques.',
    date: '2024-08-20',
    time: '14:00',
    location: 'Design Studio Downtown',
    maxAttendees: 30,
    currentAttendees: 18,
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=400&fit=crop',
    organizer: 'Creative Minds Studio',
    category: 'workshop',
    isPublic: true,
    rsvpDeadline: '2024-08-18'
  },
  {
    id: '3',
    title: 'Startup Networking Night',
    description: 'Connect with fellow entrepreneurs, investors, and startup enthusiasts in a relaxed atmosphere.',
    date: '2024-08-25',
    time: '18:30',
    location: 'The Hub Coworking Space',
    maxAttendees: 100,
    currentAttendees: 67,
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=400&fit=crop',
    organizer: 'Startup Community',
    category: 'networking',
    isPublic: true,
    rsvpDeadline: '2024-08-23'
  },
  {
    id: '4',
    title: 'Summer BBQ & Games',
    description: 'End of summer celebration with great food, games, and live music. Family-friendly event!',
    date: '2024-08-30',
    time: '15:00',
    location: 'Central Park Pavilion',
    maxAttendees: 200,
    currentAttendees: 89,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=400&fit=crop',
    organizer: 'Community Events Team',
    category: 'social',
    isPublic: true,
    rsvpDeadline: '2024-08-28'
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
  }
];
