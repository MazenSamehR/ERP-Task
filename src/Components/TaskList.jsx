import React, { useEffect, useState } from 'react';
import { Plus } from 'lucide-react';
import { Task as TaskComponent } from './Task';
import { TaskModal } from './TaskModal';
import axios from 'axios';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(res => {
        setTasks(res.data);
      })
      .catch(err => console.log(err));
  }, []);


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const handleAddTask = (newTask) => {
    const task = {
      id: Math.random().toString(36).substr(2, 9),
      date: `Created on: ${new Date().toLocaleDateString()}`,
      ...newTask
    };
    setTasks([...tasks, task]);
    setIsModalOpen(false);
  };

  const handleUpdateTask = (updatedTask) => {
    setTasks(tasks.map(task => 
      task.id === updatedTask.id ? updatedTask : task
    ));
    setIsModalOpen(false);
    setEditingTask(null);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleEditClick = (task) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };

  const updateTask = (updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.some((task) => task.id === updatedTask.id)
        ? prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
        : [...prevTasks, updatedTask]
    );
  };

  return (
    <div className="bg-white rounded-xl p-6 mb-8">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold">To-Do</h2>
          <span className="text-gray-500">• Today</span>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 text-[#FF6B6B] hover:bg-red-50 px-3 py-1.5 rounded-lg transition-colors"
        >
          <Plus size={18} />
          Add task
        </button>
      </div>

      <div className="space-y-4">
        {tasks.map(task => (
          <TaskComponent
            key={task.id}
            {...task}
            onEdit={() => handleEditClick(task)}
            onDelete={() => handleDeleteTask(task.id)}
          />
        ))}
      </div>

      <TaskModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingTask(null);
        }}
        onSubmit={editingTask ? handleUpdateTask : handleAddTask}
        task={editingTask}
        onUpdateTask = {updateTask}
      />
    </div>
  );
}

export default TaskList;