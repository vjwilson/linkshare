import React from 'react';
import { shallow } from 'enzyme';

import AddLinkButton from './AddLinkButton';

describe('AddLinkButton component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<AddLinkButton />);

    expect(wrapper).toHaveLength(1);
  });

  it('contains the text Add Link', () => {
    const wrapper = shallow(<AddLinkButton />);

    expect(wrapper.text()).toMatch(/Add Link/);
  });


  it('should have a class of .add-button', () => {
    const wrapper = shallow(<AddLinkButton />);

    expect(wrapper).toHaveClassName('add-button');
  });

  it('should call a function to display the Add Link dialog', () => {
    const mock = jest.fn();
    const props = {
      openDialog: mock
    };
    const wrapper = shallow(<AddLinkButton {...props} />);

    wrapper.simulate('click');

    expect(mock).toHaveBeenCalled();
  });
});
