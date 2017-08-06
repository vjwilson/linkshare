import React from 'react';
import { shallow } from 'enzyme';

import LinkList from './LinkList';
import LinkItem from '../LinkItem/LinkItem';


describe('LinkList component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<LinkList />);
    expect(wrapper).toHaveLength(1);
  });

  it('should have the appropriate class', () => {
    const wrapper = shallow(<LinkList />);

    expect(wrapper).toHaveClassName('link-list');
  });

  it('should render an array of LinkItems', () => {
    const links = [
      {
        linkUrl: 'http://www.csszengarden.com',
        favorites: 10
      },
      {
        linkUrl: 'http://www.daringfireball.com',
        favorites: 15
      }
    ];

    const wrapper = shallow(<LinkList links={links} />);

    expect(wrapper.find(LinkItem)).toHaveLength(links.length);
  });
});
