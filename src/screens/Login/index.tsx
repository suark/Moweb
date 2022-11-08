import React, { ReactElement, useContext, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Container, Text, TextInput } from '../../components';
import { AuthContext } from '../../main';

export function Login(): ReactElement {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useContext(AuthContext);

  return (
    <Container>
      <Text>Username</Text>
      <TextInput
        style={styles.textInput}
        value={username}
        onChangeText={setUsername}
      />
      <Text>Password</Text>
      <TextInput
        style={styles.textInput}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button
        title='Log in'
        onPress={() => signIn({ username, password })}
      />
    </Container>
  );
}

export function LogoutButton(): ReactElement {
  const { signOut } = useContext(AuthContext);
  return (
    <Button
      title='Log Out'
      onPress={() => signOut()}
    />
  );
}

export const styles = StyleSheet.create({
  textInput: {
    marginBottom: 16,
    marginTop: 4,
    width: 256,
    height: 40,
    paddingLeft: 8,
  },
});
