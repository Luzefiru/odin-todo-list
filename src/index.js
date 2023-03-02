function todoItem(title, description, dueDate, notes) {
  // a unique identifier is generated every time a todo item is made
  let id = 0;
  return {
    id: id++,
    title,
    description,
    dueDate,
    notes,
  };
}

function project(name) {
  // array containing the todo list items for a project category
  let todoList = [];
  // returns the todo list array
  const getTodo = function () {
    return todoList;
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
      if (a.dueDate < b.dueDate) {
        return -1;
      }
      if (a.dueDate > b.dueDate) {
        return 1;
      }

      return 0;
    });
  };
  return {
    getTodo,
    addListItem,
    removeListItem,
    sortList,
  };
}
