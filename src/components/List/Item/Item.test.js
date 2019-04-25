import React from 'react';
import { shallow } from 'enzyme';

import Item from './Item';

describe('Item component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Item />);
  });

  it('should render component when task is incompleted', () => {
    wrapper.setProps({
      id: 1
    });

    expect(wrapper.find('.custom-checkbox')).toBeDefined();
    expect(wrapper.find('.custom-checkbox')).toHaveLength(1);
    expect(wrapper.find('input.custom-control-input').props().id).toEqual(1);
    expect(wrapper.find('label.custom-control-label')).toBeDefined();
  });

  it('should render component when task is completed', () => {
    wrapper.setProps({
      completed: true
    });

    expect(wrapper.find('.task-item--completed')).toBeDefined();
    expect(wrapper.find('.task-item--completed')).toHaveLength(1);
    expect(wrapper.contains(<button type="button" className="task-item__close-btn"> &#x2715;</button>)).toEqual(true);
  });
});
