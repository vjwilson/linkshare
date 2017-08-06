import React from 'react';
import { shallow } from 'enzyme';

import LinkItem from './LinkItem';


describe('LinkItem component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<LinkItem />);
    expect(wrapper).toHaveLength(1);
  });

  it('should have the appropriate class', () => {
    const wrapper = shallow(<LinkItem />);

    expect(wrapper).toHaveClassName('link-item');
  });

  it('should have favorites child', () => {
    const wrapper = shallow(<LinkItem />);
    const children = wrapper.children();
    const firstChild = children.first();

    expect(firstChild).toHaveClassName('link-item-faves');
  });

  it('should have info child', () => {
    const wrapper = shallow(<LinkItem />);
    const children = wrapper.children();
    const lastChild = children.last();

    expect(lastChild).toHaveClassName('link-item-info');
  });

  it('should render its favorites prop', () => {
    const wrapper = shallow(<LinkItem favoriteCount="12" />);

    const favorites = wrapper.find('.fave-count');

    expect(favorites.text()).toEqual('12');
  });

  it('should render 0 for favorites if no prop is given', () => {
    const wrapper = shallow(<LinkItem />);

    const favorites = wrapper.find('.fave-count');

    expect(favorites.text()).toEqual('0');
  });

  it('should render its link prop', () => {
    const wrapper = shallow(<LinkItem linkUrl="http://www.daringfireball.com" />);

    const linkInfo = wrapper.find('.link-item-info');

    expect(linkInfo.text()).toEqual('http://www.daringfireball.com');
  });

  it('should render its link prop as a link', () => {
    const wrapper = shallow(<LinkItem linkUrl="http://www.daringfireball.com" />);

    const linkAnchor = wrapper.find('.link-item-link');

    expect(linkAnchor.prop('href')).toEqual('http://www.daringfireball.com');
  });

  it('should have an Add button in its favorites child', () => {
    const wrapper = shallow(<LinkItem />);

    const favoritesChild = wrapper.find('.link-item-faves');
    const addFaveButton = favoritesChild.find('button');

    expect(addFaveButton).toHaveLength(1);
    expect(addFaveButton).toHaveClassName('add-fave');
  });

  it('should call the action prop when the Add button is clicked', () => {
    const mock = jest.fn();
    const props = {
      favoriteCount: 11,
      linkUrl: 'https://alistapart.com',
      action: mock
    }
    const wrapper = shallow(<LinkItem {...props} />);

    const addFaveButton = wrapper.find('.add-fave');
    addFaveButton.simulate('click');

    expect(mock).toHaveBeenCalled();
  });
});
