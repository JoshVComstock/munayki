import React, { useState } from 'react';
import { useEffect } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { NavigationContainer, useNavigationState  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const NavBar = ({navigation, currentView, onNavigate}) => {
    const isHomeActive = currentView === 'Menu';
    const isProfileActive = currentView === 'Profile';
    const isAboutUsActive = currentView === 'AboutUs';
    const isContactsActive = currentView === 'Index';

    const state = useNavigationState(state => state);

    useEffect(() => {
        const currentRoute = state.routes[state.index].name;
        onNavigate(currentRoute);
    }, [state]);

    const handlePress = (screenName) => {
        navigation.navigate(screenName);
        onNavigate(screenName);
    };

    return(
        <View style={styles.navBar}>
            <Pressable onPress={()=>handlePress('Profile')} style={[
                styles.navItem,
                isProfileActive ? {backgroundColor: '#4eb9a7'} : {},
                isContactsActive ? {backgroundColor: '#706e6f'} : {},
                isHomeActive ? {backgroundColor: '#706e6f'} : {},
                isAboutUsActive ? {backgroundColor: '#706e6f'} : {},
                ]}>
                <FontAwesome name="user-circle" size={30} color="#fff" />
                <Text style={styles.navText}>Perfil</Text>
            </Pressable>
            <Pressable onPress={() => handlePress('Menu')} style={[
                styles.navItem,
                isHomeActive ? {backgroundColor: '#ea547a'} : {},
                isContactsActive ? {backgroundColor: '#706e6f'} : {},
                isProfileActive ? {backgroundColor: '#706e6f'} : {},
                isAboutUsActive ? {backgroundColor: '#706e6f'} : {}
                ]}>
              <FontAwesome name="home" size={30} color="#fff" />
              <Text style={styles.navText}>Casa</Text>
            </Pressable>
            <Pressable onPress={()=>handlePress('AboutUs')} style={[
                styles.navItem,
                isAboutUsActive ? {backgroundColor: '#6d559f'}:{},
                isContactsActive ? {backgroundColor: '#706e6f'} : {},
                isHomeActive ? {backgroundColor: '#706e6f'} : {},
                isProfileActive ? {backgroundColor: '#706e6f'} : {}
                ]}>
                <FontAwesome name="book" size={30} color="#fff" />
                <Text style={styles.navText}>Infórmate</Text>
            </Pressable>
            <Pressable onPress={()=>handlePress('Index')} style={[
                styles.navItem,
                isContactsActive ? {backgroundColor: '#fab153'}:{},
                isProfileActive ? {backgroundColor: '#706e6f'} : {},
                isHomeActive ? {backgroundColor: '#706e6f'} : {},
                isAboutUsActive ? {backgroundColor: '#706e6f'} : {}
                ]}>
                <FontAwesome name="address-book" size={30} color="#fff" />
                <Text style={styles.navText}>Contactos</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: '#706e6f',
        paddingVertical: 10,
        width: '100%',
    },
    navItem: {
        alignItems: 'center',
        paddingHorizontal: 20,
        borderRadius: 4,
    },
    navText: {
        color: '#fff',
        marginTop: 5,
    },
});

export default NavBar;