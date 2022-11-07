import React, { ReactElement } from 'react';
import { AppRegistry, Platform } from 'react-native';
import { name as appName } from '../app.json';
import { Main } from './main';

export function App(): ReactElement {
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
