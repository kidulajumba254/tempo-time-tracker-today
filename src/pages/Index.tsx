
import React, { useState } from 'react';
import TaskBoard from '../components/TaskBoard';
import AddTaskForm from '../components/AddTaskForm';
import TimeFilter from '../components/TimeFilter';
import { Task, Priority, TimeFilter as TimeFilterType } from '../types/task';

const Index = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [timeFilter, setTimeFilter] = useState<TimeFilterType>('today');

  const addTask = (task: Omit<Task, 'id' | 'completed'>) => {
    const newTask: Task = {
      ...task,
      id: Date.now().toString(),
      completed: false,
    };
    setTasks(prev => [...prev, newTask]);
  };

  const toggleTask = (id: string) => {
    setTasks(prev => 
      prev.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    const today = new Date();
    const taskDate = new Date(task.dueDate);
    
    switch (timeFilter) {
      case 'today':
        return taskDate.toDateString() === today.toDateString();
      case 'week':
        const weekFromNow = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
        return taskDate >= today && taskDate <= weekFromNow;
      case 'month':
        const monthFromNow = new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000);
        return taskDate >= today && taskDate <= monthFromNow;
      default:
        return true;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Prioritized To-Do List
          </h1>
          <p className="text-gray-600 text-lg">
            Organize your tasks by priority and stay productive
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="mb-6 flex justify-center">
            <TimeFilter currentFilter={timeFilter} onFilterChange={setTimeFilter} />
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1">
              <AddTaskForm onAddTask={addTask} />
            </div>
            <div className="lg:col-span-3">
              <TaskBoard 
                tasks={filteredTasks}
                onToggleTask={toggleTask}
                onDeleteTask={deleteTask}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
