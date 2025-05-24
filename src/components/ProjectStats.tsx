
import React from 'react';
import { Project } from '../types/project';
import { BarChart3, Clock, Users, CheckCircle2 } from 'lucide-react';

interface ProjectStatsProps {
  project: Project;
}

const ProjectStats: React.FC<ProjectStatsProps> = ({ project }) => {
  const totalTasks = project.tasks.length;
  const completedTasks = project.tasks.filter(task => task.status === 'completed').length;
  const inProgressTasks = project.tasks.filter(task => task.status === 'in-progress').length;
  const blockedTasks = project.tasks.filter(task => task.status === 'blocked').length;
  
  const totalHours = project.tasks.reduce((sum, task) => sum + task.timeEstimate, 0);
  const completedHours = project.tasks
    .filter(task => task.status === 'completed')
    .reduce((sum, task) => sum + task.timeEstimate, 0);
  
  const completionPercentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
  const timeCompletionPercentage = totalHours > 0 ? Math.round((completedHours / totalHours) * 100) : 0;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
        <BarChart3 className="h-8 w-8 text-white mx-auto mb-2" />
        <div className="text-2xl font-bold text-white">{completionPercentage}%</div>
        <div className="text-white/80 text-sm">Progress</div>
      </div>
      
      <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
        <CheckCircle2 className="h-8 w-8 text-white mx-auto mb-2" />
        <div className="text-2xl font-bold text-white">{completedTasks}/{totalTasks}</div>
        <div className="text-white/80 text-sm">Tasks Done</div>
      </div>
      
      <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
        <Clock className="h-8 w-8 text-white mx-auto mb-2" />
        <div className="text-2xl font-bold text-white">{completedHours}h/{totalHours}h</div>
        <div className="text-white/80 text-sm">Hours</div>
      </div>
      
      <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
        <Users className="h-8 w-8 text-white mx-auto mb-2" />
        <div className="text-2xl font-bold text-white">{project.teamMembers.length}</div>
        <div className="text-white/80 text-sm">Team Members</div>
      </div>
    </div>
  );
};

export default ProjectStats;
