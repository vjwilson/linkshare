import React from 'react';
import { shallow, mount } from 'enzyme';

import App from './App';
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

  it('should increment the specified favorite count', () => {
    const links = [
      {
        linkUrl: 'http://www.csszengarden.com',
        favorites: 10
      },
      {
        linkUrl: 'https://daringfireball.net',
        favorites: 15
      }
    ];
    const linkToTest = 1;
    const secondLinkCount = links[linkToTest].favorites;
    const props = {
      links: links
    };
    const wrapper = mount(<App {...props} />);

    const secondAddButton = wrapper.find(LinkItem).at(linkToTest);
    secondAddButton.find('.add-fave').simulate('click');

    const updatedLinks = wrapper.state('links');
    const secondLinkInState = updatedLinks[linkToTest];
    expect(secondLinkInState.favorites).toEqual(secondLinkCount + 1);
  });
});
