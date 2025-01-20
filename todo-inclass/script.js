
let index = 1;
let todos = []
function addTodo() {


  todos.push({
    title: document.querySelector("input").value,
  })

  render();

}

function deleteLastTodo() {
  todos.splice(todos.length - 1, 1) /
  render()
}

function deleteFirstTodo() {
  todos.splice(0, 1);
  render();
}

function deleteTodo(index) {
  todos.splice(index, 1);
  render();
}





function createTodoComponent(todo, index) {
  const div = document.createElement("div");
  const h1 = document.createElement("h1");
  const button = document.createElement("button");
  button.textContent = "delete";
  button.setAttribute("onclick", "deleteTodo(" + index + ")")

  h1.innerHTML = todo.title;

  div.append(h1);
  div.append(button);

  return div;
}


function render() {
  document.querySelector("#todo_list").innerHTML = "";
  for (let i = 0; i < todos.length; i++) {
    const element = createTodoComponent(todos[i], i);
    document.querySelector("#todo_list").appendChild(element);
  }
}

index++;