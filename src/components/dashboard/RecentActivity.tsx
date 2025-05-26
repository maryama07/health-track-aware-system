
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity, CheckCircle, Clock, User, Pill, Heart } from 'lucide-react';

const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      type: 'medication',
      description: 'Took Lisinopril 10mg',
      time: '2 hours ago',
      icon: Pill,
      color: 'text-green-500',
    },
    {
      id: 2,
      type: 'appointment',
      description: 'Completed appointment with Dr. Smith',
      time: '1 day ago',
      icon: User,
      color: 'text-blue-500',
    },
    {
      id: 3,
      type: 'measurement',
      description: 'Logged blood pressure: 120/80',
      time: '2 days ago',
      icon: Heart,
      color: 'text-red-500',
    },
    {
      id: 4,
      type: 'medication',
      description: 'Took Metformin 500mg',
      time: '2 days ago',
      icon: Pill,
      color: 'text-green-500',
    },
    {
      id: 5,
      type: 'reminder',
      description: 'Set reminder for lab appointment',
      time: '3 days ago',
      icon: Clock,
      color: 'text-orange-500',
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Activity className="h-5 w-5 text-blue-500" />
          <span>Recent Activity</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-3">
              <div className={`flex-shrink-0 p-2 rounded-full bg-gray-100 ${activity.color}`}>
                <activity.icon className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 mb-1">
                  {activity.description}
                </p>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
            </div>
          ))}
        </div>
        
        <div className="mt-6 pt-4 border-t border-gray-200">
          <button className="w-full text-sm text-blue-600 hover:text-blue-800 font-medium">
            View All Activity
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
