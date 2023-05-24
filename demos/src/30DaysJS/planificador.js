function createTaskPlanner() {
  let tasks = []

  function addTask(task) {
    const newTask = { ...task, completed: false }
    tasks.push(newTask)
  }
  function removeTask(value) {
    let currentTasks = []

    if (typeof value === 'number') {
      currentTasks = tasks.filter((task) => {
        return task.id !== value
      })
      tasks = currentTasks
    }
    if (typeof value === 'string') {
      currentTasks = tasks.filter((task) => {
        return task.name !== value
      })
      tasks = currentTasks
    }

    //  recibe el id o nombre de la tarea y la elimina del array de tareas.
  }
  function getTasks() {
    // Devuelve el array de tareas.
    console.log(tasks)
    return tasks
  }
  function getPendingTasks() {
    // Devuelve solo las tareas pendientes.
    let currentTasks = []
    currentTasks = tasks.filter((task) => {
      return task.completed === false
    })
    return currentTasks
  }
  function getCompletedTasks() {
    // Devuelve solo las tareas completadas.
    let currentTasks = []
    currentTasks = tasks.filter((task) => {
      return task.completed === true
    })
    return currentTasks
  }
  function markTaskAsCompleted(value) {
    // Recibe el id o nombre de la tarea y la marca como completada.
    let index

    if (typeof value === 'number') {
      index = tasks.findIndex((task) => {
        return task.id === value
      })
    }

    if (typeof value === 'string') {
      index = tasks.findIndex((task) => {
        return task.name === value
      })
    }

    tasks[index].completed = true
  }

  function getSortedTasksByPriority() {
    // Devuelve una copia de las tareas ordenadas según su prioridad(3: poco urgente, 2: urgente, 1: muy urgente), sin modificar la lista de tareas original.
    const sortedTasks = [...tasks].sort((a, b) => a.priority - b.priority)
    // Al final lo retornamos
    return sortedTasks
  }
  function filterTasksByTag(tag) {
    // Filtra las tareas por una etiqueta específica.
    return tasks.filter((task) => task.tags.includes(tag))
  }
  function updateTask(taskId, updates) {
    // Buscar la tarea correspondiente con el id especificado y actualizar sus propiedades con las especificadas en el objeto updates.

    const index = tasks.findIndex((task) => task.id === taskId)
    // agregamos las propiedades extras destructurando ambos objetos
    tasks[index] = { ...tasks[index], ...updates }
  }

  return {
    addTask,
    removeTask,
    getTasks,
    getPendingTasks,
    getCompletedTasks,
    markTaskAsCompleted,
    getSortedTasksByPriority,
    filterTasksByTag,
    updateTask
  }
}

const planner = createTaskPlanner()
planner.addTask({ id: 1, name: 'tarea1', priority: 'hight', tags: 'Test' })
planner.addTask({ id: 2, name: 'tarea2', priority: 'low', tags: 'Test' })
planner.addTask({ id: 3, name: 'tarea3', priority: 'low', tags: 'Test' })

// planner.removeTask('tarea1')
planner.markTaskAsCompleted(3)
planner.getTasks()
