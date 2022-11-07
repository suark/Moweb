import React, { ReactElement, useState } from 'react';
import { Switch } from 'react-native';
import { Container, Text } from '../../components';

export function Settings(): ReactElement {
  const [switchVal1, setSwitchVal1] = useState(true);
  const [switchVal2, setSwitchVal2] = useState(false);
  const [switchVal3, setSwitchVal3] = useState(false);
  return (
    <Container>
      <Text>Some Option</Text>
      <Switch
        value={switchVal1}
        onValueChange={(newValue) => setSwitchVal1(newValue)}
      />
      <Text>Some Other Option</Text>
      <Switch
        value={switchVal2}
        onValueChange={(newValue) => setSwitchVal2(newValue)}
      />
      <Text>Some Other Other Option</Text>
      <Switch
        value={switchVal3}
        onValueChange={(newValue) => setSwitchVal3(newValue)}
      />
    </Container>
  );
}
