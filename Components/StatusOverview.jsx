import React, { useEffect, useState } from "react";
import { StatusCard } from "./StatusCard";

export function StatusOverview({ tasks }) {
  const [statusCounts, setStatusCounts] = useState({
    completed: 0,
    inProgress: 0,
    notStarted: 0,
  });

  useEffect(() => {
    const total = tasks.length;
    if (total > 0) {
      const completed = tasks.filter((task) => task.status === "Completed").length;
      const inProgress = tasks.filter((task) => task.status === "In Progress").length;
      const notStarted = tasks.filter((task) => task.status === "Not Started").length;

      setStatusCounts({
        completed: Math.round((completed / total) * 100),
        inProgress: Math.round((inProgress / total) * 100),
        notStarted: Math.round((notStarted / total) * 100),
      });
    }
  }, [tasks]);

  return (
    <div className="grid grid-cols-3 gap-6">
      <StatusCard title="Completed" percentage={statusCounts.completed} color="bg-green-500" />
      <StatusCard title="In Progress" percentage={statusCounts.inProgress} color="bg-blue-500" />
      <StatusCard title="Not Started" percentage={statusCounts.notStarted} color="bg-red-500" />
    </div>
  );
}