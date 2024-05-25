document.addEventListener('DOMContentLoaded', function() {
    const newitem = document.getElementById('new-task');
    const existingitem = document.getElementById('tasks');

    console.log(newitem);
    function addTask() {
        console.log("addTask function called");
        const taskText = newitem.value.trim();
        if (taskText === '') {
            alert('Please enter a task');
            return;
        }
    
        const additem = document.createElement('li');
        additem.textContent = taskText ;
        existingitem.appendChild(additem);
   newitem.value = '';

   const removeButton = document.createElement('span');
   removeButton.textContent = 'Remove';
    removeButton.classList.add('remove');
    removeButton.onclick = function() {
        existingitem.removeChild(additem);
    };
    additem.appendChild(removeButton);

    }
  
    document.querySelector('button').addEventListener('click', addTask);
});
