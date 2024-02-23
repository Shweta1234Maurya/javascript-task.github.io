document.addEventListener('DOMContentLoaded',async function () {
    const todoList = document.getElementById('todo-list');
  
    await fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch tasks');
        }
        return response.json();
      })
      .then(data => {
        data.forEach(task => {
          const listItem = document.createElement('li');
          listItem.innerHTML = `${task.title} <span class= "badge ${task.completed ?'completed':'incomplete'}"> ${task.completed ?'Completed':'Incomplete' } </span>`;
          
          todoList.appendChild(listItem);
          

        });
      })
      .catch(error => {
        console.error('Error fetching tasks:', error.message);
        todoList.innerHTML = '<li>Error fetching tasks</li>';
      });
  });
  