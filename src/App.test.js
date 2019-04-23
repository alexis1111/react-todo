import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

fdescribe('App component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App/>);
    const text = wrapper.find('h3').text();
    console.log(text);
    expect(text).toContain('Todo app + React + Redux');
  });
});
