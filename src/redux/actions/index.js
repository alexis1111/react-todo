export const ADD_TASK = 'ADD_TASK';
export const COMPLETE_TASK = 'COMPLETE_TASK';
export const DELETE_TASK = 'DELETE_TASK';

export function addTask(payload) {
  return {
    type: ADD_TASK,
    payload
  }
}

export function completeTask(payload) {
  return {
    type: COMPLETE_TASK,
    payload
  }
}

export function deleteTask(payload) {
  return {
    type: DELETE_TASK,
    payload
  }
}