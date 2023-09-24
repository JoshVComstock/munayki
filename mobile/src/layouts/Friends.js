import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const FriendsLayout = ({children}) => {
    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.textHeader}>Amistades</Text>
            </View>
            <View style={styles.container}>
                {children}
            </View>
        </View>
    )
}

export default FriendsLayout

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
  },
  textHeader: {
    fontSize: 30,
    backgroundColor: '#371364',
    color: '#fff',
    fontWeight: 'bold',
  },
  container:{
    alignItems: 'center',
    justifyContent: 'center',
  }
});