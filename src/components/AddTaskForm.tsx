
import React, { useState } from 'react';
import { Task, Priority } from '../types/task';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus } from 'lucide-react';

interface AddTaskFormProps {
  onAddTask: (task: Omit<Task, 'id' | 'completed'>) => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<Priority>('important');
  const [timeEstimate, setTimeEstimate] = useState('30');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim() || !dueDate) return;

    onAddTask({
      title: title.trim(),
      description: description.trim() || undefined,
      priority,
      timeEstimate: parseInt(timeEstimate),
      dueDate,
    });

    // Reset form
    setTitle('');
    setDescription('');
    setPriority('important');
    setTimeEstimate('30');
    setDueDate('');
  };

  const getTodayDate = () => {
    return new Date().toISOString().split('T')[0];
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
        <Plus className="h-5 w-5 mr-2" />
        Add New Task
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Task Title *
          </label>
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter task title"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Add details (optional)"
            rows={2}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Priority *
          </label>
          <Select value={priority} onValueChange={(value: Priority) => setPriority(value)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="urgent">🔴 Urgent (Today)</SelectItem>
              <SelectItem value="important">🟡 Important (2-3 days)</SelectItem>
              <SelectItem value="long-term">🟢 Long-term (Future)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Time Estimate (min) *
            </label>
            <Input
              type="number"
              value={timeEstimate}
              onChange={(e) => setTimeEstimate(e.target.value)}
              min="5"
              max="480"
              step="5"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Due Date *
            </label>
            <Input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              min={getTodayDate()}
              required
            />
          </div>
        </div>

        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
          Add Task
        </Button>
      </form>
    </div>
  );
};

export default AddTaskForm;
