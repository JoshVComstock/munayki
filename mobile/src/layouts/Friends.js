import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const FriendsLayout = ({children}) => {
    return (
        <View style={{flex: 1}}>
            <View style={styles.header}>
                <Text style={styles.textHeader}>Amistades</Text>
            </View>
            <View style={styles.children}>
                {children}
            </View>
        </View>
    )
}

export default FriendsLayout

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#6d559f',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
    width: "100%",
  },
  textHeader: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  },
  children:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});