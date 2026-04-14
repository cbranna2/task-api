import prisma from '../config/db.js';

// Get all tasks OR filter by completed status
export async function findAll(filter) {
  if (filter === undefined) {
    return prisma.task.findMany();
  }

  return prisma.task.findMany({
    where: {
      completed: filter,
    },
  });
}

// Create a new task
export async function create(data) {
  return prisma.task.create({
    data,
  });
}