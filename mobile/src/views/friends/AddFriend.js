import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, Image, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AddFriend = ({navigation}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [relation, setRelation] = useState('');
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = () => {
      let errors = {};

      if (!name) {
          errors.name = 'Ingrese su nombre';
      } else if (name.length < 1 || !/^[a-zA-Z\s]+$/.test(name)) {
          errors.name = 'Nombre no valido';
      }

      if (!phone) {
          errors.phone = 'Ingrese su telefono';
      } else if (phone.length < 8) {
          errors.phone = 'El telefono debe tener 8 numeros';
      }

      if (!relation) {
          errors.relation = 'Ingrese la relacion con el contacto';
      } else if (relation.length < 1 || !/^[a-zA-Z\s]+$/.test(relation)) {
          errors.name = 'Relacion no valida';
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

  return (
      <View style={styles.home}>
            <Image
                source={require('../../../assets/chat.webp')}
                style={{width: 160, height: 160, marginLeft:35,marginTop: 40}}
            />
            <View style={styles.container}>
                <View>
                    <Text style={styles.text}>
                        Nombre
                    </Text>
                    <TextInput
                      style={styles.input}
                      placeholder="Ejem: Pedro"
                      value={name}
                      onChangeText={setName}
                      underlineColor="red"
                    />
                    <Text style={styles.text}>
                        Telefono
                    </Text>
                    <TextInput
                      style={styles.input}
                      placeholder="Ejem: 12345678"
                      value={phone}
                      onChangeText={setPhone}
                      inputMode="numeric"
                      maxLength={8}
                    />
                    <Text style={styles.text}>
                        Relacion
                    </Text>
                    <TextInput
                      style={styles.input}
                      placeholder="Ejem: Progenitor"
                      value={relation}
                      onChangeText={setRelation}
                    />
                </View>
                <Pressable style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.text}>Agregar Contacto</Text>
                </Pressable>
                <Text style={styles.link} onPress={() => navigation.navigate('Index')}>
                    Cancelar
                </Text>
            </View>
      </View>
  );
}

const styles = StyleSheet.create({
  home:{
    backgroundColor:'#FFF',
    width: '100%',
    height:'100%',
    justifyContent:'flex-start',
    alignItems:'center',
  },
  container: {
    marginTop:30,
    height: 350,
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
    marginBottom: 15,
    padding: 8,
    borderRadius:2,
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

export default AddFriend;