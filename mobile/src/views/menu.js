import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, {useState} from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Menu = ({navigation}) => {
    const [isPressed, setIsPressed] = useState(false);
    return (
        <View style={styles.container}>
           <Text style={styles.title}>
               BOTON DE PANICO
           </Text>
           <Pressable style={{alignItems:'center', paddingTop:'30%'}} onPress={()=>setIsPressed(true)}>
               <View style={styles.outerCircle}>
                   <View style={[styles.innerCircle, {backgroundColor: isPressed ? '#ea547a':'#4eb9a7'}]}>
                   </View>
               </View>
               <Text style={[styles.subTitle, isPressed ? {color: '#ea547a'}:{color:'#4eb9a7'}]}>
                   {isPressed ? 'Pidiendo ayuda':'Pide Ayuda'}
               </Text>
           </Pressable>
           <Text style={styles.text}>
               Presiona el botón si necesitas{"\n"}asistencia, o mantén presionados los{"\n"}
               botones de subir y bajar el volumen{"\n"}
               durante 5 segundos.
           </Text>
        </View>
    )
}

export default Menu

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems:'center',
    },
    title:{
         fontSize: 36,
         lineHeight: 27,
         fontWeight: 'bold',
         letterSpacing: 0.25,
         color: '#3c3c3c',
         paddingLeft:'5%',
         paddingTop:'10%',
         textDecorationLine: 'underline',
    },
    text:{
        fontSize: 18,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#706e6f',
        paddingTop:'10%'
    },
    subTitle:{
        fontSize: 26,
        lineHeight: 27,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        textDecorationLine: 'underline',
        paddingTop:'2%'
    },
    outerCircle: {
        borderRadius: 90,
        width: 180,
        height: 180,
        backgroundColor: '#706e6f',
    },
    innerCircle: {
        borderRadius: 80,
        width: 160,
        height: 160,
        margin: 10
    },
  });
