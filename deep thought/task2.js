fetch('project.json')
  .then(response => response.json())
  .then(data => {
    // Handle data as before
    const tasks = data.tasks;
    const taskContainer = document.getElementById('task-container');
    const task = tasks[0]; // Rendering the first task
    const taskTitle = document.createElement('h3');
    taskTitle.textContent = task.taskName;
    taskContainer.appendChild(taskTitle);

    task.assets.forEach(asset => {
      const assetContainer = createAssetContainer(asset);
      taskContainer.appendChild(assetContainer);
    });
  })
  .catch(error => console.error('Error fetching local JSON:', error));
