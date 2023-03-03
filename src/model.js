const Todo = (function () {
  // a unique identifier is generated every time a todo item is made
  let id = 0;
  const createTodoItem = function (title, description, dueDate) {
    return {
      id: id++,
      title,
      description,
      dueDate,
    };
  };
  return { createTodoItem };
}());

function createProject(name) {
  // array containing the todo list items for a project category
  let todoList = [];
  // returns the todo list array
  const getTodo = function () {
    return todoList;
  };
  // returns the project's name
  const getName = function () {
    return name;
  };
  // adds a list item to the todoList
  const addListItem = function (listItem) {
    todoList.push(listItem);
  };
  // removes a list item based on its id
  const removeListItem = function (listItemId) {
    todoList = todoList.filter((item) => item.id !== listItemId);
  };
  // sort a list based on the dueDate of the tasks
  const sortList = function () {
    todoList.sort((a, b) => {
      if (a.dueDate.getTime() < b.dueDate.getTime()) {
        return -1;
      }
      if (a.dueDate.getTime() > b.dueDate.getTime()) {
        return 1;
      }

      return 0;
    });
  };
  return {
    todoList,
    getTodo,
    getName,
    addListItem,
    removeListItem,
    sortList,
  };
}

export { Todo, createProject };
