import React from 'react';
import { shallow } from 'enzyme';

import { ListComponent } from './List';
import Item from './Item/Item';

describe('List component', () => {
  let wrapper;
  let defaultProps = [
      {
        description: 'test',
        completed: false
      }
    ];
  

  beforeEach(() => {
    wrapper = shallow(<ListComponent tasks={defaultProps} />);
  });

  it('should render component with tasks', () => {
    wrapper.setProps({
      tasks: [
        {
          description: 'test',
          completed: false
        }
      ]
    });

    expect(wrapper.find(Item)).toHaveLength(1);
    expect(wrapper.find('.list-unstyled')).toBeDefined();
  });

  it('should dispatch the complete task action', () => {
    const completeTaskMock = jest.fn();
    wrapper.setProps({
      completeTask: completeTaskMock
    });

    wrapper.find(Item).prop('completeTask')('complete');

    expect(completeTaskMock.mock.calls.length).toBe(1);
  });

  it('should dispatch the delete task action', () => {
    const deleteTaskMock = jest.fn();
    wrapper.setProps({
      deleteTask: deleteTaskMock
    });

    wrapper.find(Item).prop('deleteTask')('delete');

    expect(deleteTaskMock.mock.calls.length).toBe(1);
  });
});