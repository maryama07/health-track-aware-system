
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Pill, Clock, TrendingUp } from 'lucide-react';

const QuickStats = () => {
  const stats = [
    {
      title: 'Next Appointment',
      value: '2 days',
      subtitle: 'Dr. Smith - Cardiology',
      icon: Calendar,
      color: 'bg-blue-500',
    },
    {
      title: 'Medications Due',
      value: '3',
      subtitle: 'Today',
      icon: Pill,
      color: 'bg-green-500',
    },
    {
      title: 'Overdue Tasks',
      value: '1',
      subtitle: 'Blood pressure check',
      icon: Clock,
      color: 'bg-orange-500',
    },
    {
      title: 'Health Score',
      value: '85%',
      subtitle: '+5% from last week',
      icon: TrendingUp,
      color: 'bg-purple-500',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
              <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
              <p className="text-xs text-gray-500">{stat.subtitle}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default QuickStats;
