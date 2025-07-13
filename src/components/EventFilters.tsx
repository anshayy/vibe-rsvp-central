
import React from 'react';
import { Search, Filter, Calendar, MapPin, Tag, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface EventFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedCategory: string;
  onCategoryChange: (value: string) => void;
  selectedLocation: string;
  onLocationChange: (value: string) => void;
  onClearFilters: () => void;
}

const EventFilters = ({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedLocation,
  onLocationChange,
  onClearFilters
}: EventFiltersProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Filter className="w-5 h-5 text-purple-600" />
        <h2 className="text-lg font-semibold text-gray-900">Filter Events</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Search Input */}
        <div className="relative sm:col-span-2 lg:col-span-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Category Filter */}
        <Select value={selectedCategory} onValueChange={onCategoryChange}>
          <SelectTrigger>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4 text-gray-400" />
              <SelectValue placeholder="All Categories" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="conference">Conference</SelectItem>
            <SelectItem value="workshop">Workshop</SelectItem>
            <SelectItem value="networking">Networking</SelectItem>
            <SelectItem value="social">Social</SelectItem>
            <SelectItem value="music">Music</SelectItem>
            <SelectItem value="sports">Sports</SelectItem>
            <SelectItem value="food">Food & Drink</SelectItem>
            <SelectItem value="art">Art & Culture</SelectItem>
            <SelectItem value="business">Business</SelectItem>
            <SelectItem value="health">Health & Wellness</SelectItem>
            <SelectItem value="education">Education</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>

        {/* Location Filter */}
        <Select value={selectedLocation} onValueChange={onLocationChange}>
          <SelectTrigger>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gray-400" />
              <SelectValue placeholder="All Locations" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Locations</SelectItem>
            <SelectItem value="san-francisco">San Francisco</SelectItem>
            <SelectItem value="new-york">New York</SelectItem>
            <SelectItem value="los-angeles">Los Angeles</SelectItem>
            <SelectItem value="chicago">Chicago</SelectItem>
            <SelectItem value="amsterdam">Amsterdam</SelectItem>
            <SelectItem value="tucson">Tucson</SelectItem>
            <SelectItem value="napa">Napa Valley</SelectItem>
            <SelectItem value="mountain-view">Mountain View</SelectItem>
            <SelectItem value="pasadena">Pasadena</SelectItem>
          </SelectContent>
        </Select>

        {/* Clear Filters Button */}
        <Button 
          variant="outline" 
          onClick={onClearFilters}
          className="flex items-center gap-2 w-full sm:w-auto"
        >
          Clear Filters
        </Button>
      </div>
    </div>
  );
};

export default EventFilters;
