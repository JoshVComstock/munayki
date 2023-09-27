import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, Image, Pressable } from 'react-native';

const Register=({navigation})=>{
    const [ci, setCI] = useState('');
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [phone, setPhone] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPwd, setConfirmPwd] = useState('');
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);

    const validateForm = () => {
          let errors = {};

          if (!ci) {
             errors.ci = 'Ingrese su carnet  de identidad';
          } else if (ci.length < 1 || ci.length> 10) {
             errors.ci = 'CI no valido';
          }
          if (!name) {
             errors.name = 'Ingrese su nombre';
          } else if (name.length < 1 || !/^[a-zA-Z]+$/.test(name)) {
             errors.name = 'Nombre no valido';
          }
          if (!lastname) {
             errors.lastname = 'Ingrese su apellido';
          } else if (lastname.length < 1 || !/^[a-zA-Z\s]+$/.test(lastname)) {
             errors.ci = 'Apellido no valido';
          }
          if (!phone) {
             errors.phone = 'Ingrese su telefono';
          } else if (phone.length < 8) {
             errors.phone = 'El telefono debe tener 8 numeros';
          }
          if (!age) {
             errors.age = 'Ingrese su edad';
          }

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

          if (!confirmPwd) {
              errors.confirmPwd = 'Confirme su contraseña';
          } else if (confirmPwd!=password) {
              errors.confirmPwd = 'Las contraseñas no coinciden';
          }

          setErrors(errors);

          if (Object.keys(errors).length === 0) {
              setIsFormValid(true);
              navigation.navigate('Index')
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

    const handleSubmit = () => {
      validateForm();
    };

    return(
        <View style={styles.home}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.text}>
                        Carnet de Identidad
                    </Text>
                    <TextInput
                      style={styles.input}
                      placeholder="CI"
                      value={ci}
                      onChangeText={setCI}
                    />
                    <Text style={styles.text}>
                        Nombre
                    </Text>
                    <TextInput
                      style={styles.input}
                      placeholder="Nombre"
                      value={name}
                      onChangeText={setName}
                    />
                    <Text style={styles.text}>
                        Apellido
                    </Text>
                    <TextInput
                      style={styles.input}
                      placeholder="Apellido"
                      value={lastname}
                      onChangeText={setLastname}
                    />
                    <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
                        <Text style={styles.text}>
                            Telefono
                        </Text>
                        <Text style={styles.text}>
                            Edad
                        </Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
                        <TextInput
                          style={styles.input}
                          placeholder="Telefono"
                          value={phone}
                          onChangeText={setPhone}
                          inputMode="numeric"
                          maxLength={8}
                        />
                        <TextInput
                          style={styles.input}
                          placeholder="Edad"
                          value={age}
                          onChangeText={setAge}
                          inputMode="numeric"
                          maxLength={3}
                        />
                    </View>
                    <Text style={styles.text}>
                        Correo Electronico
                    </Text>
                    <TextInput
                      style={styles.input}
                      placeholder="Email"
                      value={email}
                      onChangeText={setEmail}
                    />
                    <Text style={styles.text}>
                        Contraseña
                    </Text>
                    <TextInput
                      style={styles.input}
                      placeholder="Contraseña"
                      value={password}
                      onChangeText={setPassword}
                      secureTextEntry
                    />
                    <Text style={styles.text}>
                        Confirmar contraseña
                    </Text>
                    <TextInput
                      style={styles.input}
                      placeholder="Confirmar contraseña"
                      value={confirmPwd}
                      onChangeText={setConfirmPwd}
                      secureTextEntry
                    />
                </View>
                <Pressable style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.text}>Registrarse</Text>
                </Pressable>
                <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
                    Ya tienes una cuenta?
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    home:{
        backgroundColor:'#E7E0E8',
        flex:1,
        width: '100%',
        justifyContent:'center',
        alignItems:'center',
      },
  container: {
      height: 650,
      width: 250,
      backgroundColor: '#FFF',
      padding: 16,
      borderRadius: 10,
      justifyContent: 'space-evenly',
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 20,
      padding: 8,
      borderRadius:6,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#FFC9BB',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
    },
    link:{
      color:'#B7D2EF',
      marginTop:20,
      textDecorationLine: 'underline',
      fontSize:15,
    },
});

export default Register