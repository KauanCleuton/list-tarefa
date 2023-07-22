import React from "react";
import  { TaskItem } from "../TaskItem/";
import { List } from "./styles";

export function TaskList ({ tasks, toggleTask, deleteTask }) {
  return (
    <List>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </List>
  );
};


