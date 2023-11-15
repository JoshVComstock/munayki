import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, Image, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DateTimePicker from '@react-native-community/datetimepicker';

const AddFriend = ({navigation}) => {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [phone, setPhone] = useState('');
  const [relation, setRelation] = useState('');
  const [age, setAge] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDate, setShowDate] = useState(false);
  const [dateString, setDateString] = useState('00/00/0000');
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
    setDateString(fDate);
    setShowDate(false);

    let today = new Date();
    let age = today.getFullYear() - tempDate.getFullYear();
    let m = today.getMonth() - tempDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < tempDate.getDate())) {
        age--;
    }
    setAge(age);
  };

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

      if (dateString=='00/00/0000') {
         errors.age = 'Ingrese una fecha valida';
      }

      setErrors(errors);

      if (Object.keys(errors).length === 0) {
          setIsFormValid(true);
          createContact();
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

  const createContact = async () => {
    try {
      console.log('Entro a crear contacto');
      const response = await fetch('https://express-vercel-one-mu.vercel.app/user/:userId/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: 'name',
          apellido: 'lastname',
          edad: 12,
          telefono: 12345678,
          relacion: 'relation',
          usuarioId: 4,
        }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error);
      }

      console.log(data);
    } catch (error) {
      console.error('Error:', error);
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
                        Fecha de Nacimiento
                    </Text>
                    <Pressable style={styles.dateTime} onPress={()=> setShowDate(true)}>
                        <Text>{dateString}</Text>
                        {showDate &&(
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={date}
                                mode={'date'}
                                is24Hour={true}
                                display="default"
                                onChange={onChange}
                            />
                        )}
                    </Pressable>
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
  inputRow:{
    height: 40,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: 20,
    padding: 8,
    borderRadius:2,
    width:105,
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
  dateTime: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    height:40,
    width: '50%'
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