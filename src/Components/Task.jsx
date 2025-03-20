import React from 'react';
import { Pencil, Trash2 } from 'lucide-react';

export function Task({ title, description = 'test description', priority = 'Moderate', status = 'Not Started', date, onEdit, onDelete }) {
  const statusColor = {
    'Completed': 'text-green-500',
    'In Progress': 'text-blue-500',
    'Not Started': 'text-red-500'
  }[status];

  return (
    <div className="border border-gray-100 rounded-lg p-4">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-medium">{title}</h3>
        <div className="flex gap-2">
          <button 
            onClick={onEdit}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <Pencil size={16} />
          </button>
          <button 
            onClick={onDelete}
            className="text-gray-400 hover:text-red-500 transition-colors"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
      <p className="text-gray-600 text-sm mb-3">{description}</p>
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-4">
          <span className="text-gray-500">Priority: {priority}</span>
          <span className={statusColor}>Status: {status}</span>
        </div>
        <span className="text-gray-400 text-xs">{date}</span>
      </div>
    </div>
  );
}