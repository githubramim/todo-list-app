document.getElementById('add-btn').addEventListener('click', function() {
    const taskInput = document.getElementById('todo-input');
    const taskText = taskInput.value.trim();
    
    if (taskText !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            listItem.remove();
        });document.getElementById('add-btn').addEventListener('click', function() {
            const taskInput = document.getElementById('todo-input');
            const taskText = taskInput.value.trim();
            
            if (taskText !== '') {
                const listItem = document.createElement('li');
                listItem.textContent = taskText;
                
                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.addEventListener('click', function() {
                    listItem.remove();
                });
        
                listItem.appendChild(deleteButton);
                document.getElementById('todo-list').appendChild(listItem);
        
                taskInput.value = '';
            } else {
                alert('Please enter a task!');
            }
        });
        
        // Function to save the to-do list as a text file
        document.getElementById('save-btn').addEventListener('click', function() {
            const tasks = document.querySelectorAll('#todo-list li');
            let taskListText = '';
        
            tasks.forEach(task => {
                taskListText += task.firstChild.textContent + '\n';
            });
        
            const blob = new Blob([taskListText], { type: 'text/plain' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'todo-list.txt'; // Download file name
            link.click();
        });
        

        listItem.appendChild(deleteButton);
        document.getElementById('todo-list').appendChild(listItem);

        taskInput.value = '';
    } else {
        alert('Please enter a task!');
    }
});
