import * as taskRepository from '../repositories/taskRepo.js';

// Parse and validate completed query param
function parseCompletedQuery(completed) {
  if (completed === undefined) return undefined;

  if (completed === 'true') return true;
  if (completed === 'false') return false;

  throw new Error('INVALID_COMPLETED_QUERY');
}

// Get all tasks with optional filtering
export async function getAllTasks(completed) {
  const filter = parseCompletedQuery(completed);
  return taskRepository.findAll(filter);
}

// Create a new task
export async function createTask(newTask) {
  return taskRepository.create(newTask);
}