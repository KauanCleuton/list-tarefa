import React, { useState } from "react";
import { Form, Input, Button } from "./styles";

export function TaskForm ({ addTask }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask("");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Digite uma tarefa..."
      />
      <Button type="submit">Adicionar</Button>
    </Form>
  );
};

