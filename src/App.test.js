import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('App component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App/>);
    const text = wrapper.find('h3').text();
    expect(text).toContain('Todo app + React + Redux');
  });
});
