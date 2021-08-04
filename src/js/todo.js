const todoList = document.querySelector("#todoList");
todoList.addEventListener('click', (event) => {
    console.log(event.target.tagName)
})

const addTodo = document.querySelector("#addTodo");
const inputTodo = document.querySelector("#inputTodo");


addTodo.addEventListener('click', () => {
    const li = document.createElement('li');
    const div = document.createElement('div');
    const button = document.createElement('button');


    li.textContent += inputTodo.value;
    if (inputTodo.value == '') return;

    todoList.appendChild(li).innerHTML = `${inputTodo.value}<div><button></button><button></button></div>`;

    inputTodo.value = '';

    inputTodo.focus();
})


