
import React from 'react';
import { ProjectTask, ProjectPhase, phaseConfig } from '../types/project';
import ProjectTaskCard from './ProjectTaskCard';

interface ProjectBoardProps {
  tasks: ProjectTask[];
  onUpdateStatus: (taskId: string, status: ProjectTask['status']) => void;
  onDeleteTask: (taskId: string) => void;
}

const ProjectBoard: React.FC<ProjectBoardProps> = ({ tasks, onUpdateStatus, onDeleteTask }) => {
  const phases: ProjectPhase[] = ['research', 'planning', 'design', 'development', 'testing', 'deployment', 'post-launch'];

  const getTasksByPhase = (phase: ProjectPhase) => {
    return tasks.filter(task => task.phase === phase);
  };

  const getTotalTime = (tasks: ProjectTask[]) => {
    return tasks
      .filter(task => task.status !== 'completed')
      .reduce((total, task) => total + task.timeEstimate, 0);
  };

  const formatTime = (hours: number) => {
    if (hours < 1) return `${(hours * 60).toFixed(0)}m`;
    return hours % 1 === 0 ? `${hours}h` : `${hours.toFixed(1)}h`;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {phases.map(phase => {
        const phaseTasks = getTasksByPhase(phase);
        const config = phaseConfig[phase];
        const totalTime = getTotalTime(phaseTasks);
        const completedCount = phaseTasks.filter(task => task.status === 'completed').length;

        return (
          <div key={phase} className="bg-white rounded-lg shadow-lg overflow-hidden min-h-[400px]">
            <div className={`${config.lightColor} ${config.borderColor} border-b-2 p-4`}>
              <div className="flex items-center justify-between mb-2">
                <h3 className={`font-bold text-lg ${config.textColor}`}>
                  {config.label}
                </h3>
                <div className={`${config.color} text-white text-xs px-2 py-1 rounded-full`}>
                  {phaseTasks.length}
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-2">{config.description}</p>
              <div className="flex justify-between text-xs text-gray-500">
                <span>Done: {completedCount}/{phaseTasks.length}</span>
                <span>Time: {formatTime(totalTime)}</span>
              </div>
            </div>

            <div className="p-4 max-h-80 overflow-y-auto">
              {phaseTasks.length === 0 ? (
                <div className="text-center text-gray-400 py-8">
                  <p>No tasks in this phase</p>
                  <p className="text-xs mt-1">Tasks will appear here</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {phaseTasks.map(task => (
                    <ProjectTaskCard
                      key={task.id}
                      task={task}
                      onUpdateStatus={(status) => onUpdateStatus(task.id, status)}
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

export default ProjectBoard;
