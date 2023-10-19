import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, Image, Pressable } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Register=({navigation})=>{
    const [ci, setCI] = useState('');
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [phone, setPhone] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const generos= ["Femenino","masculino"];
    const [gender, setGender] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPwd, setConfirmPwd] = useState('');
    const [isPwdHidden, setisPwdHidden] = useState(true);
    const [isConfirmPwdHidden, setIsConfirmPwdHidden] = useState(true);
    const [isFirstStep, setIsFirstStep] = useState(true);
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
              createUser();
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

    const createUser = async () => {
      try {
        const response = await fetch('https://express-vercel-one-mu.vercel.app/user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nombre: name,
            apellido: lastname,
            edad: age,
            telefono: phone,
            carnet: ci,
            correo: email,
            password: password,
            rol: 'usuario',
            genero: gender,
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error);
        }

        console.log(data);
        navigation.navigate('Index')
      } catch (error) {
        console.error('Error:', error);
      }
    };

    const handleSubmit = () => {
      validateForm();
    };

    return(
        <View style={styles.home}>
            <View style={styles.container}>
                {isFirstStep ? (
                    <View>
                        <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
                            <Text style={styles.text}>
                                Nombre
                            </Text>
                            <Text style={styles.text}>
                                Apellido
                            </Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
                            <TextInput
                              style={styles.inputRow}
                              placeholder="Ej: Pedro"
                              placeholderTextColor="#706e6f"
                              value={name}
                              onChangeText={setName}
                            />
                            <TextInput
                              style={styles.inputRow}
                              placeholder="Ej: Rejas"
                              placeholderTextColor="#706e6f"
                              value={lastname}
                              onChangeText={setLastname}
                            />
                        </View>
                        <Text style={styles.text}>
                            Correo Electronico
                        </Text>
                        <TextInput
                          style={styles.input}
                          placeholder="ejemplo@gmail.com"
                          placeholderTextColor="#706e6f"
                          value={email}
                          onChangeText={setEmail}
                        />
                        <Text style={styles.text}>
                            Contraseña
                        </Text>
                        <View style={{flexDirection: 'row'}}>
                            <TextInput
                              style={styles.inputRowPwd}
                              placeholder="Contraseña"
                              placeholderTextColor="#706e6f"
                              value={password}
                              onChangeText={setPassword}
                              secureTextEntry={isPwdHidden}
                            />
                            <Pressable onPress={() => setisPwdHidden(!isPwdHidden)}>
                                <FontAwesome name={isPwdHidden ? 'eye' : 'eye-slash'} color={'#706e6f'} size={25} />
                            </Pressable>
                        </View>
                        <Text style={styles.text}>
                            Confirmar contraseña
                        </Text>
                        <View style={{flexDirection: 'row'}}>
                            <TextInput
                              style={styles.inputRowPwd}
                              placeholder="Confirmar contraseña"
                              placeholderTextColor="#706e6f"
                              value={confirmPwd}
                              onChangeText={setConfirmPwd}
                              secureTextEntry={isConfirmPwdHidden}
                            />
                            <Pressable onPress={() => setIsConfirmPwdHidden(!isConfirmPwdHidden)}>
                                <FontAwesome name={isConfirmPwdHidden ? 'eye' : 'eye-slash'} color={'#706e6f'} size={25} />
                            </Pressable>
                        </View>
                        <Pressable style={styles.nextButton} onPress={() => setIsFirstStep(false)}>
                            <Text style={styles.text}>Siguiente</Text>
                        </Pressable>
                    </View>
                ):(
                    <View>
                        <Text style={styles.text}>
                            CI
                        </Text>
                        <TextInput
                          style={styles.input}
                          placeholder="Carnet de Identidad"
                          placeholderTextColor="#706e6f"
                          value={ci}
                          onChangeText={setCI}
                        />
                        <Text style={styles.text}>
                            Genero
                        </Text>
                        <SelectDropdown
                            buttonStyle={styles.dropdown}
                            buttonTextStyle={{color:'#706e6f'}}
                            defaultButtonText= "Escoge tu genero"
                            data={generos}
                            renderDropdownIcon={isOpened => {
                              return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#706e6f'} size={18} />;
                            }}
                            dropdownIconPosition={'right'}
                            onSelect={(selectedItem, index) => {
                                setGender(selectedItem);
                            }}
                            buttonTextAfterSelection={(selectedItem, index) => {
                                return selectedItem
                            }}
                            rowTextForSelection={(item, index) => {
                                return item
                            }}
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
                              style={styles.inputRow}
                              placeholder="Ej: 12345678"
                              placeholderTextColor="#706e6f"
                              value={phone}
                              onChangeText={setPhone}
                              inputMode="numeric"
                              maxLength={10}
                            />
                            <TextInput
                              style={styles.inputRow}
                              placeholder="Ej: 21"
                              placeholderTextColor="#706e6f"
                              value={age}
                              onChangeText={setAge}
                              inputMode="numeric"
                              maxLength={3}
                            />
                        </View>
                        <Pressable style={styles.nextButton} onPress={() => setIsFirstStep(true)}>
                            <Text style={styles.text}>Anterior</Text>
                        </Pressable>
                        <Pressable style={styles.button} onPress={handleSubmit}>
                            <Text style={styles.text}>Registrarse</Text>
                        </Pressable>
                    </View>
                )}
                <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
                    Ya tienes una cuenta?
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
      height: 500,
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
    inputRow:{
      height: 40,
      borderBottomColor: 'gray',
      borderBottomWidth: 1,
      marginBottom: 20,
      padding: 8,
      borderRadius:2,
      width:105,
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
        marginTop:20,
    },
    nextButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#4dc0df',
    },
    dropdown:{
        width:"100%",
        height:40,
        backgroundColor: 'transparent',
        borderWidth:1,
        borderRadius:4,
        borderColor: 'gray',
        marginBottom: 20,
        color: '#706e6f'
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

export default Register