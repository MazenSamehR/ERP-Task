import React, { useState } from "react";
import Header from "./Header";
import TaskList from "./TaskList";
import { StatusOverview } from "./StatusOverview";
import CompletedTasks from "./CompletedTasks";

const Dashboard = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1", status: "Not Started" },
    { id: 2, title: "Task 2", status: "In Progress" },
    { id: 3, title: "Task 3", status: "Completed" },
  ]);

  const updateTask = (updatedTask) => {
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };
  return (
    <div className="flex-1 p-8">
      <Header />
      <TaskList />
      <StatusOverview tasks={tasks}/>
      <CompletedTasks />
    </div>
  );
};

export default Dashboard;
