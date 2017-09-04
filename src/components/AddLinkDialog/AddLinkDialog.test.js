import React from 'react';
import { shallow } from 'enzyme';

import AddLinkDialog from './AddLinkDialog';

describe('AddLinkDialog component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<AddLinkDialog />);

    expect(wrapper).toHaveLength(1);
  });

  it('should have a class of .add-link-dialog', () => {
    const wrapper = shallow(<AddLinkDialog />);

    expect(wrapper).toHaveClassName('add-link-dialog');
  });

  it('should have a input element', () => {
    const wrapper = shallow(<AddLinkDialog />);

    expect(wrapper.find('input')).toHaveLength(1);
  });
});