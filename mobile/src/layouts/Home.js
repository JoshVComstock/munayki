import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const HomeLayout = ({children}) => {
    return (
        <View style={{flex: 1}}>
            <View style={styles.header}>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 60,
    elevation: 5,
  },
  textHeader: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  children:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});