import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {

    console.log(`Iniciando sesión con el usuario: ${username} y la contraseña: ${password}`);
  };

  return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Usuario"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button style={styles.button} title="Entrar" onPress={handleLogin} />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 10,
    justifyContent: 'flex-bottom',
    alignItems: 'bottom',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
  },
  button:{
    backgroundColor: "#FFDE59",
  },
});

export default Login;