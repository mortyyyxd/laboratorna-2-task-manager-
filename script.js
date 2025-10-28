console.log("Task Manager initialized");
echo "const input = document.getElementById('task-input');
const addBtn = document.getElementById('add-task');
const list = document.getElementById('task-list');

let tasks = [];

addBtn.addEventListener('click', () => {
  const text = input.value.trim();
  if (text) {
    tasks.push({ id: Date.now(), text });
    render();
    input.value = '';
  }
});

function render() {
  list.innerHTML = '';
  tasks.forEach(t => {
    const li = document.createElement('li');
    li.textContent = t.text;
    const del = document.createElement('button');
    del.textContent = '×';
    del.onclick = () => {
      tasks = tasks.filter(x => x.id !== t.id);
      render();
    };
    li.appendChild(del);
    list.appendChild(li);
  });
}" > script.js