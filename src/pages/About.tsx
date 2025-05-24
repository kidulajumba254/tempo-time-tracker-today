
import React from 'react';
import Navigation from '../components/Navigation';
import { CheckSquare, Clock, Target, Zap } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: CheckSquare,
      title: 'Priority-Based Organization',
      description: 'Organize tasks into Urgent, Important, and Long-term categories for better focus.'
    },
    {
      icon: Clock,
      title: 'Time Estimates',
      description: 'Add time estimates to each task to better plan your day and track productivity.'
    },
    {
      icon: Target,
      title: 'Smart Filtering',
      description: 'Filter tasks by today, this week, or this month to focus on what matters now.'
    },
    {
      icon: Zap,
      title: 'Quick Actions',
      description: 'Mark tasks complete, delete, or edit them with simple and intuitive actions.'
    }
  ];

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
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
              About TaskFlow
            </h1>
            <p className="text-white/90 text-xl drop-shadow-md max-w-2xl mx-auto">
              A modern, prioritized to-do list application designed to help you stay organized and productive.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  <feature.icon className="h-8 w-8 text-white mr-3" />
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-white/80">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 border border-white/20 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-white/90 text-lg leading-relaxed">
              We believe that effective task management shouldn't be complicated. TaskFlow provides a clean, 
              intuitive interface that helps you prioritize what matters most, estimate your time accurately, 
              and maintain focus on your goals. Whether you're managing daily tasks or long-term projects, 
              TaskFlow adapts to your workflow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
