import { View, Text, StyleSheet } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import React from 'react'

const HomeLayout = ({children}) => {
    return (
        <View style={{flex: 1}}>
            <View style={styles.header}>
                <FontAwesome name="heartbeat" size={60} color="#3c3c3c" />
                <Text style={styles.textHeader}>Munayki</Text>
            </View>
            <View style={styles.children}>
                {children}
            </View>
        </View>
    )
}

export default HomeLayout

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#ea547a',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    elevation: 5,
    flexDirection:'row',
  },
  textHeader: {
    fontSize: 30,
    color:'#FFF',
    fontWeight: 'bold',
    paddingLeft:'4%'
  },
  children:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});