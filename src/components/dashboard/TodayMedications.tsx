
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Pill, Clock, Check, AlertCircle } from 'lucide-react';

const TodayMedications = () => {
  const [medications, setMedications] = useState([
    {
      id: 1,
      name: 'Lisinopril',
      dosage: '10mg',
      time: '8:00 AM',
      taken: true,
      notes: 'With breakfast',
      color: 'blue',
    },
    {
      id: 2,
      name: 'Metformin',
      dosage: '500mg',
      time: '12:00 PM',
      taken: false,
      notes: 'With lunch',
      color: 'green',
    },
    {
      id: 3,
      name: 'Lisinopril',
      dosage: '10mg',
      time: '8:00 PM',
      taken: false,
      notes: 'With dinner',
      color: 'blue',
      overdue: false,
    },
    {
      id: 4,
      name: 'Vitamin D3',
      dosage: '1000 IU',
      time: '9:00 AM',
      taken: false,
      notes: 'Daily supplement',
      color: 'yellow',
      overdue: true,
    },
  ]);

  const markAsTaken = (id: number) => {
    setMedications(prev => 
      prev.map(med => 
        med.id === id ? { ...med, taken: true, overdue: false } : med
      )
    );
  };

  const getStatusBadge = (med: any) => {
    if (med.taken) {
      return <Badge className="bg-green-100 text-green-800">Taken</Badge>;
    } else if (med.overdue) {
      return <Badge className="bg-red-100 text-red-800">Overdue</Badge>;
    } else {
      return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
    }
  };

  const getMedicationColor = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 border-blue-300',
      green: 'bg-green-100 border-green-300',
      yellow: 'bg-yellow-100 border-yellow-300',
      red: 'bg-red-100 border-red-300',
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Pill className="h-5 w-5 text-blue-500" />
          <span>Today's Medications</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {medications.map((medication) => (
            <div 
              key={medication.id} 
              className={`p-4 border-2 rounded-lg transition-all duration-200 ${
                medication.taken 
                  ? 'bg-gray-50 border-gray-200 opacity-75' 
                  : medication.overdue 
                    ? 'bg-red-50 border-red-200'
                    : getMedicationColor(medication.color)
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${
                    medication.color === 'blue' ? 'bg-blue-500' :
                    medication.color === 'green' ? 'bg-green-500' :
                    medication.color === 'yellow' ? 'bg-yellow-500' :
                    'bg-red-500'
                  }`} />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {medication.name} {medication.dosage}
                    </h4>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-3 w-3 mr-1" />
                      {medication.time}
                    </div>
                  </div>
                </div>
                {getStatusBadge(medication)}
              </div>
              
              {medication.notes && (
                <p className="text-sm text-gray-600 mb-3">{medication.notes}</p>
              )}
              
              {medication.overdue && (
                <div className="flex items-center text-sm text-red-600 mb-3">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  This medication is overdue
                </div>
              )}
              
              <div className="flex space-x-2">
                {!medication.taken && (
                  <Button 
                    size="sm" 
                    onClick={() => markAsTaken(medication.id)}
                    className="bg-green-500 hover:bg-green-600"
                  >
                    <Check className="h-3 w-3 mr-1" />
                    Mark as Taken
                  </Button>
                )}
                <Button size="sm" variant="outline">
                  Skip
                </Button>
                <Button size="sm" variant="ghost">
                  Reschedule
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 pt-4 border-t border-gray-200">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-green-600">
                {medications.filter(m => m.taken).length}
              </div>
              <div className="text-xs text-gray-600">Taken</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-600">
                {medications.filter(m => !m.taken && !m.overdue).length}
              </div>
              <div className="text-xs text-gray-600">Pending</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-red-600">
                {medications.filter(m => m.overdue).length}
              </div>
              <div className="text-xs text-gray-600">Overdue</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TodayMedications;
