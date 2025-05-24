
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import ProjectBoard from '../components/ProjectBoard';
import AddProjectTaskForm from '../components/AddProjectTaskForm';
import ProjectStats from '../components/ProjectStats';
import { Project, ProjectTask, TeamMember } from '../types/project';
import { Button } from '@/components/ui/button';
import { Plus, Users } from 'lucide-react';

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: '1',
      name: 'TaskFlow Enhancement',
      description: 'Adding project management features to TaskFlow',
      startDate: '2024-01-01',
      endDate: '2024-03-31',
      status: 'active',
      tasks: [],
      teamMembers: [
        { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Project Manager' },
        { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'Developer' },
        { id: '3', name: 'Mike Johnson', email: 'mike@example.com', role: 'Designer' },
      ]
    }
  ]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(projects[0] || null);

  const addTask = (task: Omit<ProjectTask, 'id'>) => {
    if (!selectedProject) return;
    
    const newTask: ProjectTask = {
      ...task,
      id: Date.now().toString(),
    };
    
    setProjects(prev => 
      prev.map(project => 
        project.id === selectedProject.id 
          ? { ...project, tasks: [...project.tasks, newTask] }
          : project
      )
    );
    
    setSelectedProject(prev => 
      prev ? { ...prev, tasks: [...prev.tasks, newTask] } : null
    );
  };

  const updateTaskStatus = (taskId: string, status: ProjectTask['status']) => {
    if (!selectedProject) return;
    
    setProjects(prev => 
      prev.map(project => 
        project.id === selectedProject.id 
          ? {
              ...project, 
              tasks: project.tasks.map(task => 
                task.id === taskId ? { ...task, status } : task
              )
            }
          : project
      )
    );
    
    setSelectedProject(prev => 
      prev ? {
        ...prev,
        tasks: prev.tasks.map(task => 
          task.id === taskId ? { ...task, status } : task
        )
      } : null
    );
  };

  const deleteTask = (taskId: string) => {
    if (!selectedProject) return;
    
    setProjects(prev => 
      prev.map(project => 
        project.id === selectedProject.id 
          ? { ...project, tasks: project.tasks.filter(task => task.id !== taskId) }
          : project
      )
    );
    
    setSelectedProject(prev => 
      prev ? { ...prev, tasks: prev.tasks.filter(task => task.id !== taskId) } : null
    );
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
        
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Project Management
          </h1>
          <p className="text-white/90 text-xl drop-shadow-md">
            Organize tasks by phases and collaborate with your team
          </p>
        </div>

        {selectedProject && (
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-white">{selectedProject.name}</h2>
                  <p className="text-white/80">{selectedProject.description}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-white" />
                  <span className="text-white">{selectedProject.teamMembers.length} members</span>
                </div>
              </div>
              <ProjectStats project={selectedProject} />
            </div>

            <div className="grid lg:grid-cols-4 gap-6">
              <div className="lg:col-span-1">
                <AddProjectTaskForm 
                  onAddTask={addTask} 
                  teamMembers={selectedProject.teamMembers}
                />
              </div>
              <div className="lg:col-span-3">
                <ProjectBoard 
                  tasks={selectedProject.tasks}
                  onUpdateStatus={updateTaskStatus}
                  onDeleteTask={deleteTask}
                />
              </div>
            </div>
          </div>
        )}

        {!selectedProject && (
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-12 border border-white/20 max-w-md mx-auto">
              <Plus className="h-16 w-16 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No Projects Yet</h3>
              <p className="text-white/80 mb-4">Create your first project to get started</p>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Create Project
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
