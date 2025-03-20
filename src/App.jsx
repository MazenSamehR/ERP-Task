import React from "react";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import TaskList from "./Components/TaskList";
import { StatusOverview } from "./Components/StatusOverview";
import CompletedTasks from "./Components/CompletedTasks";
import Dashboard from "./Components/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Help from "./Components/Help";
const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100 flex">
          <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
