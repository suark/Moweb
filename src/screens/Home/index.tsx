import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { ReactElement } from 'react';
import { Button } from 'react-native';
import { Container } from '../../components';
import { MainStackParams } from '../../main';

type NavigationProps = StackNavigationProp<MainStackParams, 'Home'>;

export function Home(): ReactElement {
  const { navigate } = useNavigation<NavigationProps>();
  return (
    <Container>
      <Button
        testID='settings'
        title='Go to Settings'
        onPress={() => navigate('Settings')}
      />
    </Container>
  );
}
