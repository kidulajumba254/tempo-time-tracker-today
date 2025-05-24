
import React from 'react';
import { ProjectTask, statusConfig } from '../types/project';
import { Clock, Trash2, User, Calendar } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface ProjectTaskCardProps {
  task: ProjectTask;
  onUpdateStatus: (status: ProjectTask['status']) => void;
  onDelete: () => void;
}

const ProjectTaskCard: React.FC<ProjectTaskCardProps> = ({ task, onUpdateStatus, onDelete }) => {
  const formatTime = (hours: number) => {
    if (hours < 1) return `${(hours * 60).toFixed(0)}m`;
    return hours % 1 === 0 ? `${hours}h` : `${hours.toFixed(1)}h`;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: date.getFullYear() !== new Date().getFullYear() ? 'numeric' : undefined
    });
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-l-red-500';
      case 'medium': return 'border-l-yellow-500';
      case 'low': return 'border-l-green-500';
      default: return 'border-l-gray-300';
    }
  };

  const statusConfig_local = statusConfig[task.status];

  return (
    <div className={`bg-gray-50 rounded-lg p-3 border-l-4 ${getPriorityColor(task.priority)} transition-all duration-200 hover:shadow-md`}>
      <div className="flex items-start justify-between mb-2">
        <div className="flex-1">
          <h4 className="font-medium text-gray-800 text-sm mb-1">{task.title}</h4>
          {task.description && (
            <p className="text-xs text-gray-600 mb-2">{task.description}</p>
          )}
        </div>
        <button
          onClick={onDelete}
          className="text-gray-400 hover:text-red-500 transition-colors ml-2"
        >
          <Trash2 className="h-3 w-3" />
        </button>
      </div>

      <div className="mb-3">
        <Select value={task.status} onValueChange={onUpdateStatus}>
          <SelectTrigger className="h-7 text-xs">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="not-started">Not Started</SelectItem>
            <SelectItem value="in-progress">In Progress</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="blocked">Blocked</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-1">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center space-x-1">
            <User className="h-3 w-3" />
            <span>{task.assignee}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-3 w-3" />
            <span>{formatTime(task.timeEstimate)}</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center space-x-1">
            <Calendar className="h-3 w-3" />
            <span>Due: {formatDate(task.deadline)}</span>
          </div>
          <span className={`px-2 py-1 rounded-full text-xs ${statusConfig_local.color} text-white`}>
            {task.priority}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectTaskCard;
