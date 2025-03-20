import React from "react";
import CompletedTask from "./CompletedTask";

const CompletedTasks = () => {
  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold mb-4">Completed Tasks</h2>
      <div className="space-y-4">
        <CompletedTask
          title={"Walk the dog"}
          description={"Take the dog to the park and bring treats as well"}
          completedTime={"2 hours ago"}
        />

        <CompletedTask
          title={"Buy groceries"}
          description={"Buy eggs, milk, and bread"}
          completedTime={"3 hours ago"}
        />
      </div>
    </div>
  );
};

export default CompletedTasks;
