
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, MapPin, User, CheckCircle } from 'lucide-react';

const UpcomingReminders = () => {
  const reminders = [
    {
      id: 1,
      title: 'Cardiology Appointment',
      doctor: 'Dr. Sarah Smith',
      time: 'Today, 2:00 PM',
      location: 'Memorial Hospital - Room 301',
      type: 'appointment',
      priority: 'high',
    },
    {
      id: 2,
      title: 'Blood Pressure Medication',
      description: 'Lisinopril 10mg',
      time: 'Today, 8:00 PM',
      type: 'medication',
      priority: 'medium',
    },
    {
      id: 3,
      title: 'Lab Results Follow-up',
      doctor: 'Dr. Michael Johnson',
      time: 'Tomorrow, 10:30 AM',
      location: 'Call required',
      type: 'followup',
      priority: 'medium',
    },
    {
      id: 4,
      title: 'Physical Therapy Session',
      description: 'Knee rehabilitation',
      time: 'Dec 28, 3:00 PM',
      location: 'Wellness Center',
      type: 'therapy',
      priority: 'low',
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'appointment': return <User className="h-4 w-4" />;
      case 'medication': return '💊';
      case 'followup': return '📞';
      case 'therapy': return '🏃‍♂️';
      default: return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Clock className="h-5 w-5 text-blue-500" />
          <span>Upcoming Reminders</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {reminders.map((reminder) => (
            <div key={reminder.id} className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex-shrink-0 mt-1">
                {typeof getTypeIcon(reminder.type) === 'string' ? (
                  <span className="text-xl">{getTypeIcon(reminder.type)}</span>
                ) : (
                  getTypeIcon(reminder.type)
                )}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-semibold text-gray-900 truncate">
                    {reminder.title}
                  </h4>
                  <Badge className={getPriorityColor(reminder.priority)}>
                    {reminder.priority}
                  </Badge>
                </div>
                
                {reminder.doctor && (
                  <p className="text-sm text-gray-600 mb-1">
                    <User className="h-3 w-3 inline mr-1" />
                    {reminder.doctor}
                  </p>
                )}
                
                {reminder.description && (
                  <p className="text-sm text-gray-600 mb-1">{reminder.description}</p>
                )}
                
                <div className="flex items-center text-xs text-gray-500 mb-2">
                  <Clock className="h-3 w-3 mr-1" />
                  {reminder.time}
                </div>
                
                {reminder.location && (
                  <div className="flex items-center text-xs text-gray-500 mb-3">
                    <MapPin className="h-3 w-3 mr-1" />
                    {reminder.location}
                  </div>
                )}
                
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" className="text-xs">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Mark Complete
                  </Button>
                  <Button size="sm" variant="ghost" className="text-xs">
                    Reschedule
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default UpcomingReminders;
