
import React, { useState, useMemo } from 'react';
import { Plus, Calendar, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import EventCard from '../components/EventCard';
import EventFilters from '../components/EventFilters';
import RSVPModal from '../components/RSVPModal';
import CreateEventModal from '../components/CreateEventModal';
import EventStats from '../components/EventStats';
import { mockEvents } from '../data/mockData';
import { Event } from '../types/event';

const Index = () => {
  const [events, setEvents] = useState<Event[]>(mockEvents);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isRSVPModalOpen, setIsRSVPModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const { toast } = useToast();

  // Filter events based on search and filters
  const filteredEvents = useMemo(() => {
    return events.filter(event => {
      const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           event.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
      const matchesLocation = selectedLocation === 'all' || 
                             event.location.toLowerCase().includes(selectedLocation.replace('-', ' '));
      
      return matchesSearch && matchesCategory && matchesLocation;
    });
  }, [events, searchTerm, selectedCategory, selectedLocation]);

  // Calculate stats
  const stats = useMemo(() => {
    const totalEvents = events.length;
    const totalAttendees = events.reduce((sum, event) => sum + event.currentAttendees, 0);
    const upcomingEvents = events.filter(event => new Date(event.date) > new Date()).length;
    const averageAttendance = Math.round(
      events.reduce((sum, event) => sum + (event.currentAttendees / event.maxAttendees) * 100, 0) / events.length
    );

    return { totalEvents, totalAttendees, upcomingEvents, averageAttendance };
  }, [events]);

  const handleRSVP = (eventId: string) => {
    const event = events.find(e => e.id === eventId);
    if (event) {
      setSelectedEvent(event);
      setIsRSVPModalOpen(true);
    }
  };

  const handleRSVPSubmit = (rsvpData: any) => {
    // Update event attendance count
    setEvents(prev => prev.map(event => 
      event.id === rsvpData.eventId 
        ? { ...event, currentAttendees: event.currentAttendees + 1 }
        : event
    ));
    
    console.log('RSVP submitted:', rsvpData);
    setIsRSVPModalOpen(false);
  };

  const handleCreateEvent = (eventData: any) => {
    setEvents(prev => [...prev, eventData]);
    console.log('Event created:', eventData);
  };

  const handleViewDetails = (eventId: string) => {
    toast({
      title: "Event Details",
      description: "Event details view coming soon!",
    });
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSelectedLocation('all');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center h-auto sm:h-16 py-4 sm:py-0 gap-4 sm:gap-0">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div className="text-center sm:text-left">
                <h1 className="text-xl font-bold text-gray-900">EventHub</h1>
                <p className="text-sm text-gray-500">Event Management & RSVP System</p>
              </div>
            </div>
            
            <Button 
              onClick={() => setIsCreateModalOpen(true)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 gap-2 w-full sm:w-auto"
            >
              <Plus className="w-4 h-4" />
              Create Event
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-purple-600" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Discover Amazing Events
            </h2>
          </div>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Connect with your community through exciting events. Create, discover, and RSVP to events that matter to you.
          </p>
        </div>

        {/* Stats */}
        <EventStats {...stats} />

        {/* Filters */}
        <EventFilters
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          selectedLocation={selectedLocation}
          onLocationChange={setSelectedLocation}
          onClearFilters={clearFilters}
        />

        {/* Events Grid */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
              {filteredEvents.length === events.length 
                ? 'All Events' 
                : `Filtered Events (${filteredEvents.length})`
              }
            </h3>
          </div>

          {filteredEvents.length === 0 ? (
            <div className="text-center py-12">
              <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No events found</h3>
              <p className="text-gray-500 mb-4 px-4">
                {searchTerm || selectedCategory !== 'all' || selectedLocation !== 'all'
                  ? 'Try adjusting your search or filters'
                  : 'Be the first to create an event!'
                }
              </p>
              {(searchTerm || selectedCategory !== 'all' || selectedLocation !== 'all') && (
                <Button variant="outline" onClick={clearFilters}>
                  Clear Filters
                </Button>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-6">
              {filteredEvents.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  onRSVP={handleRSVP}
                  onViewDetails={handleViewDetails}
                />
              ))}
            </div>
          )}
        </div>
      </main>

      {/* RSVP Modal */}
      <RSVPModal
        event={selectedEvent}
        isOpen={isRSVPModalOpen}
        onClose={() => setIsRSVPModalOpen(false)}
        onSubmit={handleRSVPSubmit}
      />

      {/* Create Event Modal */}
      <CreateEventModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSubmit={handleCreateEvent}
      />
    </div>
  );
};

export default Index;
