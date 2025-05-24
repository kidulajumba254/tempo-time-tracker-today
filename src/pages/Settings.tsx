
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Bell, Palette, Clock, Database } from 'lucide-react';

const Settings = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [defaultTimeEstimate, setDefaultTimeEstimate] = useState('30');
  const [theme, setTheme] = useState('default');

  const handleExportData = () => {
    // Placeholder for export functionality
    alert('Export functionality would be implemented here');
  };

  const handleImportData = () => {
    // Placeholder for import functionality
    alert('Import functionality would be implemented here');
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80')`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
      <div className="relative z-10 container mx-auto px-4 py-8">
        <Navigation />
        
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
              Settings
            </h1>
            <p className="text-white/90 text-lg drop-shadow-md">
              Customize your TaskFlow experience
            </p>
          </div>

          <div className="space-y-6">
            {/* Notifications Section */}
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <Bell className="h-5 w-5 text-white mr-2" />
                <h2 className="text-xl font-semibold text-white">Notifications</h2>
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="notifications" className="text-white/90">
                  Enable task reminders
                </Label>
                <Switch
                  id="notifications"
                  checked={notifications}
                  onCheckedChange={setNotifications}
                />
              </div>
            </div>

            {/* Appearance Section */}
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <Palette className="h-5 w-5 text-white mr-2" />
                <h2 className="text-xl font-semibold text-white">Appearance</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="dark-mode" className="text-white/90">
                    Dark mode
                  </Label>
                  <Switch
                    id="dark-mode"
                    checked={darkMode}
                    onCheckedChange={setDarkMode}
                  />
                </div>
                <div>
                  <Label className="text-white/90 block mb-2">Theme</Label>
                  <Select value={theme} onValueChange={setTheme}>
                    <SelectTrigger className="bg-white/20 border-white/30 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="default">Default</SelectItem>
                      <SelectItem value="minimal">Minimal</SelectItem>
                      <SelectItem value="colorful">Colorful</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Task Defaults Section */}
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <Clock className="h-5 w-5 text-white mr-2" />
                <h2 className="text-xl font-semibold text-white">Task Defaults</h2>
              </div>
              <div>
                <Label className="text-white/90 block mb-2">Default time estimate (minutes)</Label>
                <Select value={defaultTimeEstimate} onValueChange={setDefaultTimeEstimate}>
                  <SelectTrigger className="bg-white/20 border-white/30 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="15">15 minutes</SelectItem>
                    <SelectItem value="30">30 minutes</SelectItem>
                    <SelectItem value="60">1 hour</SelectItem>
                    <SelectItem value="120">2 hours</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Data Management Section */}
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <Database className="h-5 w-5 text-white mr-2" />
                <h2 className="text-xl font-semibold text-white">Data Management</h2>
              </div>
              <div className="space-y-3">
                <Button 
                  onClick={handleExportData}
                  variant="outline"
                  className="w-full bg-white/20 border-white/30 text-white hover:bg-white/30"
                >
                  Export Tasks
                </Button>
                <Button 
                  onClick={handleImportData}
                  variant="outline"
                  className="w-full bg-white/20 border-white/30 text-white hover:bg-white/30"
                >
                  Import Tasks
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
