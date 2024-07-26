const { formList } = document.forms;
const { taskFirst, taskSecond } = formList.elements;
const selectEl = document.querySelector("select");
const getList = document.querySelector(".get-list");

formList.addEventListener("submit", (event) => {
  event.preventDefault();
  if (taskFirst.value === "" || taskSecond.value === "") {
    alert("Enter value");
    return;
  } else if (selectEl.value === "complexity") {
    alert("Enter complexity");
    return;
  }
  const list = document.createElement("div");
  list.classList.add("card");
  list.innerHTML = `
      <form class="checkboxEl">
  				<input type="checkbox">
  			<div><h2>Task</h2>
      <div>First task:<span class="task-value">${taskFirst.value}</span></div>
      <div>Second task:<span class="task-value">${taskFirst.value}</span></div>
  <div>Complexity:<span class="task-value">${selectEl.value}</span></div><button>Delete</button></div></form>
      `;
  getList.appendChild(list);

  const cardBtn = document.querySelector(".card button");
  const formTask = document.querySelector(".checkboxEl");
  const listTask = document.querySelector(".card");
  const checkBox = document.querySelector(".checkboxEl input");

  checkBox.addEventListener("click", () => {
    listTask.classList.toggle("checked");
  });

  formTask.addEventListener("submit", (event) => {
    event.preventDefault();
    getList.removeChild(listTask);
  });

  formList.reset();
});
