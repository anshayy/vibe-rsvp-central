import React, { useState, useMemo } from 'react';
import { Plus, Calendar, Search } from 'lucide-react';
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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">EventHub</h1>
                <p className="text-sm text-gray-500">Discover and manage events</p>
              </div>
            </div>
            
            <Button 
              onClick={() => setIsCreateModalOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Plus className="w-4 h-4 mr-2" />
              Create Event
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Find Your Next Event
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover conferences, workshops, networking events, and more in your area. 
            Connect with your community and expand your horizons.
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

        {/* Events Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              {filteredEvents.length === events.length 
                ? 'All Events' 
                : `${filteredEvents.length} Events Found`
              }
            </h3>
          </div>

          {filteredEvents.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-lg border border-gray-200">
              <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No events found</h3>
              <p className="text-gray-500 mb-6">
                {searchTerm || selectedCategory !== 'all' || selectedLocation !== 'all'
                  ? 'Try adjusting your search criteria'
                  : 'Be the first to create an event!'
                }
              </p>
              {(searchTerm || selectedCategory !== 'all' || selectedLocation !== 'all') && (
                <Button variant="outline" onClick={clearFilters}>
                  Clear All Filters
                </Button>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Modals */}
      <RSVPModal
        event={selectedEvent}
        isOpen={isRSVPModalOpen}
        onClose={() => setIsRSVPModalOpen(false)}
        onSubmit={handleRSVPSubmit}
      />

      <CreateEventModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSubmit={handleCreateEvent}
      />
    </div>
  );
};

export default Index;
