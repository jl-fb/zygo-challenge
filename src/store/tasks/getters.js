export function tasksTodo(state) {
  const tasks = {};
  Object.keys(state.tasks).filter(key => {
    let task = state.tasks[key];
    !task.completed ? (tasks[key] = task) : tasks[key];
  });
  return tasks;
}

export function tasksCompleted(state) {
  const tasks = {};
  Object.keys(state.tasks).filter(key => {
    let task = state.tasks[key];
    task.completed ? (tasks[key] = task) : tasks[key];
  });
  return tasks;
}
