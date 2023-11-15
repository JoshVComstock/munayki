import { View, Text, TextInput, StyleSheet, Alert, Image, Pressable } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DateTimePicker from '@react-native-community/datetimepicker';
import React, {useState, useEffect, useContext} from 'react'
import UserContext from '../../UserContext';

const Profile = ({navigation}) => {
    const {userId}=useContext(UserContext);
    const [ci, setCI] = useState('');
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState(new Date());
    const [showDate, setShowDate] = useState(false);
    const [dateString, setDateString] = useState('00/00/0000');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const generos= ["Femenino","masculino"];
    const [gender, setGender] = useState('');
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        setDateString(fDate);
        setShowDate(false);
    };

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
          if (dateString=='00/00/0000') {
             errors.age = 'Ingrese una fecha valida';
          }

          setErrors(errors);

          if (Object.keys(errors).length === 0) {
              setIsFormValid(true);
              updateUserProfile();
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

    const updateUserProfile = async () => {
        try {
          const response = await fetch(`https://munayki-serve.vercel.app/user/${userId}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              nombre: "name",
              apellido: "lastname",
              carnet: 123456,
              correo: "email@gmail.com",
              edad: 19,
              genero: "gender",
              telefono: 23456798,
            }),
          });
    
          const data = await response.json();
          console.log(data);
          if (!response.ok) {
            throw new Error(data.error);
          }
    
          // Aquí puedes manejar la respuesta de la API después de la actualización
          console.log('Perfil actualizado con éxito:', data);
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
                        Nombre
                    </Text>
                    <TextInput
                      style={styles.input}
                      placeholder="Ej: Pedro"
                      placeholderTextColor="#706e6f"
                      value={name}
                      onChangeText={setName}
                    />
                    <Text style={styles.text}>
                        Apellido
                    </Text>
                    <TextInput
                      style={styles.input}
                      placeholder="Ej: Rejas"
                      placeholderTextColor="#706e6f"
                      value={lastname}
                      onChangeText={setLastname}
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
                    <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
                        <Text style={styles.text}>
                            Telefono
                        </Text>
                        <Text style={styles.text}>
                            Fecha de Nacimiento
                        </Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
                        <TextInput
                          style={styles.inputRow}
                          placeholder="Ej: 12345678"
                          placeholderTextColor="#706e6f"
                          value={phone}
                          onChangeText={setPhone}
                          inputMode="numeric"
                          maxLength={10}
                        />
                        <Pressable style={styles.nextButton} onPress={()=> setShowDate(true)}>
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
                    </View>
                </View>
                <Pressable style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.text}>Actualizar</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Profile;

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
        width: '90%',
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
        paddingHorizontal: 20,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        height:40,
        width: '45%'
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
});
