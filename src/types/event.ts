
export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  maxAttendees: number;
  currentAttendees: number;
  image?: string;
  organizer: string;
  category: 'conference' | 'workshop' | 'networking' | 'social' | 'music' | 'sports' | 'food' | 'art' | 'business' | 'health' | 'education' | 'other';
  isPublic: boolean;
  rsvpDeadline?: string;
  price?: number;
  contactInfo: {
    email: string;
    phone?: string;
    website?: string;
    socialMedia?: {
      twitter?: string;
      linkedin?: string;
      instagram?: string;
      facebook?: string;
    };
  };
  venue: {
    name: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    capacity?: number;
  };
  tags: string[];
  speakers?: string[];
  agenda?: string[];
  requirements?: string[];
  benefits?: string[];
}

export interface RSVP {
  id: string;
  eventId: string;
  userName: string;
  userEmail: string;
  status: 'attending' | 'maybe' | 'not-attending';
  createdAt: string;
  specialRequests?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}
