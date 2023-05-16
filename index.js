/*
input to add todos
  add even lister when enter is press create a new toto item
    get the value of the input
    create a list item with value in it and an id
    append the item to the list

  Remove items
    get the id of the list itemen
    delete it
*/

let count = 0;

const input = document.createElement("input");
input.id = "todoInput";
input.type = "text";

const list = document.createElement("ul");
list.id = "todoList";

document.addEventListener("DOMContentLoaded", function () {
  document.body.appendChild(input);
  document.body.appendChild(list);
});

input.addEventListener("keypress", (event) => {
  if (event.key === "Enter" && input.value) {
    const todoItem = document.createElement("li");
    todoItem.id = count;
    count++;

    const todoParagraph = document.createElement("span");
    todoParagraph.innerHTML = input.value;

    const button = document.createElement("button");
    button.id = "todoButton";
    button.innerHTML = "Delete";
    button.id = "todoComplete";

    const complete = document.createElement("input");
    complete.type = "checkbox";
    complete.checked = false;

    todoItem.appendChild(complete);
    todoItem.appendChild(todoParagraph);
    todoItem.appendChild(button);

    list.appendChild(todoItem);

    complete.addEventListener("change", (event) => {
      const currCheckBox = event.target;
      // const listItem = currCheckBox.parentNode;

      if (currCheckBox.checked) {
        todoItem.style.textDecoration = "line-through";
        todoItem.style.color = "gray";
      } else {
        todoItem.style.textDecoration = "none";
        todoItem.style.color = "inherit";
      }
    });

    button.addEventListener("click", () => {
      const arrayOfTodos = Array.from(list.children);
      list.removeChild(todoItem);
    });

    input.value = "";
  }
});
