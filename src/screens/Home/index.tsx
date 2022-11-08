import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { ReactElement } from 'react';
import { Button, Container } from '../../components';
import { MainStackParams } from '../../main';

type NavigationProps = StackNavigationProp<MainStackParams, 'Home'>;

export function Home(): ReactElement {
  const { navigate } = useNavigation<NavigationProps>();
  return (
    <Container>
      <Button
        title='Go to Settings'
        onPress={() => navigate('Settings')}
        testID='settings'
      />
    </Container>
  );
}
