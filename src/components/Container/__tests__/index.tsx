import React from 'react';
import renderer from 'react-test-renderer';
import { Container } from '..';
import { Text } from '../../Text';

it('should render correctly', () => {
  const component = renderer.create(
    <Container testID='wrapper'>
      <Text>hello</Text>
    </Container>,
  );

  expect(component.toJSON()).toMatchSnapshot();
});
