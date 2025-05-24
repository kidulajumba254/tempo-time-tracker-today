
export interface ProjectTask {
  id: string;
  title: string;
  description?: string;
  phase: ProjectPhase;
  assignee: string;
  deadline: string;
  priority: Priority;
  status: TaskStatus;
  timeEstimate: number; // in hours
  dependencies?: string[]; // IDs of tasks this depends on
}

export interface Project {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  status: ProjectStatus;
  tasks: ProjectTask[];
  teamMembers: TeamMember[];
}

export interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar?: string;
}

export type ProjectPhase = 'research' | 'planning' | 'design' | 'development' | 'testing' | 'deployment' | 'post-launch';
export type TaskStatus = 'not-started' | 'in-progress' | 'completed' | 'blocked';
export type ProjectStatus = 'planning' | 'active' | 'on-hold' | 'completed';
export type Priority = 'low' | 'medium' | 'high';

export const phaseConfig = {
  research: {
    label: 'Research',
    description: 'Market analysis and feasibility studies',
    color: 'bg-purple-500',
    lightColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    textColor: 'text-purple-700',
  },
  planning: {
    label: 'Planning',
    description: 'Project scope and resource allocation',
    color: 'bg-blue-500',
    lightColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    textColor: 'text-blue-700',
  },
  design: {
    label: 'Design',
    description: 'UI/UX and system architecture',
    color: 'bg-pink-500',
    lightColor: 'bg-pink-50',
    borderColor: 'border-pink-200',
    textColor: 'text-pink-700',
  },
  development: {
    label: 'Development',
    description: 'Backend and frontend implementation',
    color: 'bg-orange-500',
    lightColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
    textColor: 'text-orange-700',
  },
  testing: {
    label: 'Testing',
    description: 'QA and user acceptance testing',
    color: 'bg-yellow-500',
    lightColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200',
    textColor: 'text-yellow-700',
  },
  deployment: {
    label: 'Deployment',
    description: 'Production setup and go-live',
    color: 'bg-green-500',
    lightColor: 'bg-green-50',
    borderColor: 'border-green-200',
    textColor: 'text-green-700',
  },
  'post-launch': {
    label: 'Post-Launch',
    description: 'Maintenance and optimization',
    color: 'bg-gray-500',
    lightColor: 'bg-gray-50',
    borderColor: 'border-gray-200',
    textColor: 'text-gray-700',
  },
};

export const statusConfig = {
  'not-started': {
    label: 'Not Started',
    color: 'bg-gray-500',
    textColor: 'text-gray-700',
  },
  'in-progress': {
    label: 'In Progress',
    color: 'bg-blue-500',
    textColor: 'text-blue-700',
  },
  completed: {
    label: 'Completed',
    color: 'bg-green-500',
    textColor: 'text-green-700',
  },
  blocked: {
    label: 'Blocked',
    color: 'bg-red-500',
    textColor: 'text-red-700',
  },
};
