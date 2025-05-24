
import React from 'react';
import { Task } from '../types/task';
import { Clock, Trash2, CheckCircle, Circle } from 'lucide-react';

interface TaskCardProps {
  task: Task;
  onToggle: () => void;
  onDelete: () => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onToggle, onDelete }) => {
  const formatTime = (minutes: number) => {
    if (minutes < 60) return `${minutes}m`;
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: date.getFullYear() !== new Date().getFullYear() ? 'numeric' : undefined
    });
  };

  return (
    <div className={`bg-gray-50 rounded-lg p-3 border transition-all duration-200 hover:shadow-md ${
      task.completed ? 'opacity-60' : ''
    }`}>
      <div className="flex items-start justify-between mb-2">
        <button
          onClick={onToggle}
          className="flex items-center space-x-2 flex-1 text-left"
        >
          {task.completed ? (
            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
          ) : (
            <Circle className="h-5 w-5 text-gray-400 flex-shrink-0" />
          )}
          <div className="flex-1">
            <h4 className={`font-medium ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
              {task.title}
            </h4>
            {task.description && (
              <p className={`text-sm mt-1 ${task.completed ? 'line-through text-gray-400' : 'text-gray-600'}`}>
                {task.description}
              </p>
            )}
          </div>
        </button>
        <button
          onClick={onDelete}
          className="text-gray-400 hover:text-red-500 transition-colors"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>

      <div className="flex items-center justify-between text-xs text-gray-500">
        <div className="flex items-center space-x-2">
          <Clock className="h-3 w-3" />
          <span>{formatTime(task.timeEstimate)}</span>
        </div>
        <span>Due: {formatDate(task.dueDate)}</span>
      </div>
    </div>
  );
};

export default TaskCard;
