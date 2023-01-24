import React, { ReactElement } from 'react';
import { AppRegistry, Platform } from 'react-native';
import { name as appName } from '../app.json';
import StoryBook from '../storybook';
import { Main } from './main';

const storyBookMode = true;

export function App(): ReactElement {
  if (storyBookMode) {
    return <StoryBook />;
  }
  return <Main />;
}

AppRegistry.registerComponent(appName, () => App);

if (Platform.OS === 'web') {
  if (module.hot) {
    module.hot.accept();
  }
  AppRegistry.runApplication(appName, {
    initialProps: {},
    rootTag: document.getElementById('app-root'),
  });
}
