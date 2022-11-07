import React, { ReactElement, useContext, useState } from 'react';
import { Button, TextInput } from 'react-native';
import { Container } from '../../components';
import { AuthContext } from '../../main';

export function Login(): ReactElement {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useContext(AuthContext);

  return (
    <Container>
      <TextInput
        placeholder='Username'
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder='Password'
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
