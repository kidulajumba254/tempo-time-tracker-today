
import React from 'react';
import { Task, Priority, priorityConfig } from '../types/task';
import TaskCard from './TaskCard';

interface TaskBoardProps {
  tasks: Task[];
  onToggleTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

const TaskBoard: React.FC<TaskBoardProps> = ({ tasks, onToggleTask, onDeleteTask }) => {
  const priorities: Priority[] = ['urgent', 'important', 'long-term'];

  const getTasksByPriority = (priority: Priority) => {
    return tasks.filter(task => task.priority === priority);
  };

  const getTotalTime = (tasks: Task[]) => {
    return tasks
      .filter(task => !task.completed)
      .reduce((total, task) => total + task.timeEstimate, 0);
  };

  const formatTime = (minutes: number) => {
    if (minutes < 60) return `${minutes}m`;
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
  };

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {priorities.map(priority => {
        const priorityTasks = getTasksByPriority(priority);
        const config = priorityConfig[priority];
        const totalTime = getTotalTime(priorityTasks);
        const completedCount = priorityTasks.filter(task => task.completed).length;

        return (
          <div key={priority} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className={`${config.lightColor} ${config.borderColor} border-b-2 p-4`}>
              <div className="flex items-center justify-between mb-2">
                <h3 className={`font-bold text-lg ${config.textColor}`}>
                  {config.label}
                </h3>
                <div className={`${config.color} text-white text-xs px-2 py-1 rounded-full`}>
                  {priorityTasks.length}
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-2">{config.description}</p>
              <div className="flex justify-between text-xs text-gray-500">
                <span>Completed: {completedCount}/{priorityTasks.length}</span>
                <span>Time: {formatTime(totalTime)}</span>
              </div>
            </div>

            <div className="p-4 max-h-96 overflow-y-auto">
              {priorityTasks.length === 0 ? (
                <div className="text-center text-gray-400 py-8">
                  <p>No tasks yet</p>
                  <p className="text-xs mt-1">Add a task to get started</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {priorityTasks.map(task => (
                    <TaskCard
                      key={task.id}
                      task={task}
                      onToggle={() => onToggleTask(task.id)}
                      onDelete={() => onDeleteTask(task.id)}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskBoard;
