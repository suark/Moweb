import React, { ReactElement, useContext, useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import { AuthContext } from '../../navigation';

export function Login(): ReactElement {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useContext(AuthContext);

  return (
    <View>
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
    </View>
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
