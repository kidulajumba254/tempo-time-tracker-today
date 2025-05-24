
import React from 'react';
import { TimeFilter as TimeFilterType } from '../types/task';
import { Calendar, Clock, CalendarDays } from 'lucide-react';

interface TimeFilterProps {
  currentFilter: TimeFilterType;
  onFilterChange: (filter: TimeFilterType) => void;
}

const TimeFilter: React.FC<TimeFilterProps> = ({ currentFilter, onFilterChange }) => {
  const filters = [
    { value: 'today' as TimeFilterType, label: 'Today', icon: Clock },
    { value: 'week' as TimeFilterType, label: 'This Week', icon: Calendar },
    { value: 'month' as TimeFilterType, label: 'This Month', icon: CalendarDays },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-2 flex space-x-1">
      {filters.map(({ value, label, icon: Icon }) => (
        <button
          key={value}
          onClick={() => onFilterChange(value)}
          className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-200 ${
            currentFilter === value
              ? 'bg-blue-600 text-white shadow-md'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          <Icon className="h-4 w-4" />
          <span className="font-medium">{label}</span>
        </button>
      ))}
    </div>
  );
};

export default TimeFilter;
