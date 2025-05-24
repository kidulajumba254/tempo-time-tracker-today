
import React, { useState } from 'react';
import { ProjectTask, ProjectPhase, TeamMember } from '../types/project';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus } from 'lucide-react';

interface AddProjectTaskFormProps {
  onAddTask: (task: Omit<ProjectTask, 'id'>) => void;
  teamMembers: TeamMember[];
}

const AddProjectTaskForm: React.FC<AddProjectTaskFormProps> = ({ onAddTask, teamMembers }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [phase, setPhase] = useState<ProjectPhase>('planning');
  const [assignee, setAssignee] = useState('');
  const [deadline, setDeadline] = useState('');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium');
  const [timeEstimate, setTimeEstimate] = useState('8');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim() || !assignee || !deadline) return;

    onAddTask({
      title: title.trim(),
      description: description.trim() || undefined,
      phase,
      assignee,
      deadline,
      priority,
      status: 'not-started',
      timeEstimate: parseFloat(timeEstimate),
    });

    // Reset form
    setTitle('');
    setDescription('');
    setPhase('planning');
    setAssignee('');
    setDeadline('');
    setPriority('medium');
    setTimeEstimate('8');
  };

  const getTodayDate = () => {
    return new Date().toISOString().split('T')[0];
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
        <Plus className="h-5 w-5 mr-2" />
        Add Project Task
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
            placeholder="Add task details (optional)"
            rows={2}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phase *
          </label>
          <Select value={phase} onValueChange={(value: ProjectPhase) => setPhase(value)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="research">🔍 Research</SelectItem>
              <SelectItem value="planning">📋 Planning</SelectItem>
              <SelectItem value="design">🎨 Design</SelectItem>
              <SelectItem value="development">💻 Development</SelectItem>
              <SelectItem value="testing">🧪 Testing</SelectItem>
              <SelectItem value="deployment">🚀 Deployment</SelectItem>
              <SelectItem value="post-launch">📈 Post-Launch</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Assignee *
          </label>
          <Select value={assignee} onValueChange={setAssignee}>
            <SelectTrigger>
              <SelectValue placeholder="Select team member" />
            </SelectTrigger>
            <SelectContent>
              {teamMembers.map(member => (
                <SelectItem key={member.id} value={member.name}>
                  {member.name} - {member.role}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Priority *
            </label>
            <Select value={priority} onValueChange={(value: 'low' | 'medium' | 'high') => setPriority(value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="high">🔴 High</SelectItem>
                <SelectItem value="medium">🟡 Medium</SelectItem>
                <SelectItem value="low">🟢 Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Time (hours) *
            </label>
            <Input
              type="number"
              value={timeEstimate}
              onChange={(e) => setTimeEstimate(e.target.value)}
              min="0.5"
              max="200"
              step="0.5"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Deadline *
          </label>
          <Input
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            min={getTodayDate()}
            required
          />
        </div>

        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
          Add Task
        </Button>
      </form>
    </div>
  );
};

export default AddProjectTaskForm;
