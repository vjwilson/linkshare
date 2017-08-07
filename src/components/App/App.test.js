import React from 'react';
import { shallow, mount } from 'enzyme';

import { App } from './App';
import LinkItem from '../LinkItem/LinkItem';

describe('App component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toBeTruthy();
  });

  it('renders a header with the appropriate class', () => {
    const wrapper = shallow(<App />);

    const header = wrapper.find('header');

    expect(header).toHaveClassName('app-header');
  });

  it('renders a main element', () => {
    const wrapper = shallow(<App />);

    const header = wrapper.find('main');

    expect(header).toHaveClassName('app-intro');
  });

  it('renders a footer', () => {
    const wrapper = shallow(<App />);

    const header = wrapper.find('footer');

    expect(header).toHaveClassName('app-footer');
  });
});
