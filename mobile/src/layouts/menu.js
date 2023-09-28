import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { NormalButton, SquareButton, RectButton, LowButton, SquareButtona, SquareButtone, SquareButton1, LowButton1} from './Button'

const Menu = () => {
    return (
        <View style={styles.container}>
           <View>
            <NormalButton onPress={()=>alert('acabas de oprimir el botonde panico boton de panico')} text ="BOTON DE PANICO"/>
           </View>
           <View style={styles.container2}>
           <RectButton onPress={()=>alert('acabas de oprimir el botonde panico boton de IDA')} text ="EN CAMINO"/>
           <RectButton onPress={()=>alert('acabas de oprimir el botonde panico boton de ESTOY BIEN')} text ="ESTOY BIEN"/>
           </View>
           <View style={styles.container2}>
           <LowButton1 onPress={()=>alert('acabas de oprimir el botonde panico boton de zona?')} text =""/>
           <LowButton onPress={()=>alert('acabas de oprimir el botonde panico boton de perfil')} text =""/> 
           </View>
        </View>
    )
}

export default Menu

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly', 
        borderRadius:10,       
      },
      container2: {
        flexDirection: 'row', 
        justifyContent: 'space-evenly',  
      },
  });
