document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById('create-task-form');
  const inputBox = document.getElementById('new-task-description');
  const toDo = document.getElementById('tasks');


  form.addEventListener('submit', function(event){
    event.preventDefault()
    
    const newTask = document.createElement('li');
    newTask.textContent = inputBox.value 
    toDo.appendChild(newTask);
  });
  
});
