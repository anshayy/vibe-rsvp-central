
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
  category: 'conference' | 'workshop' | 'networking' | 'social' | 'other';
  isPublic: boolean;
  rsvpDeadline?: string;
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
