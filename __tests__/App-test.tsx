import React from 'react';
import 'react-native';
import App from '..';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('the base app renders correctly', () => {
  renderer.create(<App />);
});
