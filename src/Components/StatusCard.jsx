import React from 'react'

export function StatusCard({ title, percentage, color }) {
    return (
      <div className="bg-white rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-medium">{title}</h3>
          <span className="text-2xl font-semibold">{percentage}%</span>
        </div>
        <div className="w-full h-2 bg-gray-100 rounded-full">
          <div
            className={`h-full rounded-full ${color}`}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    );
  }