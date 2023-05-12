export async function saveTodo(data) {
  const response = await fetch("/api/addTodoToDB", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Data addition failed");
  }

  return await response.json();
}

export async function fetchAllTodos() {
  const res = await fetch("http://localhost:3000/api/viewTodoFromDB");
  const todos = await res.json();
  return todos;
}

// `paths` must be an array of strings or objects of shape { params: [key: string]: string }
export async function fetchAllIds() {
  const todos = await fetchAllTodos();
  const ids = todos.result.map((todo) => {
    return {
      params: {
        id: todo.id.toString(),
      },
    };
  });
  return ids;
}

export async function fetchTodoById(id) {
  const todos = await fetchAllTodos();
  const todo = todos.result.find((todo) => todo.id.toString() === id);
  return todo;
}
