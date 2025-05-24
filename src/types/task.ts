
export interface Task {
  id: string;
  title: string;
  description?: string;
  priority: Priority;
  timeEstimate: number; // in minutes
  dueDate: string;
  completed: boolean;
}

export type Priority = 'urgent' | 'important' | 'long-term';

export type TimeFilter = 'today' | 'week' | 'month';

export const priorityConfig = {
  urgent: {
    label: 'Urgent',
    description: 'Must complete today',
    color: 'bg-red-500',
    lightColor: 'bg-red-50',
    borderColor: 'border-red-200',
    textColor: 'text-red-700',
  },
  important: {
    label: 'Important',
    description: 'Next 2-3 days',
    color: 'bg-yellow-500',
    lightColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200',
    textColor: 'text-yellow-700',
  },
  'long-term': {
    label: 'Long-term',
    description: 'Upcoming deadlines',
    color: 'bg-green-500',
    lightColor: 'bg-green-50',
    borderColor: 'border-green-200',
    textColor: 'text-green-700',
  },
};
