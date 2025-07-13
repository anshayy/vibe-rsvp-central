
import React from 'react';
import { Calendar, MapPin, Users, Clock, DollarSign, Mail, Phone, Globe } from 'lucide-react';
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
      conference: 'bg-blue-50 text-blue-700 border-blue-200',
      workshop: 'bg-green-50 text-green-700 border-green-200',
      networking: 'bg-purple-50 text-purple-700 border-purple-200',
      social: 'bg-orange-50 text-orange-700 border-orange-200',
      music: 'bg-pink-50 text-pink-700 border-pink-200',
      sports: 'bg-red-50 text-red-700 border-red-200',
      food: 'bg-yellow-50 text-yellow-700 border-yellow-200',
      art: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      business: 'bg-gray-50 text-gray-700 border-gray-200',
      health: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      education: 'bg-cyan-50 text-cyan-700 border-cyan-200',
      other: 'bg-slate-50 text-slate-700 border-slate-200'
    };
    return colors[category as keyof typeof colors] || colors.other;
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-200 overflow-hidden">
      {/* Event Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 left-3">
          <Badge className={`${getCategoryColor(event.category)} border`}>
            {event.category}
          </Badge>
        </div>
        <div className="absolute top-3 right-3">
          <Badge variant="secondary" className="bg-white/90 text-gray-900">
            {formatPrice(event.price)}
          </Badge>
        </div>
        {(isNearlyFull || isFull) && (
          <div className="absolute bottom-3 right-3">
            <Badge variant={isFull ? "destructive" : "secondary"} className="bg-white/90">
              {isFull ? "Sold Out" : "Almost Full"}
            </Badge>
          </div>
        )}
      </div>

      {/* Event Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {event.title}
        </h3>
        
        <p className="text-gray-600 mb-4 text-sm line-clamp-2">
          {event.description}
        </p>

        {/* Event Details */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="w-4 h-4 mr-2 text-gray-400" />
            <span>{formatDate(event.date)} at {event.time}</span>
          </div>
          
          <div className="flex items-start text-sm text-gray-600">
            <MapPin className="w-4 h-4 mr-2 text-gray-400 mt-0.5" />
            <div className="flex flex-col">
              <span className="font-medium">{event.venue.name}</span>
              <span className="text-xs text-gray-500">{event.venue.city}, {event.venue.state}</span>
            </div>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <Users className="w-4 h-4 mr-2 text-gray-400" />
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
              +{event.tags.length - 3}
            </Badge>
          )}
        </div>

        {/* Attendance Progress */}
        <div className="mb-4">
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>Capacity</span>
            <span>{Math.round(attendancePercentage)}%</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2">
            <div 
              className={`h-2 rounded-full ${
                isFull ? 'bg-red-500' : isNearlyFull ? 'bg-yellow-500' : 'bg-blue-500'
              }`}
              style={{ width: `${Math.min(attendancePercentage, 100)}%` }}
            />
          </div>
        </div>

        {/* Contact Info */}
        <div className="mb-4 p-3 bg-gray-50 rounded-md">
          <div className="flex flex-wrap gap-3 text-xs text-gray-600">
            <div className="flex items-center">
              <Mail className="w-3 h-3 mr-1" />
              <span className="truncate">{event.contactInfo.email}</span>
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
        <div className="flex gap-2 mb-4">
          <Button 
            variant="outline" 
            className="flex-1"
            onClick={() => onViewDetails?.(event.id)}
          >
            View Details
          </Button>
          <Button 
            className="flex-1 bg-blue-600 hover:bg-blue-700"
            onClick={() => onRSVP?.(event.id)}
            disabled={isFull}
          >
            {isFull ? 'Sold Out' : 'RSVP'}
          </Button>
        </div>

        {/* Organizer */}
        <div className="pt-3 border-t border-gray-100">
          <p className="text-xs text-gray-500">
            Organized by <span className="font-medium text-gray-700">{event.organizer}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
