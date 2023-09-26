import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { NormalButton, SquareButton, RectButton } from './Button'

const Menu = () => {
    return (
        <View style={styles.container}>
           <View>
            <NormalButton  onPress={()=>alert('acabas de oprimir el botonde panico boton de panico')} text ="BOTON DE PANICO"/>
           </View>
           
                <View style={styles.container2}>
                <SquareButton onPress={()=>alert('acabas de oprimir el botonde panico boton de ASISTENCIA')} text ="ASISTENCIA"/>
                <SquareButton onPress={()=>alert('acabas de oprimir el botonde panico boton de EMERGENCIA')} text ="EMERGENCIA"/>    
                </View>                 
                <View style={styles.container2}>
                <SquareButton onPress={()=>alert('acabas de oprimir el botonde panico boton de EMERGENCIA')} text ="VIOLENTOMETRO"/>
                <SquareButton onPress={()=>alert('acabas de oprimir el botonde panico boton de EMERGENCIA')} text ="MAPA"/>

           </View>
           <View style={styles.container2}>
           <RectButton onPress={()=>alert('acabas de oprimir el botonde panico boton de IDA')} text ="EN CAMINO"/>
           <RectButton onPress={()=>alert('acabas de oprimir el botonde panico boton de ESTOY BIEN')} text ="ESTOY BIEN"/>
           </View>
           <View>

           </View>
        </View>
    )
}

export default Menu

const styles = StyleSheet.create({
    container: {
        flexDirection: 'colum', 
        justifyContent: 'center', 
        padding:0,
      },
      container2: {
        flexDirection: 'row', 
        justifyContent: 'center',  
      },
  });