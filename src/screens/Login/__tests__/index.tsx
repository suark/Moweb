import React from 'react';
import renderer from 'react-test-renderer';
import { Login } from '..';

it('should render correctly', () => {
  const component = renderer.create(<Login />);
  expect(component.toJSON()).toMatchSnapshot();
});
