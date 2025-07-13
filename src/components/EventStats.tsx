
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
      color: 'bg-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      label: 'Total Attendees',
      value: totalAttendees,
      icon: Users,
      color: 'bg-green-500',
      bgColor: 'bg-green-50'
    },
    {
      label: 'Upcoming Events',
      value: upcomingEvents,
      icon: MapPin,
      color: 'bg-purple-500',
      bgColor: 'bg-purple-50'
    },
    {
      label: 'Avg. Attendance',
      value: `${averageAttendance}%`,
      icon: TrendingUp,
      color: 'bg-orange-500',
      bgColor: 'bg-orange-50'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className={`${stat.bgColor} rounded-xl p-6 border border-opacity-20`}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            </div>
            <div className={`${stat.color} p-3 rounded-lg`}>
              <stat.icon className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventStats;
