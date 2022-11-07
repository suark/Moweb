import React from 'react';
import renderer from 'react-test-renderer';
import { Home } from '..';
import { mockNavigation } from '../../../mocks/Setup';

it('should render correctly', () => {
  const component = renderer.create(<Home />);
  expect(component.toJSON()).toMatchSnapshot();
});

it('navigates to settings', () => {
  const component = renderer.create(<Home />);
  const button = component.root.findByProps({ testID: 'settings' });
  button.instance.props.onPress();
  expect(mockNavigation.navigate).toBeCalledWith('Settings');
});
