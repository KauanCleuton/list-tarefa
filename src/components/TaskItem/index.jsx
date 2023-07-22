import React from "react";
import { ListItem, TaskTitle, DeleteButton } from "./styles";

export function TaskItem ({ task, toggleTask, deleteTask }) {
  return (
    <ListItem>
      <TaskTitle
        completed={task.completed}
        onClick={() => toggleTask(task.id)}
      >
        {task.title}
      </TaskTitle>
      <DeleteButton onClick={() => deleteTask(task.id)}>Excluir</DeleteButton>
    </ListItem>
  );
};


