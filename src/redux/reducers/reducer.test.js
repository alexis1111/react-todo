import reducer from './index';
import * as ActionTypes from './../actions/index';

const defaultState = {
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

describe('root reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(defaultState);
  })

  it('should add a new task', () => {
    const expectedResult = {
      tasks: [...defaultState.tasks, {
        description: 'new task',
        completed: false
      }]
    };

    expect(reducer(defaultState, {
      type: ActionTypes.ADD_TASK,
      payload: 'new task'
    })).toEqual(expectedResult);
  });

  it('should complete a existing task', () => {
    const updatedState = {...defaultState};
    updatedState.tasks[0].completed = true;

    expect(reducer(defaultState, {
      type: ActionTypes.COMPLETE_TASK,
      payload: 0
    })).toEqual(updatedState);
  });

  it('should delete a task', () => {
    expect(reducer(defaultState, {
      type: ActionTypes.DELETE_TASK,
      payload: 0
    }).tasks).toHaveLength(2);
  });
})
