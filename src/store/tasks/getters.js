export function tasksTodo(state, getters) {
  const tasks = {};
  let tasksFiltered = getters.tasksFiltered;
  Object.keys(tasksFiltered).filter(key => {
    let task = tasksFiltered[key];
    !task.completed ? (tasks[key] = task) : tasks[key];
  });
  return tasks;
}

export function tasksCompleted(state, getters) {
  const tasks = {};
  let tasksFiltered = getters.tasksFiltered;
  Object.keys(tasksFiltered).filter(key => {
    let task = tasksFiltered[key];
    task.completed ? (tasks[key] = task) : tasks[key];
  });
  return tasks;
}
export function tasksFiltered(state, getters) {
  let tasksSorted = getters.sortedTasks;
  if (state.search) {
    let tasksFiltered = {};

    Object.keys(tasksSorted).forEach(key => {
      let task = tasksSorted[key];
      let titleLowerCase = task.title.toLowerCase();
      let searchLowerCase = state.search.toLowerCase();
      titleLowerCase.includes(searchLowerCase)
        ? (tasksFiltered[key] = task)
        : tasksFiltered;
    });

    return tasksFiltered;
  }
  return tasksSorted;
}
export function sortedTasks(state) {
  let tasksSorted = {};

  let keysOrdered = Object.keys(state.tasks);
  const ordered = keysOrdered.sort((a, b) => {
    let taskA = state.tasks[a][state.sort].toLowerCase();
    let taskB = state.tasks[b][state.sort].toLowerCase();
    if (taskA > taskB) return 1;
    else if (taskA < taskB) return -1;
    else return 0;
  });

  ordered.forEach(key => {
    tasksSorted[key] = state.tasks[key];
  });
  return tasksSorted;
}
