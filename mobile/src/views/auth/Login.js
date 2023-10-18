import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, Image, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPwdHidden, setisPwdHidden] = useState(true);
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = () => {
      let errors = {};

      if (!email) {
          errors.email = 'Ingrese su email';
      } else if (!/\S+@\S+\.\S+/.test(email)) {
          errors.email = 'Email no valido';
      }

      if (!password) {
          errors.password = 'Ingrese su contraseña';
      } else if (password.length < 6) {
          errors.password = 'La contraseña debe ser mayor a 6 caracteres';
      }

      setErrors(errors);

      if (Object.keys(errors).length === 0) {
          setIsFormValid(true);
          loginUser();
      } else {
          setIsFormValid(false);

          let errorString = '';
          Object.values(errors).forEach((error, index) => {
              errorString += `${index + 1}. ${error}\n`;
          });

          Alert.alert(
              'Errores en el formulario',
              errorString,
              [
                  {text: 'OK', onPress: () => console.log('OK Pressed')}
              ],
              {cancelable: false}
          );
      }
  };

  const loginUser = async () => {
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          correo: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error);
      }

      console.log(data);
      navigation.navigate('Menu')
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSubmit = () => {
      validateForm();
  };

  return (
      <View style={styles.home}>
            <View style={styles.container}>
                <View>
                    <Image
                        source={require('../../../assets/user.png')}
                        style={{width: 140, height: 120, marginLeft:40}}
                    />
                    <Text style={styles.text}>
                        Correo Electronico
                    </Text>
                    <TextInput
                      style={styles.input}
                      placeholder="ejemplo@gmail.com"
                      placeholderTextColor="#706e6f"
                      value={email}
                      onChangeText={setEmail}
                      activeUnderlineColor="yellow"
                      underlineColor="red"
                    />
                    <Text style={styles.text}>
                        Contraseña
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                        <TextInput
                          style={styles.inputRowPwd}
                          placeholder="Tu contraseña"
                          placeholderTextColor="#706e6f"
                          value={password}
                          onChangeText={setPassword}
                          secureTextEntry={isPwdHidden}
                        />
                        <Pressable onPress={() => setisPwdHidden(!isPwdHidden)}>
                            <FontAwesome name={isPwdHidden ? 'eye' : 'eye-slash'} color={'#706e6f'} size={25} />
                        </Pressable>
                    </View>
                </View>
                <Pressable style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.text}>Entrar</Text>
                </Pressable>
                <Text style={styles.link} onPress={() => navigation.navigate('Register')}>
                    No tienes cuenta?
                </Text>
            </View>
      </View>
  );
}

const styles = StyleSheet.create({
  home:{
    backgroundColor:'#fff',
    flex:1,
    width: '100%',
    justifyContent:'center',
    alignItems:'center',
  },
  container: {
    height: 400,
    width: 250,
    borderColor:'#ea547a',
    borderWidth:1,
    padding: 16,
    borderRadius: 10,
    justifyContent: 'space-evenly',
  },
  input: {
    height: 40,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: 20,
    padding: 8,
    borderRadius:2,
  },
  inputRowPwd:{
    height: 40,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: 20,
    padding: 8,
    borderRadius:2,
    width:'90%',
  },
  button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: '#fab153',
  },
  text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: '#3c3c3c',
  },
  link:{
    color:'#069478',
    marginTop:20,
    textDecorationLine: 'underline',
    fontSize:15,
  },
});

export default Login;