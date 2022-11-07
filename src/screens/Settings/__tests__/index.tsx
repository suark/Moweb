import React from 'react';
import renderer from 'react-test-renderer';
import { Settings } from '..';

it('should render correctly', () => {
  const component = renderer.create(<Settings />);
  expect(component.toJSON()).toMatchSnapshot();
});
