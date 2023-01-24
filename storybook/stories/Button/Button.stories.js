import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Button } from '../../../src/components/Button';
import CenterView from '../CenterView';

storiesOf('Button', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('with text', () => (
    <Button
      title='Some Text'
      onPress={action('clicked-someText')}
      testID='someText'
    />
  ))
  .add('with some emoji', () => (
    <Button
      title='😀 😎 👍 💯'
      onPress={action('clicked-emoji')}
      testID='emojis'
    />
  ));

  // action('clicked-emoji')