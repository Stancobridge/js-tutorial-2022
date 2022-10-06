let todos = [
  {
    title: "First todo",
    done: true,
    date: "12/10/2022",
  },
  {
    title: "Second todo",
    done: false,
    date: "14/10/2022",
  },
  {
    title: "Third todo",
    done: false,
    date: "14/10/2022",
  },
];

function addTodo(todo) {
  // make sure todo with same title doesn't exist
  for (let oldTodo of todos) {
    if (oldTodo.title === todo.title) {
      console.log("Todo with same title already added");
      return false;
    }
  }

  // check if todo matches schema

  // add to todo list
  todos.push(todo);

  return todo;
}

function getTodo(title) {
  for (let oldTodo of todos) {
    if (oldTodo.title.toLocaleLowerCase() === title.toLocaleLowerCase()) {
      return oldTodo;
    }
  }
  console.log("todo not found");
  return false;
}

function updateTodo(title, newTodo) {
  if (!newTodo) {
    console.log("Enter new todo info");
    return false;
  }
  todos = todos.map((oldTodo) => {
    if (oldTodo.title.toLocaleLowerCase() === title.toLocaleLowerCase()) {
      if (newTodo.title) {
        oldTodo.title = newTodo.title;
      }

      if (newTodo.done === true) {
        oldTodo.done = newTodo.done;
      }

      if (newTodo.done === false) {
        oldTodo.done = newTodo.done;
      }

      if (newTodo.date) {
        oldTodo.date = newTodo.date;
      }
    }

    return oldTodo;
  });
}

function deleteTodo(title) {
  todos = todos.filter((oldTodo) => {
    if (oldTodo.title.toLocaleLowerCase() !== title.toLocaleLowerCase()) {
      return true;
    }
  });
}

console.log(todos);

addTodo({
  title: "Fourth todo",
  done: false,
  date: "14/10/2022",
});

console.log(getTodo("Second Todo"));
updateTodo("First todo", { done: false });
deleteTodo("Second todo");
console.log(todos);
