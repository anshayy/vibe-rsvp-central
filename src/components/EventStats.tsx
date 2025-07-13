
import React from 'react';
import { Calendar, Users, MapPin, TrendingUp } from 'lucide-react';

interface EventStatsProps {
  totalEvents: number;
  totalAttendees: number;
  upcomingEvents: number;
  averageAttendance: number;
}

const EventStats = ({ totalEvents, totalAttendees, upcomingEvents, averageAttendance }: EventStatsProps) => {
  const stats = [
    {
      label: 'Total Events',
      value: totalEvents,
      icon: Calendar,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      label: 'Total Attendees',
      value: totalAttendees.toLocaleString(),
      icon: Users,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      label: 'Upcoming Events',
      value: upcomingEvents,
      icon: MapPin,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      label: 'Avg. Attendance',
      value: `${averageAttendance}%`,
      icon: TrendingUp,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            </div>
            <div className={`${stat.bgColor} p-3 rounded-lg`}>
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventStats;
