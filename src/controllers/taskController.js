import * as taskService from '../services/taskService.js';

export async function getTasks(req, res, next) {
  try {
    const tasks = await taskService.getAllTasks(req.query.completed);
    res.json(tasks);
  } catch (err) {
    if (err.message === 'INVALID_COMPLETED_QUERY') {
      return res.status(400).json({
        error: "completed must be 'true' or 'false'"
      });
    }

    next(err);
  }
}

export async function createTask(req, res, next) {
  const { title, completed } = req.body;

  const task = await taskService.createTask({
    title,
    completed
  });

  res.status(201).json(task);
}