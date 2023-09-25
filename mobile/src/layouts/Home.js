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
    backgroundColor: '#E7E0E8',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
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