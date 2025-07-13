
import React from 'react';
import { Calendar, MapPin, Users, Clock, DollarSign, Mail, Phone, Globe, Star, Tag } from 'lucide-react';
import { Event } from '../types/event';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface EventCardProps {
  event: Event;
  onRSVP?: (eventId: string) => void;
  onViewDetails?: (eventId: string) => void;
}

const EventCard = ({ event, onRSVP, onViewDetails }: EventCardProps) => {
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatPrice = (price?: number) => {
    return price === 0 ? 'Free' : price ? `$${price}` : 'Price TBA';
  };

  const attendancePercentage = (event.currentAttendees / event.maxAttendees) * 100;
  const isNearlyFull = attendancePercentage >= 90;
  const isFull = event.currentAttendees >= event.maxAttendees;

  const getCategoryColor = (category: string) => {
    const colors = {
      conference: 'bg-blue-100 text-blue-800',
      workshop: 'bg-green-100 text-green-800',
      networking: 'bg-purple-100 text-purple-800',
      social: 'bg-orange-100 text-orange-800',
      music: 'bg-pink-100 text-pink-800',
      sports: 'bg-red-100 text-red-800',
      food: 'bg-yellow-100 text-yellow-800',
      art: 'bg-indigo-100 text-indigo-800',
      business: 'bg-gray-100 text-gray-800',
      health: 'bg-emerald-100 text-emerald-800',
      education: 'bg-cyan-100 text-cyan-800',
      other: 'bg-slate-100 text-slate-800'
    };
    return colors[category as keyof typeof colors] || colors.other;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Event Image */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <Badge className={getCategoryColor(event.category)}>
            {event.category}
          </Badge>
        </div>
        <div className="absolute top-4 right-4">
          <Badge variant="secondary" className="bg-black/70 text-white">
            {formatPrice(event.price)}
          </Badge>
        </div>
        {(isNearlyFull || isFull) && (
          <div className="absolute bottom-4 right-4">
            <Badge variant={isFull ? "destructive" : "secondary"}>
              {isFull ? "Full" : "Almost Full"}
            </Badge>
          </div>
        )}
      </div>

      {/* Event Content */}
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 line-clamp-2">
          {event.title}
        </h3>
        
        <p className="text-gray-600 mb-4 text-sm line-clamp-3">
          {event.description}
        </p>

        {/* Event Details */}
        <div className="space-y-3 mb-4">
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
            <span>{formatDate(event.date)} at {event.time}</span>
          </div>
          
          <div className="flex items-start text-sm text-gray-500">
            <MapPin className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
            <div className="flex flex-col">
              <span className="font-medium">{event.venue.name}</span>
              <span className="text-xs">{event.venue.city}, {event.venue.state}</span>
            </div>
          </div>
          
          <div className="flex items-center text-sm text-gray-500">
            <Users className="w-4 h-4 mr-2 flex-shrink-0" />
            <span>{event.currentAttendees.toLocaleString()} / {event.maxAttendees.toLocaleString()} attending</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {event.tags.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
          {event.tags.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{event.tags.length - 3} more
            </Badge>
          )}
        </div>

        {/* Attendance Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>Attendance</span>
            <span>{Math.round(attendancePercentage)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className={`h-2 rounded-full transition-all duration-300 ${
                isFull ? 'bg-red-500' : isNearlyFull ? 'bg-yellow-500' : 'bg-green-500'
              }`}
              style={{ width: `${Math.min(attendancePercentage, 100)}%` }}
            />
          </div>
        </div>

        {/* Contact Info */}
        <div className="mb-4 p-3 bg-gray-50 rounded-lg">
          <div className="flex flex-wrap gap-3 text-xs text-gray-600">
            <div className="flex items-center">
              <Mail className="w-3 h-3 mr-1" />
              <span className="truncate max-w-[120px] sm:max-w-none">{event.contactInfo.email}</span>
            </div>
            {event.contactInfo.phone && (
              <div className="flex items-center">
                <Phone className="w-3 h-3 mr-1" />
                <span>{event.contactInfo.phone}</span>
              </div>
            )}
            {event.contactInfo.website && (
              <div className="flex items-center">
                <Globe className="w-3 h-3 mr-1" />
                <span className="text-blue-600">Website</span>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-2">
          <Button 
            variant="outline" 
            className="flex-1"
            onClick={() => onViewDetails?.(event.id)}
          >
            View Details
          </Button>
          <Button 
            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            onClick={() => onRSVP?.(event.id)}
            disabled={isFull}
          >
            {isFull ? 'Full' : 'RSVP'}
          </Button>
        </div>

        {/* Organizer */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-xs text-gray-500">
            Organized by <span className="font-medium">{event.organizer}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
