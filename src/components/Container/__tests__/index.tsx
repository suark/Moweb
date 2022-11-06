import React from 'react';
import { Text } from 'react-native';
import renderer from 'react-test-renderer';
import { Container } from '..';

it('should render correctly', () => {
  const component = renderer.create(
    <Container testID='wrapper'>
      <Text>hello</Text>
    </Container>,
  );

  expect(component.toJSON()).toMatchSnapshot();
});
