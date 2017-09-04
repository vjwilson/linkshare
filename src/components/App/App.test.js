import React from 'react';
import { shallow, mount } from 'enzyme';

import { App } from './App';
import AddLinkButton from '../AddLinkButton/AddLinkButton';
import LinkList from '../LinkList/LinkList';

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

    const main = wrapper.find('main');

    expect(main).toHaveClassName('app-intro');
  });

  it('renders a LinkList component in its main section', () => {
    const wrapper = shallow(<App />);

    const main = wrapper.find('main');
    const linkList = wrapper.find(LinkList)

    expect(linkList).toHaveLength(1);
  });

  it('renders a AddLinkButton component in its main section', () => {
    const wrapper = shallow(<App />);

    const main = wrapper.find('main');
    const addLinkButton = wrapper.find(AddLinkButton)

    expect(addLinkButton).toHaveLength(1);
  });

  it('renders a footer', () => {
    const wrapper = shallow(<App />);

    const header = wrapper.find('footer');

    expect(header).toHaveClassName('app-footer');
  });
});
