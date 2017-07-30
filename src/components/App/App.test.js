import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';

import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders a header with the appropriate class', () => {
  const wrapper = ReactTestUtils.renderIntoDocument(<App />);

  const header = ReactTestUtils.scryRenderedDOMComponentsWithTag(wrapper, 'header');
  const headerWithClass = ReactTestUtils.scryRenderedDOMComponentsWithClass(wrapper, 'app-header');

  expect(header.length).toEqual(1);
  expect(headerWithClass.length).toEqual(1);
  expect(header).toEqual(headerWithClass);
});

it('renders a main element', () => {
  const wrapper = ReactTestUtils.renderIntoDocument(<App />);

  const main = ReactTestUtils.findRenderedDOMComponentWithTag(wrapper, 'main');
});

it('renders a footer', () => {
  const wrapper = ReactTestUtils.renderIntoDocument(<App />);

  const footer = ReactTestUtils.scryRenderedDOMComponentsWithTag(wrapper, 'footer');

  expect(footer.length).toEqual(1);
});
