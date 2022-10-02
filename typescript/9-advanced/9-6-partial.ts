{
  type Todo = {
    title: string;
    description: string;
    label: string;
    priority: "high" | "low";
  };

  function updateTodo(todo: Todo, fieldsToupdate: Partial<Todo>): Todo {
    return { ...todo, ...fieldsToupdate };
  }

  const todo: Todo = {
    title: "learn TypeScript",
    description: "stduy hard",
    label: "study",
    priority: "high",
  };

  const updated = updateTodo(todo, { title: "learned TypeScript" });
  console.log(updated);
}
