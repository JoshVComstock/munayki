import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, Image, Pressable, FlatList } from 'react-native';

const Index=({navigation})=>{
    const [contact, setContact] = useState([
        {name: 'Contacto 1',phone: 12345678,relation:"Padre"},
        {name: 'Contacto 2',phone: 12345678,relation:"Madre"},
        {name: 'Contacto 3',phone: 12345678,relation:"Hermana"},
    ]);

    const renderContact = ({item}) => (
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                    source={require('../../../assets/user.png')}
                    style={{width: 40, height: 40}}
                />
                <View style={{marginLeft: 10}}>
                    <Text style={{fontSize: 18, fontWeight: 'bold', letterSpacing: 0.25, color: '#3c3c3c'}}>{item.name}</Text>
                    <Text style={styles.text}>{item.phone}</Text>
                </View>
            </View>
            <Pressable style={{justifyContent:'center', alignItems:'center',marginLeft:'20%', backgroundColor: '#019879', paddingHorizontal:24, paddingVertical:8, elevation:6, borderRadius: 4}} onPress={() => navigation.navigate('EditFriend',{contact:item})}>
                <Text>Editar</Text>
            </Pressable>
        </View>
    );

    return(
        <View style={styles.home}>
            <View style={styles.container}>
                <View style={styles.contacts}>
                   <FlatList
                       data={contact}
                       renderItem={renderContact}
                       keyExtractor={(item, index) => index.toString()}
                   />
                </View>
                <Image
                    source={require('../../../assets/chat.webp')}
                    style={{width: 160, height: 160, margin:30}}
                />
                <Text style={styles.text}>
                    Agregar a tus amistades de confianza
                    para que esten enterados de cualquier
                    emergencia
                </Text>
                <Pressable style={styles.button} onPress={()=>navigation.navigate('AddFriend')}>
                    <Text style={styles.buttonText}>Agregar Amistad</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    home:{
        flex:1,
        backgroundColor:'#fff',
        justifyContent:'space-between',
        alignItems:'center',
    },
    contacts: {
        width: '100%',
        padding: 16,
        justifyContent: 'space-between',
        alignItems:'flex-start',
    },
    container: {
        height: 200,
        width: '100%',
        padding: 16,
        borderRadius: 10,
        justifyContent: 'space-between',
        alignItems:'center'
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#706e6f',
    },
    buttonText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
    },
    button: {
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 12,
          paddingHorizontal: 32,
          borderRadius: 8,
          elevation: 3,
          backgroundColor: '#fab153',
          marginTop:30,
    },
});

export default Index