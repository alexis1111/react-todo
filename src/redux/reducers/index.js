import { ADD_TASK, COMPLETE_TASK, DELETE_TASK } from './../actions/index';

const initialState = {
  tasks: [
    {
      description: 'Watch Voyager again',
      completed: false
    },
    {
      description: 'Watch Enterprise again',
      completed: true
    },
    {
      description: 'Forget that Discovery exists',
      completed: false
    }
  ]
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      const newTask = {
        description: action.payload,
        completed: false
      };

      return {
        ...state,
        tasks: [...state.tasks, newTask]
      };

    case COMPLETE_TASK:
      const task = state.tasks[action.payload];

      const updatedTask = Object.assign(task, {
        completed: true
      });
      const taskList = [...state.tasks];
      taskList[action.payload] = updatedTask;

      return {
        ...state,
        tasks: taskList
      };

    case DELETE_TASK:
      const updatedTasks = [...state.tasks];

      updatedTasks.splice(action.payload, 1);

      return {
        ...state,
        tasks: updatedTasks
      };

    default:
      return state;
  }
}

export default rootReducer;
