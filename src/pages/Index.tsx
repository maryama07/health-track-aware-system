
import React from 'react';
import { Calendar, Clock, Heart, Pill, Plus, Bell, Users, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import QuickStats from '@/components/dashboard/QuickStats';
import UpcomingReminders from '@/components/dashboard/UpcomingReminders';
import RecentActivity from '@/components/dashboard/RecentActivity';
import TodayMedications from '@/components/dashboard/TodayMedications';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-500 p-2 rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">HealthTracker Pro</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-xs flex items-center justify-center text-white">
                  3
                </Badge>
              </Button>
              <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-medium">
                JP
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Good morning, John!</h2>
          <p className="text-gray-600">Here's your health overview for today</p>
        </div>

        {/* Quick Stats */}
        <QuickStats />

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {/* Left Column - Reminders and Medications */}
          <div className="lg:col-span-2 space-y-6">
            <UpcomingReminders />
            <TodayMedications />
          </div>

          {/* Right Column - Activity and Quick Actions */}
          <div className="space-y-6">
            <RecentActivity />
            
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Plus className="h-5 w-5 text-blue-500" />
                  <span>Quick Actions</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Appointment
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Pill className="h-4 w-4 mr-2" />
                  Add Medication
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Heart className="h-4 w-4 mr-2" />
                  Log Health Metric
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Users className="h-4 w-4 mr-2" />
                  Contact Doctor
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
