import React from "react";
import { CheckCircle2 } from "lucide-react";

const CompletedTask = ({ title, description, completedTime }) => {
  return (
    <div className="bg-white rounded-lg p-4 flex items-start gap-3">
      <CheckCircle2 size={20} className="text-green-500 mt-1" />
      <div className="flex-1">
        <h3 className="font-medium">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
        <span className="text-gray-400 text-xs">Completed {completedTime}</span>
      </div>
    </div>
  );
};

export default CompletedTask;
